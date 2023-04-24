import {StyleSheet} from "react-native"

import {COLORS} from "@strongr/constants/colors"
import {FONTS} from "@strongr/constants/fonts"
import {themedColor} from "@strongr/utils/theme"

export const homeScreenStyles = StyleSheet.create({
  anouncer: {
    marginBottom: 32
  },
  anouncerText: {
    color: themedColor(COLORS.SOFT, COLORS.DARK_3),
    fontFamily: FONTS.INTER_REGULAR,
    fontSize: 25,
    fontWeight: "400"
  },
  container: {
    paddingTop: 60,
    paddingHorizontal: 24
  },
  userName: {
    color: themedColor(COLORS.WHITE, COLORS.BLACK),
    fontFamily: FONTS.INTER_SEMIBOLD,
    fontSize: 36,
    fontWeight: "600"
  },
  greeting: {
    color: themedColor(COLORS.WHITE, COLORS.BLACK),
    fontFamily: FONTS.INTER_LIGHT,
    fontSize: 36,
    fontWeight: "300"
  },
  greetingWrapper: {
    flexDirection: "row"
  }
})
