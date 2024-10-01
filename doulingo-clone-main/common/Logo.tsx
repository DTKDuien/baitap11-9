import Image from "next/image"

const Logo = () => {
    return (
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
            <Image src="/logo.avif" height={40} width={40} alt='Doulingo logo' className="rounded-md" />
            <h1 className="text-2xl font-extrabold text-lime-500 tracking-wide">Doulingo</h1>
        </div>
    )
}

export default Logo