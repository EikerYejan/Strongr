interface StepConfig {
  description: string
  key: string
  pickerOptionLabel?: string
  pickerOptions: Array<string | number>
  title: string
  type: "gender" | "age" | "height" | "weight" | "activityLevel" | "goal"
}

export const ONBOARDING_STEPS: Record<number, StepConfig> = {
  1: {
    description: "To give you a better experience we need to know your gender",
    key: "gender-selection",
    pickerOptions: ["Female", "Male", "Other"],
    title: "Tell us about yourself!",
    type: "gender"
  },
  2: {
    description: "This helps us create your personalized plan",
    key: "age-selection",
    pickerOptions: Array.from({length: 100}, (_, i) => i + 1).filter(
      (num) => num > 17
    ),
    title: "How old are you ?",
    type: "age"
  },
  3: {
    description: "You can always change this later",
    key: "weight-selection",
    pickerOptions: Array.from({length: 200}, (_, i) => i + 1).filter(
      (num) => num > 39
    ),
    pickerOptionLabel: "kg",
    title: "What’s your weight?",
    type: "weight"
  },
  4: {
    description: "This helps us create your personalized plan",
    key: "height-selection",
    pickerOptions: Array.from({length: 210}, (_, i) => i + 1).filter(
      (num) => num > 139
    ),
    pickerOptionLabel: "cm",
    title: "What’s your height?",
    type: "height"
  },
  5: {
    description: "This helps us create your personalized plan",
    key: "goal-selection",
    pickerOptions: [
      "Gain Weight",
      "Lose Weight",
      "Get Fitter",
      "Gain More Flexibility",
      "Learn the Basics"
    ],
    title: "What’s your goal?",
    type: "goal"
  },
  6: {
    description: "This helps us create your personalized plan",
    key: "activity-selection",
    pickerOptions: [
      "Rookie",
      "Beginner",
      "Intermediate",
      "Advanced",
      "True Beast"
    ],
    title: "Your regular physical activity level?",
    type: "activityLevel"
  }
}
