import "expo-dev-client"
import "react-native-gesture-handler"

import {SafeAreaView, StatusBar} from "react-native"
import {QueryClient, QueryClientProvider} from "react-query"
import {RecoilRoot} from "recoil"
import * as Sentry from "@sentry/react-native"

// constants
import {COLORS} from "./src/constants/colors"

// navigation
import {RootNavigator} from "./src/navigators/RootNavigator"
import {NavigationContainer} from "@react-navigation/native"

// screens
import {SplashScreen} from "./src/screens/SplashScreen/SplashScreen"

// types
import type {ViewStyle} from "react-native"

// utils
import {getColorScheme, themedColor} from "@strongr/utils/theme"

Sentry.init({
  dsn: "https://83247282af94d8e7e1bdc67f8c06c494@o983732.ingest.sentry.io/4506011394572288",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0
})

const safeAreaViewStyles: ViewStyle = {
  backgroundColor: themedColor(COLORS.DARK_1, COLORS.WHITE),
  height: "100%"
}

const queryClient = new QueryClient()

export default Sentry.wrap(() => {
  const appearance = getColorScheme()

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: themedColor(COLORS.DARK_1, COLORS.WHITE),
          border: COLORS.TRANSPARENT,
          card: COLORS.DARK_3,
          notification: COLORS.PRIMARY,
          primary: COLORS.PRIMARY,
          text: COLORS.WHITE
        },
        dark: appearance === "dark"
      }}
    >
      <StatusBar
        barStyle={appearance === "light" ? "dark-content" : "light-content"}
      />
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
})
