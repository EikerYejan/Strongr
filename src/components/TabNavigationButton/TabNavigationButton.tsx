import {View} from "react-native"
import type {TouchableOpacityProps} from "react-native"

// components
import {Icon} from "@strongr/components/Icons/Icons"

// constants
import {COLORS} from "@strongr/constants/colors"

// styles
import {tabNavigationButtonStyles} from "./styles"

// types
import type {IconName} from "@strongr/components/Icons/Icons"

// utils
import {themedColor} from "@strongr/utils/theme"

type TabNavigationButtonProps = TouchableOpacityProps & {
  focused?: boolean
  iconName: IconName
}

export const TabNavigationButton = ({
  focused,
  iconName,
  ...props
}: TabNavigationButtonProps) => {
  const fill = focused ? themedColor(COLORS.WHITE, COLORS.PRIMARY) : COLORS.GRAY

  return (
    <View {...props} style={tabNavigationButtonStyles.container}>
      {iconName ? (
        <Icon width={30} height={30} fill={fill} name={iconName} />
      ) : null}
    </View>
  )
}
