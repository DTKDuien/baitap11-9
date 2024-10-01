'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useHeartsModule } from '@/store/useHeartsModule'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const HeartsModal = () => {
    const router = useRouter()
    const [isClient, setIsClient] = useState<boolean>(false)
    const { isOpen, close } = useHeartsModule()

    useEffect(() => setIsClient(true), [])

    const onClick = () => {
        close()
        router.push('/store')
    }

    if (!isClient) {
        return null
    }

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className='max-w-md'>

                <DialogHeader className='flex items-center w-full mb-5'>
                    <div className='flex items-center w-full justify-center mb-5'>
                        <Image src='/death.png' height={160} width={160} alt='sedLogo' className='ms-[-18px]' />
                    </div>

                    <DialogTitle className='text-center font-bold text-2xl'>
                        You ran out of hearts!
                    </DialogTitle>
                    <DialogDescription className='text-center text-base'>
                        Get pro for unlimited hearts, or purchase in the store.
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className='mb-2 block'>

                    <div className='flex flex-col gap-y-4 w-full'>
                        <Button
                            variant='primary'
                            className='w-full'
                            size='lg'
                            onClick={onClick}>
                            Get unlimited hearts
                        </Button>

                        <Button
                            variant='primaryOutline'
                            className='w-full'
                            size='lg'
                            onClick={close}>
                            No thanks
                        </Button>
                    </div>

                </DialogFooter>

            </DialogContent>
        </Dialog>
    )
}

