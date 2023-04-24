import {Dimensions, StyleSheet} from "react-native"

import {COLORS} from "@strongr/constants/colors"
import {FONTS} from "@strongr/constants/fonts"

const {height: vh, width: vw} = Dimensions.get("screen")

const bottomSectionHeight = vh / 2 - 92

export const authForm = StyleSheet.create({
  backgroundImage: {
    height: vh / 2,
    left: 0,
    maxHeight: vh / 2,
    position: "absolute",
    top: 0,
    width: "100%"
  },
  bottomContainer: {
    height: bottomSectionHeight,
    marginTop: "auto",
    padding: 42,
    position: "relative",
    width: "100%",
    zIndex: 1
  },
  bottomContainerBackground: {
    backgroundColor: COLORS.DARK_1,
    height: bottomSectionHeight,
    left: 0,
    position: "absolute",
    top: -72,
    transform: [{skewY: "-18deg"}],
    width: vw,
    zIndex: -1
  },
  container: {
    height: "100%"
  },
  description: {
    color: COLORS.SOFT,
    fontFamily: FONTS.INTER_REGULAR,
    fontSize: 13,
    fontWeight: "400",
    width: 200
  },
  heading: {
    color: COLORS.WHITE,
    fontFamily: FONTS.INTER_LIGHT,
    fontSize: 36,
    fontWeight: "300",
    marginBottom: 12
  },
  headingAccent: {
    fontFamily: FONTS.INTER_SEMIBOLD,
    fontWeight: "600"
  },
  input: {
    backgroundColor: COLORS.TRANSPARENT,
    borderBottomWidth: 1,
    borderColor: COLORS.DARK_2,
    marginBottom: 40,
    paddingBottom: 25,
    paddingLeft: 0
  },
  submitButton: {
    marginLeft: "auto",
    marginTop: 0,
    width: 140
  },
  topContainer: {
    marginTop: "auto",
    padding: 42
  }
})
