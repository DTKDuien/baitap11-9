'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

type SidebarItemProps = {

  iconSrc: string
  href: string
}

const SidebarItem = ({ href, iconSrc }: SidebarItemProps) => {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <Link href={href} className={`p-2  border-2 ${active ? 'bg-[#20abeb70] border-[#20ACEB]' : 'bg-[#ffffff75] border'} h-[50px]  rounded-xl flex items-center justify-center`}>
      <Image src={iconSrc} alt='...' height={30} width={30} />
    </Link>
  )
}

export default SidebarItem