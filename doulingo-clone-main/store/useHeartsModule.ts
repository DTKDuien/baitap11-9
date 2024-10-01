import { create } from 'zustand'

type HeartsModuleState = {
    isOpen: boolean
    open: () => void
    close: () => void
}

export const useHeartsModule = create<HeartsModuleState>((set) => ({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false})
}))