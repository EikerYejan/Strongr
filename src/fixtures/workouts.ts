import type {Workout} from "@strongr/types/workout"

const mockCardStep = {
  durationSeconds: 30,
  imageUrl:
    "https://strongr.s3.sa-east-1.amazonaws.com/assets/images/workout_01_warmup_card_2.jpeg",
  title: "Simple Warm-Up Exercises"
}

const mockCardStep2 = {
  durationSeconds: 45,
  imageUrl:
    "https://strongr.s3.sa-east-1.amazonaws.com/assets/images/workout_01_warmup_card_1.jpeg",
  title: "Stability Training Basics"
}

export const warmup: Workout = {
  caloriesBurned: 350,
  description:
    "Want your body to be healthy. Join our program with directions according to body’s goals. Increasing physical strength is the goal of strenght training. Maintain body fitness by doing physical exercise at least 2-3 times a week.",
  durationMinutes: 60,
  excerpt: "04 Workouts for Beginner",
  id: "1",
  imageUrl:
    "https://strongr.s3.sa-east-1.amazonaws.com/assets/images/workout_01_warmup.jpg",
  name: "Day 01 - Warm Up",
  scheduledTime: "07:00 - 08:00 AM",
  steps: [
    {id: "1", ...mockCardStep},
    {id: "2", ...mockCardStep2},
    {id: "3", ...mockCardStep},
    {id: "4", ...mockCardStep2},
    {id: "5", ...mockCardStep}
  ]
}
