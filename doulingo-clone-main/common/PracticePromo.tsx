import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const PracticePromo = () => {
    return (
        <div className="border-2 rounded-xl p-4 space-y-4">
            <div className="space-y-2">
                <div className="flex items-center">
                    <Image src='/practice.png' alt='Practice' height={80} width={80} />
                    <h3 className="font-bold text-lg">
                        Let's study
                    </h3>
                </div>

                <p className="text-muted-foreground">
                    Study more to fill all the quests!
                </p>
            </div>
            <Button variant='secondary' className="w-full" size='lg' asChild>
                <Link href='/lesson'>
                    start studying
                </Link>
            </Button>
        </div>
    )
}

export default PracticePromo