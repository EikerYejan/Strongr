import {StyleSheet} from "react-native"

import {COLORS} from "@strongr/constants/colors"
import {FONTS} from "@strongr/constants/fonts"

export const textInputStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.DARK_2,
    borderRadius: 10,
    flexDirection: "row",
    height: 45,
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 12,
    width: "100%"
  },
  input: {
    color: COLORS.WHITE,
    fontFamily: FONTS.INTER_SEMIBOLD,
    height: "100%",
    paddingLeft: 13,
    width: "100%"
  }
})
