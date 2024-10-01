import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries"
import { redirect } from "next/navigation"
import Quiz from "./Quiz"

const LessonPage = async () => {
  const lessonData = getLesson()
  const userSubscriptionData = getUserSubscription()
  const userProgressData = getUserProgress()

  const [userSubscription, userProgress, lesson] = await Promise.all([
    userSubscriptionData, userProgressData, lessonData
  ])

  if (!lesson || !userProgress) {
    redirect('/learn')
  }

  const initialPercentage = lesson.challenges.filter((challenge) => challenge.completed).length / lesson.challenges.length * 100

  return (
    <div>
      <Quiz
        initialLessonId={lesson.id}
        initialLessonChallenges={lesson.challenges}
        initialHearts={userProgress.hearts}
        initialPercentage={initialPercentage}
        userSubscription={userSubscription}
      />
    </div>
  )
}

export default LessonPage