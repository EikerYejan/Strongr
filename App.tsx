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

// utils
import {getColorScheme, themedColor} from "@strongr/utils/theme"

const safeAreaViewStyles = {
  backgroundColor: themedColor(COLORS.DARK_1, COLORS.WHITE),
  height: "100%"
}

const queryClient = new QueryClient()

export default function App() {
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
}
