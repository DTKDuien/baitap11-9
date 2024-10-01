import { sidebarItemsArray } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Logo from "./Logo"
import MobileSidebarItem from "./MobileSidebarItem"

const MobileHeader = () => {
    return (
        <nav className="lg:hidden px-6 h-[85px] flex border-t-2 border-t-lime-400 bg-white fixed bottom-0 w-full z-50">
            <div className="flex gap-4 justify-center flex-1 items-center">
                {sidebarItemsArray.map(i => (
                    <MobileSidebarItem href={i.href} iconSrc={i.iconSrc} />
                ))}
            </div>
        </nav>
    )
}

export default MobileHeader