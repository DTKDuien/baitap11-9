'use server'

import { updateQuest } from "@/actions/quest"
import FeedWrapper from "@/common/FeedWrapper"
import MobileUserProgress from "@/common/MobileUserProgress"
import Promo from "@/common/Promo"
import StickyWrapper from "@/common/StickyWrapper"
import UserProgress from "@/common/UserProgress"
import { Progress } from "@/components/ui/progress"
import { quests } from "@/constants"

import { getUserProgress, getUserSubscription } from "@/db/queries"
import Image from "next/image"
import { redirect } from "next/navigation"
import PracticePromo from "../../../common/PracticePromo"


const QuestsPage = async () => {
    const userProgressData = getUserProgress()
    const userSubscriptionData = getUserSubscription()

    const [userProgress, userSubscription,] =
        await Promise.all([userProgressData, userSubscriptionData])

    if (!userProgress || !userProgress.activeCourse) {
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
                    <PracticePromo />
                </StickyWrapper>

                <FeedWrapper>
                    <div className="w-full flex flex-col items-center">
                        <Image src='/quests.svg' alt='Quests' height={90} width={90} />
                        <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
                            Quests
                        </h1>
                        <p className="text-muted-foreground text-center text-lg mb-6">
                            Complete quests by earning points!
                        </p>
                        <ul className="w-full">
                            {quests?.map((quest) => {
                                const progress = (userProgress.points / quest.value) * 100

                                return (
                                    <div key={quest.value} className='flex items-center w-full p-4 gap-x-4 border-t-2'>
                                        <Image src='/points.svg' alt="Points" width={50} height={50} />
                                        <div className='flex flex-col gap-y-2 w-full'>
                                            <p className="text-neutral-700 text-xl font-bold">
                                                {quest.title}
                                            </p>
                                            <Progress value={progress} className='h-3' />
                                        </div>



                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </FeedWrapper>

            </div>
        </>
    )
}

export default QuestsPage