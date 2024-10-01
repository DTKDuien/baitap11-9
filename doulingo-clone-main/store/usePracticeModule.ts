import { create } from 'zustand'

type PracticeModuleState = {
    isOpen: boolean
    open: () => void
    close: () => void
}

export const usePracticeModule = create<PracticeModuleState>((set) => ({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false})
}))