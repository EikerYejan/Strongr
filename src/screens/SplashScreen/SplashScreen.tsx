import {Text, View} from "react-native"
import {useState, useCallback} from "react"

// utils
import {useFonts} from "expo-font"
import * as SplashScreenApi from "expo-splash-screen"

// store
import {Storage} from "@strongr/store/storage"

// styles
import {splashScreenStyles} from "./styles"

interface Props {
  children: JSX.Element
}

void SplashScreenApi.preventAutoHideAsync()

export const SplashScreen = ({children}: Props) => {
  const [canRender, setCanRender] = useState(false)

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

      // TODO: move this to the onboarding screen
      Storage.init()

      setCanRender(true)
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  if (canRender) {
    return children
  }

  return (
    <View onLayout={onLayoutRootView}>
      <View style={splashScreenStyles.wrapper}>
        <Text style={splashScreenStyles.heading}>strongr</Text>
      </View>
    </View>
  )
}
