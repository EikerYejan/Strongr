import {View} from "react-native"

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
      screen: typeof SCREEN_NAMES.SETTINGS_CONTENT
      params: {
        contentType: SettingsContentType
      }
    }
  }>
}

export const SettingsScreen = ({navigation}: Props) => {
  const onItemPress = (type: SettingsContentType) => () => {
    navigation.navigate(NAVIGATORS.PROFILE_NAVIGATOR, {
      screen: SCREEN_NAMES.SETTINGS_CONTENT,
      params: {
        contentType: type
      }
    })
  }

  return (
    <ScreenWrapper>
      <View>
        <MenuOption
          onPress={onItemPress(settingsContentType.UNITS_OF_MEASURE)}
          label="Units of Measure"
        />
        <MenuOption
          onPress={onItemPress(settingsContentType.NOTIFICATIONS)}
          label="Notifications"
        />
        <MenuOption disabled label="Language" />
        <MenuOption disabled label="Contact Us" />
      </View>
    </ScreenWrapper>
  )
}
