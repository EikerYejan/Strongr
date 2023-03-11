import {StyleSheet} from "react-native"

import {COLORS} from "@strongr/constants/colors"
import {FONTS} from "@strongr/constants/fonts"

export const cardStyles = StyleSheet.create({
  content: {
    marginTop: "auto",
    padding: 16
  },
  container: {
    borderRadius: 16,
    width: "100%",
    minHeight: 190,
    flex: 1,
    overflow: "hidden",
    position: "relative"
  },
  imageBackground: {
    borderRadius: 16,
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  heading: {
    color: COLORS.WHITE,
    fontFamily: FONTS.INTER_SEMIBOLD,
    fontSize: 17,
    fontWeight: "600"
  },
  text: {
    color: COLORS.SOFT,
    fontFamily: FONTS.INTER_REGULAR,
    fontSize: 13,
    fontWeight: "400",
    marginTop: 4
  },
  textContainer: {
    flexDirection: "row",
    paddingLeft: 0,
    alignItems: "center"
  },
  textBorder: {
    height: 11,
    borderLeftWidth: 2,
    borderLeftColor: COLORS.PRIMARY,
    marginRight: 5,
    marginTop: 4
  },
  defaultWrapper: {
    backgroundColor: COLORS.SECONDARY
  },
  description: {
    color: COLORS.WHITE,
    marginTop: 20,
    fontFamily: FONTS.INTER_REGULAR,
    fontSize: 13,
    fontWeight: "400"
  }
})
