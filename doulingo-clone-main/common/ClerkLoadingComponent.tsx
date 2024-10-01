import { ClerkLoading } from "@clerk/nextjs"
import { Loader } from "lucide-react"

const ClerkLoadingComponent = () => {
    return (
        <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
    )
}

export default ClerkLoadingComponent