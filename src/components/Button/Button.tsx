import {useMemo} from "react"

import {TouchableOpacity, Text, ActivityIndicator} from "react-native"

// components
import {Icon} from "../Icons/Icons"

// constants
import {COLORS} from "@strongr/constants/colors"

// styles
import {getButtonStyles} from "./styles"

// types
import type {TouchableOpacityProps, ViewStyle} from "react-native"
import type {IconName} from "../Icons/Icons"

export type ButtonType = "primary" | "dark"

export type ButtonSize = "large" | "regular" | "small"

export interface ButtonStyleProps {
  rounded?: boolean
  size?: ButtonSize
  type?: ButtonType
}

export interface ButtonProps
  extends Omit<TouchableOpacityProps, "children">,
    ButtonStyleProps {
  leftIconName?: IconName
  loading?: boolean
  onPress?: () => void
  rightIconName?: IconName
  style?: ViewStyle
  title: string
}

export const Button = ({
  disabled,
  leftIconName,
  loading = false,
  onPress,
  rightIconName,
  rounded = true,
  size = "regular",
  style,
  title,
  type = "primary",
  ...props
}: ButtonProps) => {
  const styles = useMemo(
    () => getButtonStyles({rounded, size, type}),
    [rounded, size, type]
  )

  return (
    <TouchableOpacity
      disabled={disabled ?? loading}
      style={[
        styles.button,
        disabled ? {backgroundColor: COLORS.GRAY} : {},
        style
      ]}
      onPress={onPress}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={COLORS.WHITE} size="large" />
      ) : (
        <>
          {leftIconName ? (
            <Icon fill={COLORS.WHITE} name={leftIconName} />
          ) : null}
          <Text style={styles.buttonText}>{title}</Text>
          {rightIconName ? (
            <Icon fill={COLORS.WHITE} name={rightIconName} />
          ) : null}
        </>
      )}
    </TouchableOpacity>
  )
}
