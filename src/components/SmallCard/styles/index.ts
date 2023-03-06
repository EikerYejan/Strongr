import {StyleSheet} from "react-native"

import {COLORS} from "@strongr/constants/colors"
import {FONTS} from "@strongr/constants/fonts"

export const smallCardStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.DARK_2,
    borderRadius: 16,
    flexDirection: "row",
    height: 90,
    overflow: "hidden"
  },
  image: {
    width: 82,
    height: "100%",
    marginRight: 18
  },
  title: {
    color: COLORS.WHITE,
    fontFamily: FONTS.INTER_REGULAR,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 18,
    marginBottom: 6,
    marginTop: 10,
    maxWidth: 150
  },
  subtitle: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.INTER_REGULAR,
    fontSize: 14,
    fontWeight: "500"
  }
})
