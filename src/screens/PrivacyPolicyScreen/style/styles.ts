import {StyleSheet} from "react-native"

// constants
import {COLORS} from "@strongr/constants/colors"
import {FONTS} from "@strongr/constants/fonts"

export const privacyPolicyScreenStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    marginTop: 32
  },
  text: {
    color: COLORS.SOFT,
    fontFamily: FONTS.INTER_SEMIBOLD,
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 18,
    marginBottom: 18,
    textAlign: "justify"
  }
})
