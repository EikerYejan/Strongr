import {COLORS} from "@strongr/constants/colors"
import {FONTS} from "@strongr/constants/fonts"
import {StyleSheet} from "react-native"

// types
import type {ButtonStyleProps} from "../Button"

const getSize = (size: ButtonStyleProps["size"]) => {
  if (size === "small") return 40

  return 60
}

export const getButtonStyles = (props: ButtonStyleProps) => {
  const {rounded, size, type} = props

  return StyleSheet.create({
    button: {
      width: "auto",
      height: getSize(size),
      backgroundColor: type === "dark" ? COLORS.DARK_2 : COLORS.PRIMARY,
      borderRadius: rounded ? 50 : 0,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: 10
    },
    buttonText: {
      fontSize: 17,
      fontWeight: "600",
      fontFamily: FONTS.INTER_SEMIBOLD,
      color: COLORS.WHITE,
      marginHorizontal: 8
    }
  })
}
