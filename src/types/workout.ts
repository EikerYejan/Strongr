export interface Workout {
  caloriesBurned: number
  description: string
  durationMinutes: number
  excerpt: string
  id: string
  imageUrl: string
  name: string
  scheduledTime: string
  steps: WorkoutStep[]
}

export interface WorkoutStep {
  durationSeconds: number
  id: string
  imageUrl: string
  title: string
}
