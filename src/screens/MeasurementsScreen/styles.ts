import {COLORS} from "@strongr/constants/colors"
import {FONTS} from "@strongr/constants/fonts"
import {themedColor} from "@strongr/utils/theme"
import {StyleSheet} from "react-native"

export const measurementsScreenStyles = StyleSheet.create({
  groupTitle: {
    color: themedColor(COLORS.WHITE, COLORS.BLACK),
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: FONTS.INTER_BOLD
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
    padding: 2
  },
  itemLabel: {
    color: themedColor(COLORS.SOFT, COLORS.SECONDARY),
    fontSize: 16,
    fontFamily: FONTS.INTER_REGULAR
  },
  itemValue: {
    color: themedColor(COLORS.WHITE, COLORS.SOFT),
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: FONTS.INTER_BOLD
  },
  modalContent: {
    backgroundColor: themedColor(COLORS.DARK_3, COLORS.WHITE),
    padding: 20,
    height: "100%"
  },
  modalInput: {
    marginTop: 5
  },
  modalInputLabel: {
    color: themedColor(COLORS.WHITE, COLORS.BLACK),
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FONTS.INTER_BOLD,
    marginTop: 30
  },
  modalSaveButton: {
    position: "absolute",
    right: 20,
    top: 20
  },
  modalSaveButtonText: {
    color: COLORS.PRIMARY,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: FONTS.INTER_BOLD
  }
})
