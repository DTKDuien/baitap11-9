import { challenges } from "@/db/schema"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useCallback } from "react"
import { useAudio, useKey } from 'react-use'

type CardProps = {
    id: number
    text: string
    imageSrc: string | null
    shortcut: string
    selected?: boolean
    onClick: () => void
    status?: 'correct' | 'wrong' | 'none'
    audioSrc: string | null
    disabled?: boolean | undefined
    type: typeof challenges.$inferSelect['type']
}

const Card = ({
    audioSrc,
    id,
    imageSrc,
    onClick,
    shortcut,
    text,
    type,
    disabled,
    selected,
    status
}: CardProps) => {
    const IS_ASSIST = type === 'ASSIST'

    const [audio, _, controls] = useAudio({ src: audioSrc || '' })

    const handleClick = useCallback(() => {
        if (disabled) return

        controls.play()

        onClick()
    }, [disabled, onClick, controls])

    useKey(shortcut, handleClick, {}, [handleClick])

    return (//06:38:48
        <div
            onClick={handleClick}
            className={cn(
                ' border-2 rounded-xl border-b-4 lg:hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2',
                selected && 'border-sky-300 bg-sky-100 lg:hover:bg-sky-100',
                selected && status === 'correct' && 'border-lime-300 bg-lime-100 lg:hover:bg-lime-100',
                selected && status === 'wrong' && 'border-rose-300 bg-rose-100 lg:hover:bg-rose-100',
                disabled && 'pointer-events-none lg:hover:bg-white',
                IS_ASSIST && 'lg:p-3 w-full'
            )}
        >
            {audio}
            {imageSrc && (
                <div className="relative aspect-square mb-4 flex justify-center max-h-[80px] lg:max-h-[150px] w-full">
                    <Image src={imageSrc} alt={text} fill className="object-contain" />
                </div>
            )}

            <div className={cn(
                'flex items-center justify-between',
                IS_ASSIST && 'flex-row-reverse'
            )}>
                {IS_ASSIST && <div />}
                <p className={cn(
                    'text-neutral-600 text-sm lg:text-base',
                    selected && 'text-sky-500',
                    selected && status === 'correct' && 'text-lime-500',
                    selected && status === 'wrong' && 'text-rose-500'
                )}>
                    {text}
                </p>
                <div className={cn(
                    'lg:w-[30px] lg:h-[30px] w-[20px] h-[20px] border-2\
                    flex items-center justify-center rounded-lg text-neutral-400\
                    lg:text-[15px] text-xs font-semibold',
                    selected && 'border-sky-300 text-sky-500',
                    selected && status === 'correct' && 'border-lime-500 text-lime-500',
                    selected && status === 'wrong' && 'border-rose-500 text-rose-500'
                )}>
                    {shortcut}
                </div>

            </div>
        </div>
    )
}

export default Card