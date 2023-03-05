import {useMemo} from "react"

import {TouchableOpacity, Text} from "react-native"

// components
import {Icon} from "../Icons/Icons"

// constants
import {COLORS} from "@strongr/constants/colors"

// styles
import {getButtonStyles} from "./styles"

// types
import type {TouchableOpacityProps} from "react-native"
import type {IconName} from "../Icons/Icons"

export type ButtonType = "primary" | "dark"

export interface ButtonStyleProps {
  rounded?: boolean
  type?: ButtonType
}

interface ButtonProps
  extends Omit<TouchableOpacityProps, "children">,
    ButtonStyleProps {
  onPress: () => void
  leftIconName?: IconName
  rightIconName?: IconName
  title: string
}

export const Button = ({
  onPress,
  leftIconName,
  rightIconName,
  rounded = true,
  type = "primary",
  title,
  ...props
}: ButtonProps) => {
  const styles = useMemo(
    () => getButtonStyles({rounded, type}),
    [rounded, type]
  )

  return (
    <TouchableOpacity style={styles.button} onPress={onPress} {...props}>
      {leftIconName ? <Icon fill={COLORS.WHITE} name={leftIconName} /> : null}
      <Text style={styles.buttonText}>{title}</Text>
      {rightIconName ? <Icon fill={COLORS.WHITE} name={rightIconName} /> : null}
    </TouchableOpacity>
  )
}
