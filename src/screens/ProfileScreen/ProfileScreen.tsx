import {Alert, View} from "react-native"
import RNRestart from "react-native-restart"

// components
import {MenuOption} from "@strongr/components/MenuOption/MenuOption"

// constants
import {COLORS} from "@strongr/constants/colors"

// storage
import {Storage} from "@strongr/store/storage"

// types
import type {NavigationProp} from "@react-navigation/native"
import {NAVIGATORS, SCREEN_NAMES} from "@strongr/constants/screens"

interface Props {
  navigation: NavigationProp<Record<string, unknown>>
}

export const ProfileScreen = ({navigation}: Props) => {
  const DEV = process.env.NODE_ENV === "development"

  const onOptionPress = (screen: string) => {
    navigation.navigate(NAVIGATORS.PROFILE_NAVIGATOR, {screen})
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
    }
  ]

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

  return (
    <View
      style={{
        paddingHorizontal: 32
      }}
    >
      <View>
        {menuOptions.map((option) => (
          <MenuOption key={option.label} {...option} />
        ))}
        {DEV ? (
          <MenuOption
            label="Reset App Storage"
            onPress={onResetAppStoragePress}
          />
        ) : null}
        <MenuOption
          disabled
          label="Sign Out"
          labelStyles={{color: COLORS.ERROR, fontSize: 17}}
          showIcon={false}
        />
      </View>
    </View>
  )
}
