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
import { useExitModule } from '@/store/useExitModule'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const ExitModule = () => {
    const router = useRouter()
    const [isClient, setIsClient] = useState<boolean>(false)
    const { isOpen, close } = useExitModule()

    useEffect(() => setIsClient(true), [])

    if (!isClient) {
        return null
    }

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className='max-w-md'>

                <DialogHeader className='flex items-center w-full mb-5'>
                    <div className='flex items-center w-full justify-center mb-5'>
                        <Image src='/sadLogo.gif' height={160} width={160} alt='sedLogo' className='m-[-20px]' />
                    </div>

                    <DialogTitle className='text-center font-bold text-2xl'>
                        Wait, don&apost go!
                    </DialogTitle>
                    <DialogDescription className='text-center text-base'>
                        You&aposre about to leave the lesson. Are you sure?
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className='mb-4 block'>

                    <div className='flex flex-col gap-y-4 w-full'>
                        <Button
                            variant='primary'
                            className='w-full'
                            size='lg'
                            onClick={close}>
                            Keep learning
                        </Button>

                        <Button
                            variant='dangerOutline'
                            className='w-full'
                            size='lg'
                            onClick={() => {
                                close()
                                router.push('/learn')
                            }}>
                            End session
                        </Button>
                    </div>

                </DialogFooter>

            </DialogContent>
        </Dialog>
    )
}

