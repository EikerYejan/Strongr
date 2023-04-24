import {StyleSheet, TouchableOpacity} from "react-native"

// components
import {Icon} from "../Icons/Icons"

// constants
import {COLORS} from "@strongr/constants/colors"

// types
import type {TouchableOpacityProps} from "react-native"

// utils
import {themedColor} from "@strongr/utils/theme"

interface Props extends TouchableOpacityProps {
  arrowDirection: "left" | "right"
  height?: number
  width?: number
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: themedColor(COLORS.DARK_3, COLORS.TRANSPARENT),
    borderRadius: 54,
    flexDirection: "row",
    height: 54,
    justifyContent: "center",
    paddingRight: 2,
    width: 54,
    borderWidth: 1.5,
    borderColor: themedColor(COLORS.TRANSPARENT, COLORS.WHITE)
  }
})

export const BackButton = ({
  arrowDirection,
  height,
  style,
  width,
  ...props
}: Props) => {
  const customStyles = width && height ? {height, width} : {}

  return (
    <TouchableOpacity style={[styles.button, style, customStyles]} {...props}>
      <Icon
        fill={COLORS.WHITE}
        name={arrowDirection === "left" ? "ArrowLeft" : "ArrowRight"}
      />
    </TouchableOpacity>
  )
}
