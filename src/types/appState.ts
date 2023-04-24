export interface AppState {
  hasAuth: boolean
  lastOnboardingStep: number
  onboardingCompleted: boolean
  user: {
    activityLevel?: string
    age?: number
    email: string | undefined
    gender?: string
    goal?: string
    height?: number
    name: string
    weight?: number
    settings: {
      enableProgramNotifications: boolean
      enableWorkoutReminders: boolean
      measureUnit: "metric" | "imperial"
    }
  }
}
