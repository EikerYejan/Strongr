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
    settings: {
      enableProgramNotifications: boolean
      enableWorkoutReminders: boolean
      measureUnit: "metric" | "imperial"
    }
    weight?: number
  }
}
