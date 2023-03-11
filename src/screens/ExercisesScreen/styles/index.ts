import {Dimensions, StyleSheet} from "react-native"

import {COLORS} from "@strongr/constants/colors"
import {FONTS} from "@strongr/constants/fonts"

const {height: vh} = Dimensions.get("window")

export const exercisesScreenStyles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 24,
    height: "100%"
  },
  cardContainer: {
    marginBottom: 16
  },
  card: {
    minHeight: 120
  },
  heading: {
    color: COLORS.WHITE,
    fontSize: 36,
    marginBottom: 32,
    fontFamily: FONTS.INTER_SEMIBOLD,
    fontWeight: "600"
  },
  loader: {
    top: vh / 2 - 200
  }
})
