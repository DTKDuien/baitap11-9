import { Button } from "@/components/ui/button"
import { unitBannerColors } from "@/constants"
import { NotebookText } from "lucide-react"
import Link from "next/link"

type UnitBannerProps = {
    title: string,
    description: string
}

const UnitBanner = ({ description, title, }: UnitBannerProps) => {

    const bannerTitleFigure = title[title.length - 1 || 1]
    const color = unitBannerColors[+bannerTitleFigure - 1] || '#84CC16'

    return (
        <div
            className={`w-full rounded-xl p-5 text-white flex lg:items-center flex-col lg:flex-row justify-between border`}
            style={{ background: color.color }}>
            <div className="space-y-2.5">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-lg">{description}</p>
            </div>

            <Link href={`/guidebook/${bannerTitleFigure}`}>
                <Button
                    size='lg'
                    variant='secondary'
                    style={
                        {
                            background: color.color,
                            borderColor: color.border

                        }
                    }
                    className={`flex border-2 border-b-4 hover:bg-[${color.hover}] active:border-b-2 w-full mt-2`}>
                    <NotebookText className="mr-2" />
                    guidebook
                </Button>
            </Link>
        </div>
    )
}

export default UnitBanner