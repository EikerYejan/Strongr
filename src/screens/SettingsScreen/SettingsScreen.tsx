// components
import {MenuOption} from "@strongr/components/MenuOption/MenuOption"
import {ScreenWrapper} from "@strongr/components/ScreenWrapper/ScreenWrapper"

// constants
import {
  NAVIGATORS,
  SCREEN_NAMES,
  settingsContentType
} from "@strongr/constants/screens"

// types
import type {NavigationProp} from "@react-navigation/native"
import type {SettingsContentType} from "@strongr/constants/screens"

interface Props {
  navigation: NavigationProp<{
    [NAVIGATORS.PROFILE_NAVIGATOR]: {
      params: {contentType: SettingsContentType}
      screen: typeof SCREEN_NAMES.SETTINGS_CONTENT
    }
  }>
}

export const SettingsScreen = ({navigation}: Props) => {
  const onItemPress = (type: SettingsContentType) => () => {
    navigation.navigate(NAVIGATORS.PROFILE_NAVIGATOR, {
      params: {contentType: type},
      screen: SCREEN_NAMES.SETTINGS_CONTENT
    })
  }

  return (
    <ScreenWrapper>
      <MenuOption
        label="Units of Measure"
        onPress={onItemPress(settingsContentType.UNITS_OF_MEASURE)}
      />
      <MenuOption
        label="Notifications"
        onPress={onItemPress(settingsContentType.NOTIFICATIONS)}
      />
      <MenuOption disabled label="Language" />
      <MenuOption disabled label="Contact Us" />
    </ScreenWrapper>
  )
}
