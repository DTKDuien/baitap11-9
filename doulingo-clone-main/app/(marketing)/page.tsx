import ClerkLoadingComponent from "@/common/ClerkLoadingComponent"
import { Button } from "@/components/ui/button"
import { ClerkLoaded, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

const App = () => {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src='/heros.png' fill alt='hero'></Image>
      </div>

      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, practice and master new languages with <span className="text-lime-500">Doulingo.</span>
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoadingComponent />

          <ClerkLoaded>

            <SignedOut>
              <SignUpButton mode='modal' afterSignInUrl="/learn" afterSignUpUrl="/learn">
                <Button size='lg' variant='secondary' className='w-full'>
                  Get started
                </Button>
              </SignUpButton>

              <SignInButton mode='modal' afterSignInUrl="/learn" afterSignUpUrl="/learn">
                <Button size='lg' variant='primaryOutline' className='w-full'>
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Button size='lg' variant='secondary' className="w-full" asChild>
                <Link href='learn'>
                  Continue learning
                </Link>
              </Button>
            </SignedIn>

          </ClerkLoaded>
        </div>
      </div>
    </div>
  )
}

export default App