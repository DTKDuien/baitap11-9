import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { quests } from "@/constants"
import Image from "next/image"
import Link from "next/link"

type QuestsProps = {
    points: number
}

const Quests = ({ points }: QuestsProps) => {
    return (
        <div className="border-2 rounded-xl p-4 space-y-4">
            <div className='flex flex-col space-y-2'>
                <div className="flex items-center justify-between w-full">
                    <h3 className="font-bold text-lg">
                        Quests
                    </h3>
                    <Link href='/quests'>
                        <Button size='sm' variant='primaryOutline'>
                            View all
                        </Button>
                    </Link>
                </div>

                <p className="text-muted-foreground text-md mb-6 w-full text-start">
                    Complete quests by earning points.
                </p>
            </div>


            <ul className="w-full space-y-4">
                {quests.slice(0, 2).map((quest) => {
                    const progress = (points / quest.value) * 100

                    return (
                        <div key={quest.title} className='flex items-center w-full pb-3 gap-x-3 '>
                            <Image src='/points.svg' alt="Points" width={40} height={40} />
                            <div className='flex flex-col gap-y-2 w-full'>
                                <p className="text-neutral-700 text-md font-bold">
                                    {quest.title}
                                </p>
                                <Progress value={progress} className='h-2' />
                            </div>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Quests