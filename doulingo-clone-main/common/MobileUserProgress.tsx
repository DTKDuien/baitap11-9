import React from 'react'
import UserProgress from './UserProgress';

type MobileUserProgressType = { 
    activeCourse: {
        id: number;
        title: string;
        imageSrc: string;
    }
    hearts: number
    points: number
    isPro: boolean
}

const MobileUserProgress = ({activeCourse, isPro, hearts, points}: MobileUserProgressType) => {
    return (
        <div className="lg:hidden mb-4 -mt-4 max-w-[300px] mx-auto">
            <UserProgress
                activeCourse={activeCourse}
                hearts={hearts}
                points={points}
                hasActiveSubscription={isPro}
            />
        </div>
    )
}

export default MobileUserProgress