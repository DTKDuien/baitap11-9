import { create } from 'zustand'

type exitModuleState = {
    isOpen: boolean
    open: () => void
    close: () => void
}

export const useExitModule = create<exitModuleState>((set) => ({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false})
}))