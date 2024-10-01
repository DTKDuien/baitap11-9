'use client'

import { RefillHearts } from "@/actions/userProgress"
import { createStripeUrl } from "@/actions/userSubscription"
import { Button } from "@/components/ui/button"
import SuccessModel from "@/components/modals/successModel"
import { POINTS_TO_REFILL } from "@/constants"
import Image from "next/image"
import { useState, useTransition } from "react"
import { toast, Toaster } from "sonner"

type ItemsProps = {
    hearts: number
    points: number
    hasActiveSubscription: boolean
}

const Items = ({ hasActiveSubscription, hearts, points }: ItemsProps) => {
    const [pending, startTransition] = useTransition()
    const [isSuccessful, setIsSuccessful] = useState<boolean>(false)

    const onRefillHearts = () => {
        if (pending || hearts === 5 || points < POINTS_TO_REFILL) return

        startTransition(() => {
            RefillHearts().catch(() => toast.error('Something went wrong'))

            setIsSuccessful(true)
            setTimeout(() => { setIsSuccessful(false) }, 4000)
        })
    }

    const onUpgrade = () => {
        startTransition(() => {
            createStripeUrl()
                .then((response) => {
                    if (response.data) {
                        window.location.href = response.data
                    }
                }).
                catch(() => toast.error('Somethings went wrong..'))
        })
    }

    return (
        <ul className="w-full">
            {isSuccessful && <SuccessModel />}
            <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
                <Image src='/heart.svg' alt="hearts" height={60} width={60} />
                <div className="flex-1">
                    <p className="text-neutral-700 text-base lg:text-xl font-bold">
                        Refill hearts
                    </p>
                </div>
                <Button
                    disabled={
                        pending
                        || hearts === 5
                        || points < POINTS_TO_REFILL
                    }
                    onClick={onRefillHearts}>
                    {hearts === 5
                        ? 'full'
                        : (
                            <div className="flex items-center">
                                <Image src='/points.svg' alt='Points' height={20} width={20} />
                                <p>{POINTS_TO_REFILL}</p>
                            </div>
                        )
                    }
                </Button>
            </div>

            <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2">
                <Image src='/unlimited.svg' alt='Unlimited' height={60} width={60} />
                <div className="flex-1">
                    <p className="text-neutral-700 text-base lg:text-xl font-bold">
                        Unlimited hearts
                    </p>
                </div>
                <Button disabled={pending} onClick={onUpgrade}>
                    {hasActiveSubscription ? 'settings' : 'upgrade'}
                </Button>
            </div>
        </ul>
    )
}

export default Items