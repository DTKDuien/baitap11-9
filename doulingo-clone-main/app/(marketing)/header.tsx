import ClerkLoadingComponent from "@/common/ClerkLoadingComponent"
import Logo from "@/common/Logo"
import { Button } from "@/components/ui/button"
import { ClerkLoaded, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

export const Header = () => {
    return (
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">

                <Logo />

                <ClerkLoadingComponent />

                <ClerkLoaded>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>

                    <SignedOut>
                        <SignInButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                            <Button size="lg" variant='ghost'>
                                Login
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>

            </div>
        </header>
    )
}