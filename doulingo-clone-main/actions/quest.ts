'use server'

import { getUserProgress } from '@/db/queries';
import { lte } from 'drizzle-orm';
import db from "@/db/drizzle"
import { quests } from "@/db/schema"

// Функція для вставки даних у таблицю quests
export const insertQuests = async (userId: string) => {
    const questsData = [
        { id: 1, userId, value: 20, title: 'Earn 20 XP', completed: false },
        { id: 2, userId, value: 50, title: 'Earn 50 XP', completed: false },
        { id: 3, userId, value: 100, title: 'Earn 100 XP', completed: false },
        { id: 4, userId, value: 500, title: 'Earn 500 XP', completed: false },
        { id: 5, userId, value: 1000, title: 'Earn 1000 XP', completed: false },
    ]

    // Вставка даних у таблицю
    await db.insert(quests).values(questsData)
}

export const updateQuest = async () => {
    const userProgress = await getUserProgress()

    if (!userProgress) {
        return null
    }
    
    await db.update(quests)
        .set({ completed: true })
        .where(lte(quests.value, userProgress?.points))
}
