import "expo-dev-client"

import {SafeAreaView, StatusBar, View} from "react-native"

// components
import {TabNavigationButton} from "./src/components/TabNavigationButton/TabNavigationButton"

// constants
import {COLORS} from "./src/constants/colors"
import {SCREEN_NAMES} from "./src/constants/screens"

// navigation
import {NavigationContainer} from "@react-navigation/native"
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator
} from "@react-navigation/bottom-tabs"

// screens
import {SplashScreen} from "./src/screens/SplashScreen/SplashScreen"
import {HomeScreen} from "./src/screens/HomeScreen/HomeScreen"
import {StatsScreen} from "./src/screens/StatsScreen/StatsScreen"
import {SettingsScreen} from "./src/screens/SettingsScreen/SettingsScreen"

const Tab = createBottomTabNavigator()

const defaultScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabel: () => null,
  tabBarStyle: {
    alignItems: "center",
    backgroundColor: COLORS.DARK_1,
    borderColor: COLORS.TRANSPARENT,
    height: 70,
    justifyContent: "center"
  }
}

const safeAreaViewStyles = {
  backgroundColor: COLORS.DARK_1,
  height: "100%"
}

const navigationTheme = {
  dark: true,
  colors: {
    background: COLORS.DARK_1,
    border: COLORS.TRANSPARENT,
    primary: COLORS.PRIMARY
  } as any
}

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={safeAreaViewStyles}>
        <Tab.Navigator
          screenOptions={({route}) => {
            return {
              tabBarIcon: ({focused}) => (
                <TabNavigationButton focused={focused} iconName={route.name} />
              )
            }
          }}
        >
          <Tab.Screen
            name={SCREEN_NAMES.HOME}
            component={HomeScreen}
            options={defaultScreenOptions}
          />
          <Tab.Screen
            name={SCREEN_NAMES.STATS}
            component={StatsScreen}
            options={defaultScreenOptions}
          />
          <Tab.Screen
            name={SCREEN_NAMES.SETTINGS}
            component={SettingsScreen}
            options={defaultScreenOptions}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}
