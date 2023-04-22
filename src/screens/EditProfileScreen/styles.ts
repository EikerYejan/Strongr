import {StyleSheet} from "react-native"

import {COLORS} from "@strongr/constants/colors"
import {FONTS} from "@strongr/constants/fonts"

export const editProfileScreenStyles = StyleSheet.create({
  optionContainer: {
    borderBottomColor: COLORS.DARK_2,
    borderBottomWidth: 1,
    paddingVertical: 25
  },
  optionLabel: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.INTER_REGULAR,
    fontSize: 13,
    fontWeight: "400",
    marginBottom: 10
  },
  textInput: {
    paddingLeft: 0
  },
  saveButton: {
    marginTop: "100%",
    bottom: -30
  }
})
