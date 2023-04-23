import {StyleSheet, TouchableOpacity} from "react-native"

// components
import {Icon} from "../Icons/Icons"

// constants
import {COLORS} from "@strongr/constants/colors"

// types
import type {TouchableOpacityProps} from "react-native"

interface Props extends TouchableOpacityProps {
  arrowDirection: "left" | "right"
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: COLORS.DARK_3,
    borderRadius: 54,
    flexDirection: "row",
    height: 54,
    justifyContent: "center",
    paddingRight: 2,
    width: 54
  }
})

export const BackButton = ({arrowDirection, style, ...props}: Props) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Icon
        fill={COLORS.WHITE}
        name={arrowDirection === "left" ? "ArrowLeft" : "ArrowRight"}
      />
    </TouchableOpacity>
  )
}
