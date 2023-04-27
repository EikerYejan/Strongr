import {COLORS} from "@strongr/constants/colors"
import {FONTS} from "@strongr/constants/fonts"
import {themedColor} from "@strongr/utils/theme"
import {Dimensions, StyleSheet} from "react-native"

const {height: vh, width: vw} = Dimensions.get("window")

export const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: themedColor(COLORS.DARK_1, COLORS.WHITE),
    padding: 68,
    position: "relative",
    zIndex: 1
  },
  contentBackground: {
    backgroundColor: themedColor(COLORS.DARK_1, COLORS.WHITE),
    height: vh / 2,
    position: "absolute",
    right: 0,
    top: -70,
    transform: [{skewY: "-18deg"}],
    width: vw,
    zIndex: -1
  },
  slideImage: {
    height: vh / 2,
    width: "100%"
  },
  slideTitle: {
    fontSize: 28,
    fontFamily: FONTS.INTER_LIGHT,
    fontWeight: "300",
    color: themedColor(COLORS.WHITE, COLORS.BLACK),
    textAlign: "center"
  },
  slideSubTitle: {
    fontFamily: FONTS.INTER_SEMIBOLD,
    fontWeight: "600"
  },
  slideButton: {
    marginTop: 56
  },
  slide: {
    backgroundColor: themedColor(COLORS.DARK_1, COLORS.WHITE),
    height: "100%"
  }
})

export const indicatorStyles = StyleSheet.create({
  containter: {
    bottom: 64,
    flexDirection: "row",
    height: 4,
    justifyContent: "space-between",
    position: "absolute"
  },
  indicator: {
    height: 4,
    width: 16,
    backgroundColor: COLORS.SOFT
  },
  indicatorActive: {
    backgroundColor: COLORS.PRIMARY,
    width: 36
  }
})
