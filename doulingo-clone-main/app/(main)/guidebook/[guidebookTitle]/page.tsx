import FeedWrapper from '@/common/FeedWrapper'
import Promo from '@/common/Promo'
import Quests from '@/common/Quests'
import StickyWrapper from '@/common/StickyWrapper'
import UserProgress from '@/common/UserProgress'
import { getLesson, getUnits, getUserProgress, getUserSubscription, getWordsOfTheUnit } from '@/db/queries'
import { challengeOptions } from '@/db/schema'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'
import GuideCard from '../GuideCard'
import Header from '../Header'

type GuidebookProps = {
    params: {
        guidebookTitle: number
    }
}

const Guidebook = async ({ params }: GuidebookProps) => {
    const paramsFigure = params.guidebookTitle

    const userProgressData = getUserProgress()
    const userSubscriptionData = getUserSubscription()
    const wordsOfTheUnitData = getWordsOfTheUnit(paramsFigure)
    const unitsData = getUnits()

    const [userProgress, userSubscription, wordsOfTheUnit] = await Promise.all([
        userProgressData, userSubscriptionData, wordsOfTheUnitData,
    ])

    if (!userProgress || !userProgress.activeCourse) {
        redirect('/courses')
    }



    const uniqueChallengeOptions: typeof challengeOptions.$inferSelect[] = []


    const isPro = !!userSubscription?.isActive


    return (
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
                <Header />

                <div className='flex flex-wrap w-full items-center gap-5 justify-center lg:justify-start border-b-2 pb-4'>
                    <Image src='/guide.svg' width={180} height={180} alt='Guidebook' />

                    <div className='text-center lg:text-start'>
                        <h1 className='text-xl font-bold'>Guide to Unit {params.guidebookTitle}</h1>
                        <p className="text-muted-foreground text-lg">Revise the words from this section.</p>
                    </div>
                </div>

                <h2 className='m-2 mt-4 text-lg font-bold uppercase text-[#20ACEB]'>Main words of the unit</h2>

                <div>
                    {wordsOfTheUnit.map(word => (
                        <GuideCard
                            key={word.id}
                            title={word.title}
                            audioSrc={word.audioSrc}
                            translate={word.translateTitle}
                        />
                    ))}
                </div>

            </FeedWrapper>
        </div>
    )
}

export default Guidebook