import {Text, TouchableOpacity} from "react-native"

// components
import {Icon} from "../Icons/Icons"

// constants
import {COLORS} from "@strongr/constants/colors"

// styles
import {menuOptionStyles as styles} from "./styles"

// types
import type {TextStyle} from "react-native"

interface Props {
  label: string
  labelStyles?: TextStyle
  onPress?: () => void
  showIcon?: boolean
}

export const MenuOption = ({
  label,
  labelStyles,
  onPress,
  showIcon = true
}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={[styles.label, labelStyles]}>{label}</Text>
      {showIcon ? <Icon fill={COLORS.GRAY} name="ArrowRight" /> : null}
    </TouchableOpacity>
  )
}
