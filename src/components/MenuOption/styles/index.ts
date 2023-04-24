import {StyleSheet} from "react-native"
import {COLORS} from "@strongr/constants/colors"
import {FONTS} from "@strongr/constants/fonts"
import {themedColor} from "@strongr/utils/theme"

export const menuOptionStyles = StyleSheet.create({
  checkbox: {
    backgroundColor: "transparent"
  },
  container: {
    alignItems: "center",
    borderColor: themedColor(COLORS.DARK_2, COLORS.SOFT),
    borderBottomWidth: 1,
    flexDirection: "row",
    height: 60,
    justifyContent: "space-between",
    paddingRight: 12
  },
  disabled: {
    opacity: 0.35
  },
  label: {
    color: themedColor(COLORS.WHITE, COLORS.BLACK),
    fontFamily: FONTS.INTER_MEDIUM,
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 18
  }
})
