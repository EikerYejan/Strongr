import {COLORS} from "@strongr/constants/colors"
import {themedColor} from "@strongr/utils/theme"
import {StyleSheet} from "react-native"

export const measurementsScreenStyles = StyleSheet.create({
  groupTitle: {
    color: themedColor(COLORS.WHITE, COLORS.BLACK),
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10
  },
  groupWrapper: {
    marginBottom: 20
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12
  },
  itemControls: {
    alignItems: "center",
    flexDirection: "row"
  },
  itemControlsButton: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 4,
    marginLeft: 15,
    opacity: 0.8,
    padding: 2
  },
  itemLabel: {
    color: themedColor(COLORS.SOFT, COLORS.SECONDARY),
    fontSize: 16,
    fontWeight: "700"
  },
  itemValue: {
    color: themedColor(COLORS.WHITE, COLORS.SOFT),
    fontSize: 16,
    fontWeight: "bold"
  }
})
