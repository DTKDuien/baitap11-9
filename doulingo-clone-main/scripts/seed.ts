import { neon } from '@neondatabase/serverless'
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/neon-http'

import * as schema from '../db/schema'

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

const main = async () => {//03:06:00
    try {
        console.log('Seeding database..')

        await db.delete(schema.courses)
        await db.delete(schema.userProgress)
        await db.delete(schema.units)
        await db.delete(schema.lessons)
        await db.delete(schema.challenges)
        await db.delete(schema.challengeOptions)
        await db.delete(schema.challengeProgress)
        await db.delete(schema.userSubscription)
        await db.delete(schema.quests)
        await db.delete(schema.wordsOfTheUnit)
        await db.delete(schema.guidebook)

        await db.insert(schema.guidebook).values([
            { id: 1 },
            { id: 2 },
        ])

        await db.insert(schema.wordsOfTheUnit).values([
            {
                guidebookId: 1,
                id: 1,
                title: 'el hombre',
                translateTitle: 'a man',
                audioSrc: '/es_man.mp3'
            },
            {
                guidebookId: 1,
                id: 2,
                title: 'la mujer',
                translateTitle: 'a woman',
                audioSrc: '/es_woman.mp3'
            },
            {
                guidebookId: 1,
                id: 3,
                title: 'el zombie',
                translateTitle: 'a zombie',
                audioSrc: '/es_zombie.mp3'
            },
            {
                guidebookId: 1,
                id: 4,
                title: 'el robot',
                translateTitle: 'a robot',
                audioSrc: '/es_robot.mp3'
            },
            {
                guidebookId: 1,
                id: 5,
                title: 'correr',
                translateTitle: 'to run',
                audioSrc: '/es_run.mp3'
            },
            {
                guidebookId: 1,
                id: 6,
                title: 'nadar',
                translateTitle: 'to swim',
                audioSrc: '/es_swim.mp3'
            },
            {
                guidebookId: 1,
                id: 7,
                title: 'volar',
                translateTitle: 'to fly',
                audioSrc: '/es_fly.mp3'
            },
            {
                guidebookId: 1,
                id: 8,
                title: 'el chico',
                translateTitle: 'a boy',
                audioSrc: '/es_boy.mp3'
            },
            {
                guidebookId: 1,
                id: 9,
                title: 'dormir',
                translateTitle: 'to sleep',
                audioSrc: '/es_sleep.mp3'
            },
            {
                guidebookId: 1,
                id: 10,
                title: 'la niña',
                translateTitle: 'a girl',
                audioSrc: '/es_girl.mp3'
            },
            
        ])

        await db.insert(schema.wordsOfTheUnit).values([
            {
                guidebookId: 2,
                id: 11,
                title: 'un pájaro',
                translateTitle: 'a bird',
                audioSrc: '/es_bird.mp3'
            },
            {
                guidebookId: 2,
                id: 12,
                title: 'un gato',
                translateTitle: 'a cat',
                audioSrc: '/es_cat.mp3'
            },
            {
                guidebookId: 2,
                id: 13,
                title: 'un oso',
                translateTitle: 'a bear',
                audioSrc: '/es_bear.mp3'
            },
            {
                guidebookId: 2,//
                id: 14,
                title: 'una manzana',
                translateTitle: 'an apple',
                audioSrc: '/es_apple.mp3'
            },
            {
                guidebookId: 2,
                id: 15,
                title: 'una cereza',
                translateTitle: 'a cherry',
                audioSrc: '/es_cherry.mp3'
            },
            {
                guidebookId: 2,
                id: 16,
                title: 'un tomate',
                translateTitle: 'a tomato',
                audioSrc: '/es_tomato.mp3'
            },
            {
                guidebookId: 2,
                id: 17,
                title: 'dibujar',
                translateTitle: 'to draw',
                audioSrc: '/es_draw.mp3'
            },
            {
                guidebookId: 2,
                id: 18,
                title: 'cocinar',
                translateTitle: 'to cook',
                audioSrc: '/es_cook.mp3'
            },
            {
                guidebookId: 2,//
                id: 19,
                title: 'el piloto',
                translateTitle: 'a pilot',
                audioSrc: '/es_pilot.mp3'
            },
            {
                guidebookId: 2,
                id: 20,
                title: 'el maestro',
                translateTitle: 'a teacher',
                audioSrc: '/es_teacher.mp3'
            },
            
        ])

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: 'Spanish',
                imageSrc: '/es.svg'
            },
            {
                id: 2,
                title: 'Germany',
                imageSrc: '/de.svg'
            },
            {
                id: 3,
                title: 'Japanese',
                imageSrc: '/jp.svg'
            },
            {
                id: 4,
                title: 'Ukrainian',
                imageSrc: '/ua.svg'
            },
            {
                id: 5,
                title: 'English',
                imageSrc: '/us.svg'
            },

        ])

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1,
                title: 'Unit 1',
                description: 'Learn the basic of Spanish',
                order: 1
            },
            {
                id: 2,
                courseId: 1,
                title: 'Unit 2',
                description: 'Learn the intermediate of Spanish',
                order: 2
            }
        ])

        // UNIT 1
        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                order: 1,
                title: 'Nouns'
            },
            {
                id: 2,
                unitId: 1,
                order: 2,
                title: 'Verbs'
            },
            {
                id: 3,
                unitId: 1,
                order: 3,
                title: 'Verbs'
            },
            {
                id: 4,
                unitId: 1,
                order: 4,
                title: 'Nouns'
            },
            {
                id: 5,
                unitId: 1,
                order: 5,
                title: 'Nouns'
            },

        ])

        // lesson 1
        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: 'SELECT',
                order: 1,
                question: 'Witch one of these is the "the man"?'
            },
            {
                id: 2,
                lessonId: 1,
                type: 'ASSIST',
                order: 2,
                question: '"the man"'
            },
            {
                id: 3,
                lessonId: 1,
                type: 'SELECT',
                order: 3,
                question: 'Witch one of these is the "the woman"?'
            },
            {
                id: 4,
                lessonId: 1,
                type: 'ASSIST',
                order: 4,
                question: '"the woman"'
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 1,
                imageSrc: '/man.svg',
                correct: true,
                text: 'el hombre',
                audioSrc: '/es_man.mp3'
            },
            {
                challengeId: 1,
                imageSrc: '/woman.svg',
                correct: false,
                text: 'la mujer',
                audioSrc: '/es_woman.mp3'
            },
            {
                challengeId: 1,
                imageSrc: '/robot.svg',
                correct: false,
                text: 'el robot',
                audioSrc: '/es_robot.mp3'
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 2,
                correct: true,
                text: 'el hombre',
                audioSrc: '/es_man.mp3'
            },
            {
                challengeId: 2,
                correct: false,
                text: 'la mujer',
                audioSrc: '/es_woman.mp3'
            },
            {
                challengeId: 2,
                correct: false,
                text: 'el robot',
                audioSrc: '/es_robot.mp3'
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 3,
                imageSrc: '/robot.svg',
                correct: false,
                text: 'el robot',
                audioSrc: '/es_robot.mp3'
            },
            {
                challengeId: 3,
                imageSrc: '/woman.svg',
                correct: true,
                text: 'la mujer',
                audioSrc: '/es_woman.mp3'
            },

            {
                challengeId: 3,
                imageSrc: '/man.svg',
                correct: false,
                text: 'el hombre',
                audioSrc: '/es_man.mp3'
            },


        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 4,
                correct: false,
                text: 'el zombie',
                audioSrc: '/es_zombie.mp3'
            },
            {
                challengeId: 4,
                correct: true,
                text: 'la mujer',
                audioSrc: '/es_woman.mp3'
            },
            {
                challengeId: 4,
                correct: false,
                text: 'el robot',
                audioSrc: '/es_robot.mp3'
            }

        ])

        // lesson 2
        await db.insert(schema.challenges).values([
            {
                id: 5,
                lessonId: 2,
                type: 'SELECT',
                order: 1,
                question: 'Witch one of these is the "to run"?'
            },
            {
                id: 6,
                lessonId: 2,
                type: 'ASSIST',
                order: 2,
                question: '"to run"'
            },
            {
                id: 7,
                lessonId: 2,
                type: 'SELECT',
                order: 3,
                question: 'Witch one of these is the "to swim"?'
            },
            {
                id: 8,
                lessonId: 2,
                type: 'ASSIST',
                order: 4,
                question: '"to swim"'
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 5,
                imageSrc: '/fly.svg',
                correct: false,
                text: 'volar',
                audioSrc: '/es_fly.mp3'
            },
            {
                challengeId: 5,
                imageSrc: '/run.png',
                correct: true,
                text: 'correr',
                audioSrc: '/es_run.mp3'
            },
            {
                challengeId: 5,
                imageSrc: '/swim.png',
                correct: false,
                text: 'nadar',
                audioSrc: '/es_swim.mp3'
            }

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 6,
                correct: false,
                text: 'nadar',
                audioSrc: '/es_swim.mp3'
            },
            {
                challengeId: 6,
                correct: false,
                text: 'volar',
                audioSrc: '/es_fly.mp3'
            },
            {
                challengeId: 6,
                correct: true,
                text: 'correr',
                audioSrc: '/es_run.mp3'
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 7,
                imageSrc: '/fly.svg',
                correct: false,
                text: 'volar',
                audioSrc: '/es_fly.mp3'
            },
            {
                challengeId: 7,
                imageSrc: '/swim.png',
                correct: true,
                text: 'nadar',
                audioSrc: '/es_swim.mp3'
            },
            {
                challengeId: 7,
                imageSrc: '/run.png',
                correct: false,
                text: 'correr',
                audioSrc: '/es_run.mp3'
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 8,
                correct: false,
                text: 'correr',
                audioSrc: '/es_run.mp3'
            },
            {
                challengeId: 8,
                correct: false,
                text: 'volar',
                audioSrc: '/es_fly.mp3'
            },
            {
                challengeId: 8,
                correct: true,
                text: 'nadar',
                audioSrc: '/es_swim.mp3'
            },

        ])

        // lesson 3
        await db.insert(schema.challenges).values([
            {
                id: 9,
                lessonId: 3,
                type: 'SELECT',
                order: 1,
                question: 'Witch one of these is the "to fly"?'
            },
            {
                id: 10,
                lessonId: 3,
                type: 'ASSIST',
                order: 2,
                question: '"to fly"'
            },
            {
                id: 11,
                lessonId: 3,
                type: 'SELECT',
                order: 3,
                question: 'Witch one of these is the "to sleep"?'
            },
            {
                id: 12,
                lessonId: 3,
                type: 'ASSIST',
                order: 4,
                question: '"to sleep"'
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 9,
                imageSrc: '/run.png',
                correct: false,
                text: 'correr',
                audioSrc: '/es_run.mp3'
            },
            {
                challengeId: 9,
                imageSrc: '/swim.png',
                correct: false,
                text: 'nadar',
                audioSrc: '/es_swim.mp3'
            },
            {
                challengeId: 9,
                imageSrc: '/fly.svg',
                correct: true,
                text: 'volar',
                audioSrc: '/es_fly.mp3'
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 10,
                correct: false,
                text: 'nadar',
                audioSrc: '/es_swim.mp3'
            },
            {
                challengeId: 10,
                correct: true,
                text: 'volar',
                audioSrc: '/es_fly.mp3'
            },
            {
                challengeId: 10,
                correct: false,
                text: 'correr',
                audioSrc: '/es_run.mp3'
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 11,
                imageSrc: '/sleep.png',
                correct: true,
                text: 'dormir',
                audioSrc: '/es_sleep.mp3'
            },
            {
                challengeId: 11,
                imageSrc: '/swim.png',
                correct: true,
                text: 'nadar',
                audioSrc: '/es_swim.mp3'
            },
            {
                challengeId: 11,
                imageSrc: '/fly.svg',
                correct: false,
                text: 'volar',
                audioSrc: '/es_fly.mp3'
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 12,
                correct: false,
                text: 'nadar',
                audioSrc: '/es_swim.mp3'
            },
            {
                challengeId: 12,
                correct: false,
                text: 'volar',
                audioSrc: '/es_fly.mp3'
            },
            {
                challengeId: 12,
                correct: true,
                text: 'dormir',
                audioSrc: '/es_sleep.mp3'
            },

        ])

        // lesson 4
        await db.insert(schema.challenges).values([
            {
                id: 13,
                lessonId: 4,
                type: 'SELECT',
                order: 1,
                question: 'Witch one of these is the "the boy"?'
            },
            {
                id: 14,
                lessonId: 4,
                type: 'ASSIST',
                order: 2,
                question: '"the boy"'
            },
            {
                id: 15,
                lessonId: 4,
                type: 'SELECT',
                order: 3,
                question: 'Witch one of these is the "the girl"?'
            },
            {
                id: 16,
                lessonId: 4,
                type: 'ASSIST',
                order: 4,
                question: '"the girl"'
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 13,
                imageSrc: '/man.svg',
                correct: false,
                text: 'el hombre',
                audioSrc: '/es_man.mp3'
            },
            {
                challengeId: 13,
                imageSrc: '/boy.svg',
                correct: true,
                text: 'el chico',
                audioSrc: '/es_boy.mp3'
            },
            {
                challengeId: 13,
                imageSrc: '/girl.svg',
                correct: false,
                text: 'la niña',
                audioSrc: '/es_girl.mp3'
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 14,
                correct: false,
                text: 'el hombre',
                audioSrc: '/es_man.mp3'
            },
            {
                challengeId: 14,
                correct: false,
                text: 'la niña',
                audioSrc: '/es_girl.mp3'
            },
            {
                challengeId: 14,
                correct: true,
                text: 'el chico',
                audioSrc: '/es_boy.mp3'
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 15,
                imageSrc: '/robot.svg',
                correct: false,
                text: 'el robot',
                audioSrc: '/es_robot.mp3'
            },
            {
                challengeId: 15,
                imageSrc: '/girl.svg',
                correct: true,
                text: 'la niña',
                audioSrc: '/es_girl.mp3'
            },

            {
                challengeId: 15,
                imageSrc: '/boy.svg',
                correct: false,
                text: 'el chico',
                audioSrc: '/es_boy.mp3'
            },


        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 16,
                correct: false,
                text: 'el zombie',
                audioSrc: '/es_zombie.mp3'
            },
            {
                challengeId: 16,
                correct: false,
                text: 'la mujer',
                audioSrc: '/es_woman.mp3'
            },
            {
                challengeId: 16,
                correct: true,
                text: 'la niña',
                audioSrc: '/es_girl.mp3'
            }

        ])

        // lesson 5
        await db.insert(schema.challenges).values([
            {
                id: 17,
                lessonId: 5,
                type: 'SELECT',
                order: 1,
                question: 'Witch one of these is the "the zombie"?'
            },
            {
                id: 18,
                lessonId: 5,
                type: 'ASSIST',
                order: 2,
                question: '"the zombie"'
            },
            {
                id: 19,
                lessonId: 5,
                type: 'SELECT',
                order: 3,
                question: 'Witch one of these is the "the robot"?'
            },
            {
                id: 20,
                lessonId: 5,
                type: 'ASSIST',
                order: 4,
                question: '"the robot"'
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 17,
                imageSrc: '/run.png',
                correct: false,
                text: 'correr',
                audioSrc: '/es_run.mp3'
            },
            {
                challengeId: 17,
                imageSrc: '/zombie.svg',
                correct: true,
                text: 'el zombie',
                audioSrc: '/es_zombie.mp3'
            },
            {
                challengeId: 17,
                imageSrc: '/girl.svg',
                correct: false,
                text: 'la niña',
                audioSrc: '/es_girl.mp3'
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 18,
                correct: true,
                text: 'el zombie',
                audioSrc: '/es_zombie.mp3'
            },
            {
                challengeId: 18,
                correct: false,
                text: 'la niña',
                audioSrc: '/es_girl.mp3'
            },
            {
                challengeId: 18,
                correct: false,
                text: 'el chico',
                audioSrc: '/es_boy.mp3'
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 19,
                imageSrc: '/robot.svg',
                correct: true,
                text: 'el robot',
                audioSrc: '/es_robot.mp3'
            },
            {
                challengeId: 19,
                imageSrc: '/girl.svg',
                correct: false,
                text: 'la niña',
                audioSrc: '/es_girl.mp3'
            },

            {
                challengeId: 19,
                imageSrc: '/zombie.svg',
                correct: false,
                text: 'el zombie',
                audioSrc: '/es_zombie.mp3'
            },


        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 20,
                correct: false,
                text: 'el zombie',
                audioSrc: '/es_zombie.mp3'
            },
            {
                challengeId: 20,
                correct: false,
                text: 'la mujer',
                audioSrc: '/es_woman.mp3'
            },
            {
                challengeId: 20,
                correct: true,
                text: 'el robot',
                audioSrc: '/es_robot.mp3'
            }

        ])


        // UNIT 2
        await db.insert(schema.lessons).values([
            {
                id: 6,
                unitId: 2,
                order: 1,
                title: 'Animals'
            },
            {
                id: 7,
                unitId: 2,
                order: 2,
                title: 'Fruits and vegetables'
            },
            {
                id: 8,
                unitId: 2,
                order: 3,
                title: 'Verbs'
            },
            {
                id: 9,
                unitId: 2,
                order: 4,
                title: 'Professions'
            },
            {
                id: 10,
                unitId: 2,
                order: 5,
                title: 'All'
            },

        ])

        // lesson 1
        await db.insert(schema.challenges).values([
            {
                id: 21,
                lessonId: 6,
                type: 'SELECT',
                order: 1,
                question: 'Witch one of these is the "the bird"?'
            },
            {
                id: 22,
                lessonId: 6,
                type: 'ASSIST',
                order: 2,
                question: '"the bird"'
            },
            {
                id: 23,
                lessonId: 6,
                type: 'SELECT',
                order: 3,
                question: 'Witch one of these is the "the cat"?'
            },
            {
                id: 24,
                lessonId: 6,
                type: 'ASSIST',
                order: 4,
                question: '"the cat"'
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 21,
                imageSrc: '/bear.png',
                correct: false,
                text: 'un oso',
                audioSrc: '/es_bear.mp3'
            },
            {
                challengeId: 21,
                imageSrc: '/cat.svg',
                correct: false,
                text: 'un gato',
                audioSrc: '/es_cat.mp3'
            },
            {
                challengeId: 21,
                imageSrc: '/bird.svg',
                correct: true,
                text: 'un pájaro',
                audioSrc: '/es_bird.mp3'
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 22,
                correct: true,
                text: 'un pájaro',
                audioSrc: '/es_bird.mp3'
            },
            {
                challengeId: 22,
                correct: false,
                text: 'un gato',
                audioSrc: '/es_cat.mp3'
            },
            {
                challengeId: 22,
                correct: false,
                text: 'un oso',
                audioSrc: '/es_bear.mp3'
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 23,
                imageSrc: '/bird.svg',
                correct: false,
                text: 'un pájaro',
                audioSrc: '/es_bird.mp3'
            },
            {
                challengeId: 23,
                imageSrc: '/cat.svg',
                correct: true,
                text: 'un gato',
                audioSrc: '/es_cat.mp3'
            },

            {
                challengeId: 23,
                imageSrc: '/man.svg',
                correct: false,
                text: 'el hombre',
                audioSrc: '/es_man.mp3'
            },


        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 24,
                correct: false,
                text: 'el zombie',
                audioSrc: '/es_zombie.mp3'
            },
            {
                challengeId: 24,
                correct: true,
                text: 'un gato',
                audioSrc: '/es_cat.mp3'
            },
            {
                challengeId: 24,
                correct: false,
                text: 'un oso',
                audioSrc: '/es_bear.mp3'
            }

        ])

        // lesson 2
        await db.insert(schema.challenges).values([
            {
                id: 25,
                lessonId: 7,
                type: 'SELECT',
                order: 1,
                question: 'Witch one of these is the "the apple"?'
            },
            {
                id: 26,
                lessonId: 7,
                type: 'ASSIST',
                order: 2,
                question: '"the apple"'
            },
            {
                id: 27,
                lessonId: 7,
                type: 'SELECT',
                order: 3,
                question: 'Witch one of these is the "the cherry"?'
            },
            {
                id: 28,
                lessonId: 7,
                type: 'ASSIST',
                order: 4,
                question: '"the cherry"'
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 25,
                imageSrc: '/tomato.svg',
                correct: false,
                text: 'un tomate',
                audioSrc: '/es_tomato.mp3'
            },
            {
                challengeId: 25,
                imageSrc: '/apple.svg',
                correct: true,
                text: 'una manzana',
                audioSrc: '/es_apple.mp3'
            },
            {
                challengeId: 25,
                imageSrc: '/cherry.svg',
                correct: false,
                text: 'una cereza',
                audioSrc: '/es_cherry.mp3'
            }

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 26,
                correct: false,
                text: 'una cereza',
                audioSrc: '/es_cherry.mp3'
            },
            {
                challengeId: 26,
                correct: false,
                text: 'un tomate',
                audioSrc: '/es_tomato.mp3'
            },
            {
                challengeId: 26,
                correct: true,
                text: 'una manzana',
                audioSrc: '/es_apple.mp3'
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 27,
                imageSrc: '/apple.svg',
                correct: false,
                text: 'una manzana',
                audioSrc: '/es_apple.mp3'
            },
            {
                challengeId: 27,
                imageSrc: '/cherry.svg',
                correct: true,
                text: 'una cereza',
                audioSrc: '/es_cherry.mp3'
            },
            {
                challengeId: 27,
                imageSrc: '/tomato.svg',
                correct: false,
                text: 'un tomate',
                audioSrc: '/es_tomato.mp3'
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 28,
                correct: false,
                text: 'un tomate',
                audioSrc: '/es_tomato.mp3'
            },
            {
                challengeId: 28,
                correct: false,
                text: 'una manzana',
                audioSrc: '/es_apple.mp3'
            },
            {
                challengeId: 28,
                correct: true,
                text: 'una cereza',
                audioSrc: '/es_cherry.mp3'
            },

        ])

        // lesson 3
        await db.insert(schema.challenges).values([
            {
                id: 29,
                lessonId: 8,
                type: 'SELECT',
                order: 1,
                question: 'Witch one of these is the "to draw"?'
            },
            {
                id: 30,
                lessonId: 8,
                type: 'ASSIST',
                order: 2,
                question: '"to draw"'
            },
            {
                id: 31,
                lessonId: 8,
                type: 'SELECT',
                order: 3,
                question: 'Witch one of these is the "to cook"?'
            },
            {
                id: 32,
                lessonId: 8,
                type: 'ASSIST',
                order: 4,
                question: '"to cook"'
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 29,
                imageSrc: '/run.png',
                correct: false,
                text: 'correr',
                audioSrc: '/es_run.mp3'
            },
            {
                challengeId: 29,
                imageSrc: '/cook.svg',
                correct: false,
                text: 'cocinar',
                audioSrc: '/es_cook.mp3'
            },
            {
                challengeId: 29,
                imageSrc: '/draw.png',
                correct: true,
                text: 'dibujar',
                audioSrc: '/es_draw.mp3'
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 30,
                correct: false,
                text: 'nadar',
                audioSrc: '/es_swim.mp3'
            },
            {
                challengeId: 30,
                correct: true,
                text: 'dibujar',
                audioSrc: '/es_draw.mp3'
            },
            {
                challengeId: 30,
                correct: false,
                text: 'cocinar',
                audioSrc: '/es_cook.mp3'
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 31,
                imageSrc: '/cook.svg',
                correct: true,
                text: 'cocinar',
                audioSrc: '/es_cook.mp3'
            },
            {
                challengeId: 31,
                imageSrc: '/swim.png',
                correct: false,
                text: 'nadar',
                audioSrc: '/es_swim.mp3'
            },
            {
                challengeId: 31,
                imageSrc: '/fly.svg',
                correct: false,
                text: 'volar',
                audioSrc: '/es_fly.mp3'
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 32,
                correct: false,
                text: 'dibujar',
                audioSrc: '/es_draw.mp3'
            },
            {
                challengeId: 32,
                correct: false,
                text: 'volar',
                audioSrc: '/es_fly.mp3'
            },
            {
                challengeId: 32,
                correct: true,
                text: 'cocinar',
                audioSrc: '/es_cook.mp3'
            },

        ])

        // lesson 4
        await db.insert(schema.challenges).values([
            {
                id: 33,
                lessonId: 9,
                type: 'SELECT',
                order: 1,
                question: 'Witch one of these is the "the pilot"?'
            },
            {
                id: 34,
                lessonId: 9,
                type: 'ASSIST',
                order: 2,
                question: '"the pilot"'
            },
            {
                id: 35,
                lessonId: 9,
                type: 'SELECT',
                order: 3,
                question: 'Witch one of these is the "the teacher"?'
            },
            {
                id: 36,
                lessonId: 9,
                type: 'ASSIST',
                order: 4,
                question: '"the teacher"'
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 33,
                imageSrc: '/man.svg',
                correct: false,
                text: 'el hombre',
                audioSrc: '/es_man.mp3'
            },
            {
                challengeId: 33,
                imageSrc: '/pilot.png',
                correct: true,
                text: 'el piloto',
                audioSrc: '/es_pilot.mp3'
            },
            {
                challengeId: 33,
                imageSrc: '/practice.png',
                correct: false,
                text: 'el maestro',
                audioSrc: '/es_teacher.mp3'
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 34,
                correct: false,
                text: 'el maestro',
                audioSrc: '/es_teacher.mp3'
            },
            {
                challengeId: 34,
                correct: false,
                text: 'la niña',
                audioSrc: '/es_girl.mp3'
            },
            {
                challengeId: 34,
                correct: true,
                text: 'el piloto',
                audioSrc: '/es_pilot.mp3'
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 35,
                imageSrc: '/pilot.png',
                correct: false,
                text: 'el piloto',
                audioSrc: '/es_pilot.mp3'
            },
            {
                challengeId: 35,
                imageSrc: '/practice.png',
                correct: true,
                text: 'el maestro',
                audioSrc: '/es_teacher.mp3'
            },

            {
                challengeId: 35,
                imageSrc: '/boy.svg',
                correct: false,
                text: 'el chico',
                audioSrc: '/es_boy.mp3'
            },


        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 36,
                correct: false,
                text: 'cocinar',
                audioSrc: '/es_cook.mp3'
            },
            {
                challengeId: 36,
                correct: false,
                text: 'la mujer',
                audioSrc: '/es_woman.mp3'
            },
            {
                challengeId: 36,
                correct: true,
                text: 'el maestro',
                audioSrc: '/es_teacher.mp3'
            }

        ])

        // lesson 5
        await db.insert(schema.challenges).values([
            {
                id: 37,
                lessonId: 10,
                type: 'SELECT',
                order: 1,
                question: 'Witch one of these is the "to cock"?'
            },
            {
                id: 38,
                lessonId: 10,
                type: 'ASSIST',
                order: 2,
                question: '"the woman"'
            },
            {
                id: 39,
                lessonId: 10,
                type: 'SELECT',
                order: 3,
                question: 'Witch one of these is the "to fly"?'
            },
            {
                id: 40,
                lessonId: 10,
                type: 'ASSIST',
                order: 4,
                question: '"the tomato"'
            },

        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 37,
                imageSrc: '/cook.svg',
                correct: true,
                text: 'cocinar',
                audioSrc: '/es_cook.mp3'
            },
            {
                challengeId: 37,
                imageSrc: '/apple.svg',
                correct: false,
                text: 'una manzana',
                audioSrc: '/es_apple.mp3'
            },
            {
                challengeId: 37,
                imageSrc: '/pilot.png',
                correct: false,
                text: 'el piloto',
                audioSrc: '/es_pilot.mp3'
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 38,
                correct: false,
                text: 'el zombie',
                audioSrc: '/es_zombie.mp3'
            },
            {
                challengeId: 38,
                correct: false,
                text: 'la niña',
                audioSrc: '/es_girl.mp3'
            },
            {
                challengeId: 38,
                correct: true,
                text: 'la mujer',
                audioSrc: '/es_woman.mp3'
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 39,
                imageSrc: '/fly.svg',
                correct: true,
                text: 'volar',
                audioSrc: '/es_fly.mp3'
            },
            {
                challengeId: 39,
                imageSrc: '/apple.svg',
                correct: false,
                text: 'una manzana',
                audioSrc: '/es_apple.mp3'
            },

            {
                challengeId: 39,
                imageSrc: '/zombie.svg',
                correct: false,
                text: 'el zombie',
                audioSrc: '/es_zombie.mp3'
            },


        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 40,
                correct: false,
                text: 'correr',
                audioSrc: '/es_run.mp3'
            },
            {
                challengeId: 40,
                correct: false,
                text: 'dormir',
                audioSrc: '/es_sleep.mp3'
            },
            {
                challengeId: 40,
                correct: true,
                text: 'un tomate',
                audioSrc: '/es_tomato.mp3'
            }

        ])

        console.log('Seeding finished')
    } catch (error) {
        console.error(error)
        throw new Error('Field to seed the database')
    }
}

main()