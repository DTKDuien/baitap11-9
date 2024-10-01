'use client'

import { Volume2 } from "lucide-react"
import { useAudio } from 'react-use'

type GuideCardProps = {
    title: string | null,
    audioSrc: string | null,
    translate: string | null
}

const GuideCard = ({ audioSrc, title, translate }: GuideCardProps) => {
    const [audio, _, controls] = useAudio({ src: audioSrc || '' })

    const wordsArr = title?.split(' ')

    const onAudioPlay = () => {
        controls.play()
    }

    return (
        <div className="border-2 p-4 m-2 rounded-xl ">
            {audio}

            <div className="flex gap-4 items-center">

                <button onClick={onAudioPlay}>
                    <Volume2 size={25} className='text-[#20ACEB]' />
                </button>

                <div>
                    <div className="flex gap-1.5">
                        {wordsArr?.map((word) => (
                            <h3 key={word} className="font-bold border-b-[3.5px] border-dashed">{word}</h3>
                        ))}
                    </div>
                    <h3
                        className={'text-muted-foreground font-semibold'}>
                        {translate}
                    </h3>
                </div>
    
            </div>
        </div>
    )
}

export default GuideCard
