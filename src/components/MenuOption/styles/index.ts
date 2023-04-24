import {StyleSheet} from "react-native"
import {COLORS} from "@strongr/constants/colors"
import {FONTS} from "@strongr/constants/fonts"

export const menuOptionStyles = StyleSheet.create({
  checkbox: {
    backgroundColor: "transparent"
  },
  container: {
    alignItems: "center",
    borderColor: COLORS.DARK_2,
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
    color: COLORS.WHITE,
    fontFamily: FONTS.INTER_MEDIUM,
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 18
  }
})
