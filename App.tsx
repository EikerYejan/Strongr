import "expo-dev-client"
import "react-native-gesture-handler"

import {SafeAreaView, StatusBar} from "react-native"
import {QueryClient, QueryClientProvider} from "react-query"
import {RecoilRoot} from "recoil"

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

const queryClient = new QueryClient()

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={safeAreaViewStyles}>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <SplashScreen>
              <RootNavigator />
            </SplashScreen>
          </RecoilRoot>
        </QueryClientProvider>
      </SafeAreaView>
    </NavigationContainer>
  )
}
