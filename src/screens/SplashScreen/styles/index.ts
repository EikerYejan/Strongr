import { StyleSheet } from "react-native";
import { FONTS } from "../../../constants/fonts";

export const splashScreenStyles = StyleSheet.create({
  heading: {
    fontFamily: FONTS.INTER_BLACK,
    fontSize: 48,
  },
  wrapper: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    padding: 20,
  },
});
