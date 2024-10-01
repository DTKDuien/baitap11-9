import { Button } from "@/components/ui/button"
import Image from "next/image"

const flagsArray = [
    {
        title: 'English',
        imgPath: '/us.svg'
    },
    {
        title: 'Japanese',
        imgPath: '/jp.svg'
    },
    {
        title: 'Germany',
        imgPath: '/de.svg'
    },
    {
        title: 'Spanish',
        imgPath: '/es.svg'
    },
    {
        title: 'Ukrainian',
        imgPath: '/ua.svg'
    },
]

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className='max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
                {flagsArray.map(flag => (
                    <Button className="w-full" size='lg' variant='ghost' key={flag.imgPath} >
                        <Image
                            src={flag.imgPath}
                            alt={flag.title}
                            height={32}
                            width={40}
                            className='mr-4 rounded-md'
                        />
                        {flag.title}
                    </Button>
                ))}
            </div>
        </footer >
    )
}