export type MeasurementUnit = "cm" | "kg" | "kcal" | "%" // TODO: support imperial units

export interface Measurement {
  key: string
  label: string
  unit: MeasurementUnit
  value?: number
}

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
