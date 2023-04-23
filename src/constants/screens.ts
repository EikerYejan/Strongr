import type {IconName} from "@strongr/components/Icons/Icons"

// types
import type {$Values} from "@strongr/types/helpers"

interface ScreenConfig {
  iconName?: IconName
}

export const SCREEN_NAMES = {
  EDIT_PROFILE: "EditProfile",
  EXERCISES: "Exercises",
  HOME: "Home",
  LOGIN: "Login",
  ONBOARDING: "Onboarding",
  PRIVACY: "Privacy",
  PROFILE: "Profile",
  SETTINGS_CONTENT: "SettingsContent",
  SETTINGS: "Settings",
  SPLASH: "Splash",
  STATS: "Stats"
} as const

export const NAVIGATORS = {
  PROFILE_NAVIGATOR: "ProfileNavigator",
  TABS_NAVIGATOR: "TabsNavigator"
} as const

export const screensConfig: Record<
  $Values<Pick<typeof SCREEN_NAMES, "HOME" | "EXERCISES" | "SETTINGS">>,
  ScreenConfig
> = {
  [SCREEN_NAMES.EXERCISES]: {
    iconName: "Barbell"
  },
  [SCREEN_NAMES.HOME]: {
    iconName: "Home"
  },
  [SCREEN_NAMES.SETTINGS]: {
    iconName: "Settings"
  }
}

export const settingsContentType = {
  NOTIFICATIONS: "Notifications",
  UNITS_OF_MEASURE: "Units of Measure"
} as const

export type SettingsContentType = $Values<typeof settingsContentType>
