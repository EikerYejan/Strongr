import {StyleSheet} from "react-native"

import {COLORS} from "@strongr/constants/colors"
import {FONTS} from "@strongr/constants/fonts"

export const splashScreenStyles = StyleSheet.create({
  heading: {
    fontFamily: FONTS.INTER_BLACK,
    fontSize: 48,
    color: COLORS.PRIMARY
  },
  wrapper: {
    backgroundColor: COLORS.DARK_1,
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    padding: 20
  }
})
