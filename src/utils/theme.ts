import {Appearance} from "react-native"
import merge from "ts-deepmerge"

import type {TextStyle, ViewStyle} from "react-native"

type Styles = Record<string, ViewStyle | TextStyle>

export const getColorScheme = () => {
  // return "light"
  return Appearance.getColorScheme() ?? "dark"
}

export const themedProp = (
  defaultProp: string | number,
  lightProp: string | number
) => {
  const theme = getColorScheme()

  return theme === "light" ? lightProp : defaultProp
}

export const themedColor = (defaultColor: string, lightColor: string) => {
  return String(themedProp(defaultColor, lightColor))
}

export const themedStyles = <T extends Styles>(
  defaultStyles: T,
  lightStyles: T
) => {
  const theme = getColorScheme()

  return merge(defaultStyles, theme === "light" ? lightStyles : {})
}
