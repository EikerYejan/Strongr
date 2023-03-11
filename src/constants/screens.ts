import type {IconName} from "@strongr/components/Icons/Icons"

// types
import type {$Values} from "@strongr/types/helpers"

interface ScreenConfig {
  iconName?: IconName
}

export const SCREEN_NAMES = {
  EXERCISES: "Exercises",
  HOME: "Home",
  LOGIN: "Login",
  SETTINGS: "Settings",
  SPLASH: "Splash",
  STATS: "Stats"
} as const

export const screensConfig: Record<
  $Values<typeof SCREEN_NAMES>,
  ScreenConfig
> = {
  [SCREEN_NAMES.EXERCISES]: {
    iconName: "Barbell"
  },
  [SCREEN_NAMES.HOME]: {
    iconName: "Home"
  },
  [SCREEN_NAMES.LOGIN]: {
    iconName: "Stats"
  },
  [SCREEN_NAMES.SETTINGS]: {
    iconName: "Settings"
  },
  [SCREEN_NAMES.SPLASH]: {},
  [SCREEN_NAMES.STATS]: {
    iconName: "Stats"
  }
}
