import {Switch, Text, TouchableOpacity} from "react-native"
import {useCallback} from "react"

// components
import {CheckBox} from "@rneui/themed"
import {Icon} from "../Icons/Icons"

// constants
import {COLORS} from "@strongr/constants/colors"

// styles
import {menuOptionStyles as styles} from "./styles"

// types
import type {TextStyle, ViewStyle} from "react-native"

interface Props {
  checked?: boolean
  disabled?: boolean
  inidicatorType?: "arrow" | "check" | "toggle"
  label: string
  labelStyles?: TextStyle
  onCheck?: (value: boolean) => void
  onPress?: () => void
  showIcon?: boolean
  style?: ViewStyle
}

export const MenuOption = ({
  checked = false,
  disabled = false,
  inidicatorType = "arrow",
  label,
  labelStyles,
  onCheck,
  onPress,
  showIcon = true,
  style
}: Props) => {
  const renderIcon = useCallback(() => {
    if (!showIcon) return null

    if (inidicatorType === "arrow") {
      return <Icon fill={COLORS.GRAY} name="ArrowRight" />
    }

    if (inidicatorType === "check") {
      return (
        <CheckBox
          checked={checked}
          checkedColor={COLORS.PRIMARY}
          checkedIcon="dot-circle-o"
          containerStyle={styles.checkbox}
          uncheckedIcon="circle-o"
          onPress={() => {
            onCheck?.(!checked)
          }}
        />
      )
    }

    if (inidicatorType === "toggle") {
      return (
        <Switch
          onValueChange={onCheck}
          trackColor={{false: COLORS.DARK_2, true: COLORS.PRIMARY}}
          value={checked}
        />
      )
    }

    return null
  }, [checked, inidicatorType, onCheck, showIcon])

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, disabled ? styles.disabled : {}, style]}
      onPress={onPress}
    >
      <Text style={[styles.label, labelStyles]}>{label}</Text>
      {renderIcon()}
    </TouchableOpacity>
  )
}
