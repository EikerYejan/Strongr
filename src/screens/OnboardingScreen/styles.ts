import {StyleSheet} from "react-native"

import {FONTS} from "@strongr/constants/fonts"
import {COLORS} from "@strongr/constants/colors"
import {themedColor} from "@strongr/utils/theme"

export const onboardingScreenStyles = StyleSheet.create({
  bottomBar: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  nextButton: {
    marginLeft: "auto",
    width: 110
  },
  description: {
    color: themedColor(COLORS.SOFT, COLORS.DARK_3),
    fontFamily: FONTS.INTER_REGULAR,
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center"
  },
  title: {
    color: themedColor(COLORS.WHITE, COLORS.BLACK),
    fontFamily: FONTS.INTER_SEMIBOLD,
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center"
  },
  picker: {
    height: "100%"
  },
  pickerOption: {
    color: themedColor(COLORS.WHITE, COLORS.PRIMARY),
    fontFamily: FONTS.INTER_SEMIBOLD,
    fontWeight: "600"
  },
  selectionWrapper: {
    marginBottom: "auto",
    marginTop: "auto",
    maxHeight: 350,
    minHeight: 335
  }
})
