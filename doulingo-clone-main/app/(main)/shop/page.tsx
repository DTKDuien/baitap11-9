import FeedWrapper from "@/common/FeedWrapper"
import StickyWrapper from "@/common/StickyWrapper"
import UserProgress from "@/common/UserProgress"
import Items from "./Items"

import Quests from "@/common/Quests"
import { getUserProgress, getUserSubscription } from "@/db/queries"
import Image from "next/image"
import { redirect } from "next/navigation"
import PracticePromo from "@/common/PracticePromo"
import MobileUserProgress from "@/common/MobileUserProgress"

const ShopPage = async () => {

    const userProgress = await getUserProgress()
    const userSubscription = await getUserSubscription()

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

                    <Quests points={userProgress.points} />
                    <PracticePromo />
                </StickyWrapper>

                <FeedWrapper>
                    <div className="w-full flex flex-col items-center">
                        <Image src='/shop.svg' alt='Shop' height={90} width={90} />
                        <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
                            Shop
                        </h1>
                        <p className="text-muted-foreground text-center text-lg mb-6">
                            Spend your points on cool stuff.
                        </p>
                        <Items
                            hasActiveSubscription={isPro}
                            hearts={userProgress.hearts}
                            points={userProgress.points}
                        />
                    </div>
                </FeedWrapper>

            </div>
        </>
    )
}

export default ShopPage