'use client'

import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog'
import { usePracticeModule } from '@/store/usePracticeModule'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const PracticeModal = () => {
    const [isClient, setIsClient] = useState<boolean>(false)
    const { isOpen, close } = usePracticeModule()

    useEffect(() => setIsClient(true), [])

    if (!isClient) {
        return null
    }

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className='max-w-md'>

                <DialogHeader className='flex items-center w-full mb-5'>
                    <div className='flex items-center w-full justify-center mb-5'>
                        <Image src='/practice.png' height={160} width={160} alt='Practice' className='ms-[-18px]' />
                    </div>

                    <DialogTitle className='text-center font-bold text-2xl'>
                        Practice lesson
                    </DialogTitle>
                    <DialogDescription className='text-center text-base'>
                        Use practice lesson to regain hearts and points. You can 
                        not lose hearts and points in practice lessons.
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className='mb-2 block'>

                    <div className='flex flex-col gap-y-4 w-full'>

                        <Button
                            variant='primary'
                            className='w-full'
                            size='lg'
                            onClick={close}>
                            I understand
                        </Button>
                    </div>

                </DialogFooter>

            </DialogContent>
        </Dialog>
    )
}

