import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";

export const splashScreenStyles = StyleSheet.create({
  heading: {
    fontFamily: FONTS.INTER_BLACK,
    fontSize: 48,
    color: COLORS.WHITE,
  },
  wrapper: {
    backgroundColor: COLORS.DARK_1,
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    padding: 20,
  },
  safeAreaView: {
    backgroundColor: COLORS.DARK_1,
  },
});
