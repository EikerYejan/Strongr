import "expo-dev-client"

import {SafeAreaView, StatusBar} from "react-native"

// constants
import {COLORS} from "./src/constants/colors"

// navigation
import {RootNavigator} from "./src/navigators/RootNavigator"
import {NavigationContainer} from "@react-navigation/native"

// screens
import {SplashScreen} from "./src/screens/SplashScreen/SplashScreen"

// types
import type {Theme} from "@react-navigation/native"

const safeAreaViewStyles = {
  backgroundColor: COLORS.DARK_1,
  height: "100%"
}

const navigationTheme: Theme = {
  colors: {
    background: COLORS.DARK_1,
    border: COLORS.TRANSPARENT,
    card: COLORS.DARK_1,
    notification: COLORS.PRIMARY,
    primary: COLORS.PRIMARY,
    text: COLORS.WHITE
  },
  dark: true
}

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={safeAreaViewStyles}>
        <SplashScreen>
          <RootNavigator />
        </SplashScreen>
      </SafeAreaView>
    </NavigationContainer>
  )
}
