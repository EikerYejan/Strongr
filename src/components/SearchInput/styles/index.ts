import {StyleSheet} from "react-native"

import {COLORS} from "@strongr/constants/colors"
import {themedColor} from "@strongr/utils/theme"

export const searchInputStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden"
  },
  clearIcon: {
    color: COLORS.WHITE,
    fontSize: 22,
    lineHeight: 22
  },
  textInput: {
    flex: 1
  },
  clearIconContainer: {
    alignItems: "center",
    backgroundColor: themedColor(COLORS.SOFT, COLORS.BLACK),
    borderRadius: 6,
    height: 24,
    justifyContent: "center",
    marginLeft: 12,
    width: 24
  }
})
