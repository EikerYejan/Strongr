import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

// constants
import {COLORS} from "../constants/colors"
import {SCREEN_NAMES} from "../constants/screens"

// components
import {HomeScreen} from "../screens/HomeScreen/HomeScreen"
import {SettingsScreen} from "../screens/SettingsScreen/SettingsScreen"
import {StatsScreen} from "../screens/StatsScreen/StatsScreen"
import {TabNavigationButton} from "../components/TabNavigationButton/TabNavigationButton"

// types
import type {BottomTabNavigationOptions} from "@react-navigation/bottom-tabs"

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

export const RootNavigator = () => {
  return (
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
  )
}
