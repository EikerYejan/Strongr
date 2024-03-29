import {StyleSheet, Dimensions} from "react-native"

import {COLORS} from "@strongr/constants/colors"
import {FONTS} from "@strongr/constants/fonts"
import {themedColor} from "@strongr/utils/theme"

const {width: vw} = Dimensions.get("screen")

export const workoutModalContentStyles = StyleSheet.create({
  contentContainer: {
    backgroundColor: themedColor(COLORS.DARK_1, COLORS.WHITE),
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 24,
    paddingTop: 32,
    position: "relative",
    marginTop: -40,
    flex: 1
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
    backgroundColor: themedColor(COLORS.DARK_1, COLORS.WHITE)
  },
  scrollView: {
    flex: 1
  },
  wrapper: {
    position: "relative",
    height: "100%"
  },
  workoutName: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: FONTS.INTER_SEMIBOLD,
    color: themedColor(COLORS.WHITE, COLORS.BLACK)
  },
  workoutExcerpt: {
    color: COLORS.PRIMARY,
    marginTop: 8,
    marginBottom: 32,
    fontSize: 14,
    fontWeight: "400",
    fontFamily: FONTS.INTER_REGULAR
  },
  workoutInfoWrapper: {
    flexDirection: "row",
    marginTop: 32
  },
  workoutInfoItem: {
    marginRight: 16
  },
  workoutDescription: {
    fontSize: 15,
    fontWeight: "400",
    fontFamily: FONTS.INTER_REGULAR,
    color: themedColor(COLORS.SOFT, COLORS.DARK_1),
    marginBottom: 16
  },
  workoutDescriptionWrapper: {
    marginTop: 32
  },
  workoutDescriptionTitle: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: FONTS.INTER_SEMIBOLD,
    color: themedColor(COLORS.WHITE, COLORS.PRIMARY),
    marginBottom: 32
  },
  workoutStartButtonWrapper: {
    position: "absolute",
    width: vw,
    bottom: 0,
    left: 0,
    height: 190,
    justifyContent: "center",
    alignItems: "center"
  },
  workoutStartButton: {
    width: 260
  },
  workoutStepsWrapper: {
    paddingBottom: 150
  },
  workoutStepItem: {
    marginBottom: 16
  }
})
