export type MeasurementUnit = "cm" | "kg" | "kcal" | "%" | "in" | "lb"

export interface Measurement {
  key: string
  label: string
  unit: MeasurementUnit
  value?: number
}

export interface AppState {
  __version: string
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
    measurements: Record<string, Measurement>
    name: string
    settings: {
      enableProgramNotifications: boolean
      enableWorkoutReminders: boolean
      measureUnit: "metric" | "imperial"
    }
    weight?: number
  }
}
