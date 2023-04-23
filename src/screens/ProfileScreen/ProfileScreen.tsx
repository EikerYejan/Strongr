import {Alert} from "react-native"
import RNRestart from "react-native-restart"

// components
import {MenuOption} from "@strongr/components/MenuOption/MenuOption"
import {ScreenWrapper} from "@strongr/components/ScreenWrapper/ScreenWrapper"

// constants
import {COLORS} from "@strongr/constants/colors"
import {NAVIGATORS, SCREEN_NAMES} from "@strongr/constants/screens"

// storage
import {Storage} from "@strongr/store/storage"

// types
import type {NavigationProp} from "@react-navigation/native"

interface Props {
  navigation: NavigationProp<Record<string, unknown>>
}

export const ProfileScreen = ({navigation}: Props) => {
  const onOptionPress = (screen: string) => {
    navigation.navigate(NAVIGATORS.PROFILE_NAVIGATOR, {screen})
  }

  const onResetAppStoragePress = () => {
    Alert.alert("Do you want to reset the app storage?", "", [
      {
        text: "Cancel"
      },
      {
        text: "Reset",
        onPress: () => {
          Storage.clearAppStorage()
          RNRestart.restart()
        }
      }
    ])
  }

  const menuOptions = [
    {
      label: "Edit Profile",
      onPress: () => {
        onOptionPress(SCREEN_NAMES.EDIT_PROFILE)
      }
    },
    {
      label: "Privacy Policy",
      onPress: () => {
        onOptionPress(SCREEN_NAMES.PRIVACY)
      }
    },
    {
      label: "Settings",
      onPress: () => {
        onOptionPress(SCREEN_NAMES.SETTINGS)
      }
    },
    {
      label: "Reset App Storage",
      onPress: onResetAppStoragePress,
      showIcon: false,
      labelStyles: {
        color: COLORS.PRIMARY,
        fontSize: 17
      }
    },
    {
      disabled: true,
      label: "Sign Out",
      labelStyles: {
        color: COLORS.ERROR,
        fontSize: 17
      },
      showIcon: false
    }
  ]

  return (
    <ScreenWrapper>
      {menuOptions.map((option) => (
        <MenuOption key={option.label} {...option} />
      ))}
    </ScreenWrapper>
  )
}
