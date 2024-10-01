import MobileHeader from "@/common/MobileHeader"
import Sidebar from "@/common/Sidebar"


type LearnLayoutProps = {
    children: React.ReactNode
}

const MainLayout = ({ children }: LearnLayoutProps) => {
    return (
        <>
            <MobileHeader />
            <Sidebar className="hidden lg:flex" />
            <main className="lg:pl-[256px] h-full lg:pb-0">
                <div className="max-w-[1056px] mx-auto pt-6 h-full">{children}</div>
            </main>
        </>
    )
}

export default MainLayout