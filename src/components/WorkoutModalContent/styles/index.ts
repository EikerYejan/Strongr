import {StyleSheet, Dimensions} from "react-native"

import {COLORS} from "@strongr/constants/colors"
import {FONTS} from "@strongr/constants/fonts"

const {width: vw} = Dimensions.get("screen")

export const workoutModalContentStyles = StyleSheet.create({
  contentContainer: {
    backgroundColor: COLORS.DARK_1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 24,
    paddingVertical: 32,
    position: "relative",
    height: "100%",
    marginTop: -40
  },
  closeButton: {
    position: "absolute",
    width: 32,
    height: 32,
    top: 56,
    left: 24,
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: 338,
    backgroundColor: COLORS.DARK_1
  },
  wrapper: {
    position: "relative",
    height: "100%"
  },
  workoutName: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: FONTS.INTER_SEMIBOLD,
    color: COLORS.WHITE
  },
  workoutDescription: {
    fontSize: 15,
    fontWeight: "400",
    fontFamily: FONTS.INTER_REGULAR,
    color: COLORS.WHITE,
    marginVertical: 32,
    marginBottom: 1000
  },
  workoutStartButtonWrapper: {
    position: "absolute",
    width: 300,
    bottom: 60,
    left: vw / 2 - 150
  }
})
