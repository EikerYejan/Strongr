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
import type {Props as MenuOptionProps} from "@strongr/components/MenuOption/MenuOption"

// utils
import {useAppState} from "@strongr/store/store"

interface Props {
  navigation: NavigationProp<Record<string, unknown>>
}

export const ProfileScreen = ({navigation}: Props) => {
  const {updateAppState} = useAppState()

  const onOptionPress = (screen: string) => {
    navigation.navigate(NAVIGATORS.PROFILE_NAVIGATOR, {screen})
  }

  const onResetAppStoragePress = () => {
    Alert.alert("Do you want to reset the app storage?", "", [
      {
        text: "Cancel"
      },
      {
        onPress: () => {
          Storage.clearAppStorage()
          RNRestart.restart()
        },
        text: "Reset"
      }
    ])
  }

  const menuOptions: MenuOptionProps[] = [
    {
      label: "Edit Profile",
      onPress: () => {
        onOptionPress(SCREEN_NAMES.EDIT_PROFILE)
      }
    },
    {
      label: "Measurements",
      onPress: () => {
        onOptionPress(SCREEN_NAMES.MEASUREMENTS)
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
      labelStyles: {
        color: COLORS.PRIMARY,
        fontSize: 17
      },
      onPress: onResetAppStoragePress,
      showIcon: false
    },
    {
      label: "Sign Out",
      labelStyles: {
        color: COLORS.ERROR,
        fontSize: 17
      },
      onPress: () => {
        updateAppState({hasAuth: false})
        navigation.reset({
          index: 1,
          routes: [{name: NAVIGATORS.AUTH}]
        })
      },
      showIcon: false,
      style: {
        borderTopWidth: 1,
        marginTop: "auto"
      }
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
