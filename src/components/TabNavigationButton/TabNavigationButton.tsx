import {View} from "react-native"

// components
import {Icon} from "@strongr/components/Icons/Icons"

// constants
import {COLORS} from "@strongr/constants/colors"

// styles
import {tabNavigationButtonStyles} from "./styles"

// types
import type {IconName} from "@strongr/components/Icons/Icons"
import type {ViewProps} from "react-native"

// utils
import {themedColor} from "@strongr/utils/theme"

type TabNavigationButtonProps = ViewProps & {
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
        <Icon fill={fill} height={30} name={iconName} width={30} />
      ) : null}
    </View>
  )
}
