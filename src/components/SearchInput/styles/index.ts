import {StyleSheet} from "react-native"

import {COLORS} from "@strongr/constants/colors"

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
    backgroundColor: COLORS.SOFT,
    borderRadius: 6,
    height: 24,
    justifyContent: "center",
    marginLeft: 12,
    width: 24
  }
})
