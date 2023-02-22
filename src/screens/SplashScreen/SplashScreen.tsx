import { Text, View, SafeAreaView } from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreenApi from "expo-splash-screen";
import { splashScreenStyles } from "./styles";

SplashScreenApi.preventAutoHideAsync();

export const SplashScreen = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../../assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("../../../assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("../../../assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-ExtraLight": require("../../../assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("../../../assets/fonts/Inter-Light.ttf"),
    "Inter-Medium": require("../../../assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("../../../assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("../../../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Thin": require("../../../assets/fonts/Inter-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreenApi.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={splashScreenStyles.safeAreaView}
      onLayout={onLayoutRootView}
    >
      <View style={splashScreenStyles.wrapper}>
        <Text style={splashScreenStyles.heading}>SPLASH SCREEN</Text>
      </View>
    </SafeAreaView>
  );
};
