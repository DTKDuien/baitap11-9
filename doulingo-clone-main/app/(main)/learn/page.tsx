import FeedWrapper from "@/common/FeedWrapper"
import Promo from "@/common/Promo"
import Quests from "@/common/Quests"
import StickyWrapper from "@/common/StickyWrapper"
import UserProgress from "@/common/UserProgress"
import Header from "./Header"
import Unit from "./Unit"

import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress, getUserSubscription } from "@/db/queries"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Lock, NotebookText, Star } from "lucide-react"
import MobileUserProgress from "@/common/MobileUserProgress"

const LearnPage = async () => {
    const userProgressData = getUserProgress()
    const unitsData = getUnits()
    const courseProgressData = getCourseProgress()
    const lessonPercentageData = getLessonPercentage()
    const userSubscriptionData = getUserSubscription()

    const [userProgress, units, courseProgress, lessonPercentage, userSubscription] = await Promise.all([
        userProgressData, unitsData, courseProgressData, lessonPercentageData, userSubscriptionData
    ])



    if (!userProgress || !userProgress.activeCourse) {
        redirect('/courses')
    }

    if (!courseProgress) {
        redirect('/courses')
    }

    const isPro = !!userSubscription?.isActive

    return (
        <>
            <MobileUserProgress
                activeCourse={userProgress.activeCourse}
                hearts={userProgress.hearts}
                points={userProgress.points}
                isPro={isPro}
            />

            <div className="flex flex-row-reverse gap-[48px] px-6">
                <StickyWrapper>
                    <UserProgress
                        activeCourse={userProgress.activeCourse}
                        hearts={userProgress.hearts}
                        points={userProgress.points}
                        hasActiveSubscription={isPro}
                    />

                    {isPro || <Promo />}
                    <Quests points={userProgress.points} />

                </StickyWrapper>

                <FeedWrapper>
                    <Header title={userProgress.activeCourse.title} />
                    {units.map((unit) => (
                        <div key={unit.id} className='mb-10'>
                            <Unit
                                id={unit.id}
                                order={unit.order}
                                description={unit.description}
                                title={unit.title}
                                lessons={unit.lessons}
                                activeLesson={courseProgress?.activeLesson}
                                activeLessonPercentage={lessonPercentage}
                            />
                        </div>
                    ))}

                    <div className="flex flex-col items-center">
                        <div
                            className='w-full rounded-xl p-5 text-white flex lg:items-center
                         justify-between border bg-neutral-400 mb-6 flex-col lg:flex-row'>
                            <div className="space-y-2.5">
                                <div className="flex items-center gap-1">
                                    <h3 className="text-2xl font-bold">Locked</h3>
                                    <Lock className='text-white' strokeWidth={3} />
                                </div>
                                <p className="text-lg">You haven&apost gotten to this unit yet.</p>
                            </div>
                            <Button
                                size='lg'
                                disabled
                                className="bg-neutral-400 text-white mt-2"
                            >
                                <NotebookText className="mr-2" />
                                guidebook
                            </Button>
                        </div>

                        <Button
                            size='rounded'
                            variant='locked'
                            className='h-[70px] w-[70px] cursor-default'>
                            <Lock className='h-9 w-9 fill-neutral-400 text-neutral-400 stroke-slate-400' strokeWidth={1} />
                        </Button>
                    </div>

                </FeedWrapper>
            </div>
        </>
    )
}

export default LearnPage