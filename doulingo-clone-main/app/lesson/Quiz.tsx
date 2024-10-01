'use client'

import { upsertChallengeProgress } from "@/actions/challengeProgress"
import { reduceHearts } from "@/actions/userProgress"
import { defaultHearts } from "@/common/defaultHearts"
import { challengeOptions, challenges, userSubscription } from "@/db/schema"

import Image from "next/image"
import Confetti from 'react-confetti'
import { toast } from "sonner"

import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
import { useAudio, useWindowSize, useMount } from "react-use"

import Challenge from "./Challenge"
import Footer from "./Footer"
import Header from "./Header"
import QuestionBubble from "./QuestionBubble"
import ResultCard from "./ResultCard"
import { useHeartsModule } from "@/store/useHeartsModule"
import { usePracticeModule } from "@/store/usePracticeModule"

type QuizProps = {
    initialLessonId: number
    initialHearts: number
    initialPercentage: number
    initialLessonChallenges: (typeof challenges.$inferSelect & {
        completed: boolean
        challengeOptions: typeof challengeOptions.$inferSelect[]
    })[]
    userSubscription: typeof userSubscription.$inferSelect & {
        isActive: boolean
    } | null

}

const Quiz = ({ initialHearts, initialLessonChallenges, initialLessonId, initialPercentage, userSubscription }: QuizProps) => {
    const { open: openHeartsModule } = useHeartsModule()
    const { open: openPracticeModule } = usePracticeModule()

    useMount(() => {
        if (initialPercentage === 100) {
            openPracticeModule()
        }
    })

    const { width, height } = useWindowSize()
    const router = useRouter()
    const [finishAudio] = useAudio({ src: '/finish.mp3', autoPlay: true })

    const [
        correctAudio,
        _c,
        correctControls
    ] = useAudio({ src: '/correct.wav' })
    const [
        incorrectAudio,
        _i,
        incorrectControls
    ] = useAudio({ src: '/incorrect.wav' })

    const [pending, startTransition] = useTransition()

    const [lessonId, setLessonId] = useState(initialLessonId)
    const [hearts, setHearts] = useState(initialHearts)
    const [percentage, setPercentage] = useState(() => {
        return initialPercentage === 100 ? 0 : initialPercentage
    })
    const [challenges, setChallenges] = useState(initialLessonChallenges)
    const [activeIndex, setActiveIndex] = useState(() => {
        const uncompletedIndex = challenges.findIndex((challenge) => !challenge.completed)
        return uncompletedIndex === -1 ? 0 : uncompletedIndex
    })
    const [selectedOption, setSelectedOption] = useState<number>()
    const [status, setStatus] = useState<'correct' | 'wrong' | 'none'>('none')


    const currentChallenge = challenges[activeIndex]
    const options = currentChallenge?.challengeOptions ?? []


    const onNext = () => {
        setActiveIndex((current) => current + 1)
    }

    const onSelect = (id: number) => {
        if (status !== 'none') return

        setSelectedOption(id)
    }

    const onContinue = () => {
        if (!selectedOption) return

        if (status === 'wrong') {
            setStatus('none')
            setSelectedOption(undefined)
            return
        }

        if (status === 'correct') {
            onNext()
            setStatus('none')
            setSelectedOption(undefined)
            return 
        }

        const correctOption = options.find((option) => option.correct)

        if (!correctOption) return

        if (correctOption.id === selectedOption) {
            startTransition(() => {
                upsertChallengeProgress(currentChallenge.id).then((response) => {
                    if (response?.error === 'hearts') {
                        openHeartsModule()
                        return
                    }

                    correctControls.play()
                    setStatus('correct')
                    setPercentage((prev) => prev + 100 / challenges.length)

                    //this is a practice
                    if (initialPercentage === 100) {
                        setHearts((prev) => Math.min(prev + 1, defaultHearts))
                    }
                }).catch(() => toast.error('Something went wrong. Please try again.'))
            })
        } else {
            startTransition(() => {
                reduceHearts(currentChallenge.id).then((response) => {
                    if (response?.error === 'hearts') {
                        openHeartsModule()
                        return
                    }

                    incorrectControls.play()
                    setStatus('wrong')

                    if (!response?.error) {
                        setHearts((prev) => Math.max(prev - 1, 0))
                    }
                }).catch(() => toast.error('Something went wrong. Please try again.'))



            })
        }

    }

    if (!currentChallenge) {
        return (
            <>
                {finishAudio}
                <Confetti recycle={false} numberOfPieces={500} tweenDuration={10000} width={width} height={height} />
                <div className="h-screen flex flex-col justify-between">

                    <div className="flex flex-col gap-y-4 lg:gap-y-8 lg:max-w-lg
                 max-w-sm mx-auto text-center items-center justify-center h-full p-2">
                        <Image src='/finish.svg' alt='Finish' className='hidden lg:block' height={100} width={100} />
                        <Image src='/finish.svg' alt='Finish' className='block lg:hidden' height={50} width={50} />

                        <h1 className="text-lg lg:text-3xl font-bold text-neutral-700">
                            Great job! <br /> You&aposve completed the lesson
                        </h1>

                        <div className="flex items-center gap-x-4 w-full">
                            <ResultCard
                                variant='points'
                                value={challenges.length * 10}
                            />

                            <ResultCard
                                variant='hearts'
                                value={hearts}
                            />
                        </div>
                    </div>

                    <Footer
                        lessonId={lessonId}
                        status='completed'
                        onCheck={() => router.push('/learn')}
                    />
                </div>
            </>
        )
    }

    const IS_CHALLENGE_TYPE_ASSIST = currentChallenge.type === 'ASSIST'

    const title = IS_CHALLENGE_TYPE_ASSIST
        ? 'Select the correct meaning'
        : currentChallenge.question

    return (
        <div className="h-screen flex flex-col justify-around">
            {correctAudio}
            {incorrectAudio}

            <Header
                hearts={hearts}
                percentage={percentage}
                hasActiveSubscription={!!userSubscription?.isActive}
            />

            <div className="flex-1">
                <div className="h-full flex items-center justify-center">
                    <div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
                        <h1 className="text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700">
                            {title}
                        </h1>

                        <div>
                            {IS_CHALLENGE_TYPE_ASSIST && (
                                <QuestionBubble question={currentChallenge.question} />
                            )}
                        </div>
                        <Challenge
                            options={options}
                            onSelect={onSelect}
                            status={status}
                            selectedOption={selectedOption}
                            disabled={pending}
                            type={currentChallenge.type}
                        />

                    </div>

                </div>
            </div>

            <Footer disabled={pending || !selectedOption} status={status} onCheck={onContinue} />
        </div>
    )
}

export default Quiz