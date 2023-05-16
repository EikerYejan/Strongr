import {ActivityIndicator, Text, View} from "react-native"
import {useState, useCallback} from "react"
import {useFonts} from "expo-font"
import * as SplashScreenApi from "expo-splash-screen"

// components
import {OnboardingScreen} from "../OnboardingScreen/OnboardingScreen"

// constants
import {COLORS} from "@strongr/constants/colors"

// styles
import {splashScreenStyles} from "./styles"

// utils
import {Storage} from "@strongr/store/storage"
import {useAppState} from "@strongr/store/store"

interface Props {
  children: JSX.Element
}

void SplashScreenApi.preventAutoHideAsync()

export const SplashScreen = ({children}: Props) => {
  const [canRender, setCanRender] = useState(false)

  const {
    appState: {onboardingCompleted}
  } = useAppState()

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("../../../assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("../../../assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-ExtraLight": require("../../../assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("../../../assets/fonts/Inter-Light.ttf"),
    "Inter-Medium": require("../../../assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("../../../assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("../../../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Thin": require("../../../assets/fonts/Inter-Thin.ttf")
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreenApi.hideAsync()

      Storage.init()

      setTimeout(() => {
        setCanRender(true)
      }, 1500)
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  if (canRender) {
    if (!onboardingCompleted) {
      return <OnboardingScreen />
    }

    return children
  }

  return (
    <View onLayout={onLayoutRootView}>
      <View style={splashScreenStyles.wrapper}>
        <Text style={splashScreenStyles.heading}>strongr</Text>
        <ActivityIndicator
          color={COLORS.WHITE}
          size="large"
          style={splashScreenStyles.loader}
        />
      </View>
    </View>
  )
}
