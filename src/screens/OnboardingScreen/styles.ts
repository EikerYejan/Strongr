import {StyleSheet} from "react-native"

import {FONTS} from "@strongr/constants/fonts"
import {COLORS} from "@strongr/constants/colors"

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
    color: COLORS.SOFT,
    fontFamily: FONTS.INTER_REGULAR,
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center"
  },
  title: {
    color: COLORS.WHITE,
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
    color: COLORS.WHITE,
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
