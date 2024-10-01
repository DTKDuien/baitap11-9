import { Button } from "@/components/ui/button"
import { sidebarItemsArray } from "@/constants"
import { cn } from "@/lib/utils"
import { ClerkLoaded, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import ClerkLoadingComponent from "./ClerkLoadingComponent"
import Logo from "./Logo"
import SidebarItem from "./SidebarItem"

type SidebarProps = {
  className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div className={cn(
      "flex lg:w-[256px] h-full lg:fixed left-0 top-0 px-4 border-r-2 flex-col", className)}>

      <Link href='/learn'>
        <Logo />
      </Link>

      <div className="flex flex-col gap-2 flex-1">
        {sidebarItemsArray.map(i => (
          <SidebarItem label={i.label} href={i.href} iconSrc={i.iconSrc} />
        ))}
      </div>

      <div className="p-4">
        <ClerkLoadingComponent />

        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  )
}
export default Sidebar