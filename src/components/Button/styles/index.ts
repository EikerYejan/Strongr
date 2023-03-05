import {COLORS} from "@strongr/constants/colors"
import {FONTS} from "@strongr/constants/fonts"
import {StyleSheet} from "react-native"

// types
import type {ButtonStyleProps} from "../Button"

export const getButtonStyles = (props: ButtonStyleProps) => {
  const {type, rounded} = props

  return StyleSheet.create({
    button: {
      width: "auto",
      height: 60,
      backgroundColor: type === "dark" ? COLORS.DARK_3 : COLORS.PRIMARY,
      borderRadius: rounded ? 50 : 0,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row"
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
