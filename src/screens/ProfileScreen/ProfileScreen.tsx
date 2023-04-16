import {View} from "react-native"

// components
import {MenuOption} from "@strongr/components/MenuOption/MenuOption"

// constants
import {COLORS} from "@strongr/constants/colors"

// types
import type {NavigationProp} from "@react-navigation/native"
import {NAVIGATORS, SCREEN_NAMES} from "@strongr/constants/screens"

interface Props {
  navigation: NavigationProp<Record<string, unknown>>
}

export const ProfileScreen = ({navigation}: Props) => {
  const onOptionPress = (screen: string) => {
    navigation.navigate(NAVIGATORS.PROFILE_NAVIGATOR, {screen})
  }

  const menuOptions = [
    {
      disabled: true,
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
