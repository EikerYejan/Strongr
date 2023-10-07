import {StyleSheet} from "react-native"

import {COLORS} from "@strongr/constants/colors"
import {FONTS} from "@strongr/constants/fonts"
import {themedColor} from "@strongr/utils/theme"

export const splashScreenStyles = StyleSheet.create({
  loader: {
    marginBottom: 10,
    marginTop: "auto"
  },
  heading: {
    marginTop: "auto",
    fontFamily: FONTS.INTER_BLACK,
    fontSize: 48,
    color: COLORS.PRIMARY
  },
  wrapper: {
    backgroundColor: themedColor(COLORS.DARK_1, COLORS.WHITE),
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    padding: 20
  }
})
