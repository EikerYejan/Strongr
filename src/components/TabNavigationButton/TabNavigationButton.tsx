import {Text, View, TouchableOpacityProps} from "react-native"

// components
import {Icon} from "../Icons/Icons"

// constants
import {COLORS} from "../../constants/colors"

//styles
import {tabNavigationButtonStyles} from "./styles"

export type TabNavigationButtonProps = TouchableOpacityProps & {
  focused?: boolean
  iconName: string
}

export const TabNavigationButton = ({
  focused,
  iconName,
  ...props
}: TabNavigationButtonProps) => {
  const fill = focused ? COLORS.WHITE : COLORS.GRAY

  return (
    <View {...props} style={tabNavigationButtonStyles.container}>
      {iconName ? (
        <Icon width={30} height={30} fill={fill} name={iconName} />
      ) : null}
    </View>
  )
}
