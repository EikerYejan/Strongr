export interface AppState {
  user: {
    name: string
    email: string | undefined
    settings: {
      measureUnit: "metric" | "imperial"
      enableWorkoutReminders: boolean
      enableProgramNotifications: boolean
    }
  }
}
