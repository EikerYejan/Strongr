import {StyleSheet} from "react-native"

import {COLORS} from "@strongr/constants/colors"
import {FONTS} from "@strongr/constants/fonts"

export const sectionHeadingStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "space-between"
  },
  heading: {
    fontSize: 17,
    fontWeight: "500",
    fontFamily: FONTS.INTER_REGULAR,
    color: COLORS.WHITE
  },
  rightText: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: FONTS.INTER_REGULAR,
    color: COLORS.PRIMARY
  }
})
