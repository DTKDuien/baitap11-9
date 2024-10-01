import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"


const Header = () => {
    return (
        <div className="sticky top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center
         justify-between border-b-2 mb-5 text-neutral-400 lg:z-50">
            <Link href='/learn'>
                <Button variant='ghost' size='sm' className="flex gap-2">
                    <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400" />
                    <span className='text-neutral-400'>Back</span>
                </Button>
            </Link>
            <div />
        </div>
    )
}

export default Header