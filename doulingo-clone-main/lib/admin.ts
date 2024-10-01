import { auth } from "@clerk/nextjs"

const adminIds = [
    'user_2euuLgupeYM3qmuAsj2ceOtTPoV'
]

export const isAdmin = () => {
    const { userId } = auth()

    if(!userId) {
        return false
    }

    return adminIds.indexOf(userId) !== -1
}