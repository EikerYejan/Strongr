import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

// constants
import {COLORS} from "@strongr/constants/colors"
import {screensConfig, SCREEN_NAMES} from "@strongr/constants/screens"

// components
import {HomeScreen} from "@strongr/screens/HomeScreen/HomeScreen"
import {SettingsScreen} from "@strongr/screens/SettingsScreen/SettingsScreen"
// import {StatsScreen} from "@strongr/screens/StatsScreen/StatsScreen"
import {TabNavigationButton} from "@strongr/components/TabNavigationButton/TabNavigationButton"
import {ExercisesScreen} from "@strongr/screens/ExercisesScreen/ExercisesScreen"

// types
import type {BottomTabNavigationOptions} from "@react-navigation/bottom-tabs"
import type {$Values} from "@strongr/types/helpers"

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
        const screenConfig =
          screensConfig[route.name as $Values<typeof SCREEN_NAMES>]

        return {
          tabBarIcon: ({focused}) =>
            screenConfig?.iconName ? (
              <TabNavigationButton
                focused={focused}
                iconName={screenConfig.iconName}
              />
            ) : null
        }
      }}
    >
      <Tab.Screen
        name={SCREEN_NAMES.SETTINGS}
        component={SettingsScreen}
        options={defaultScreenOptions}
      />
      <Tab.Screen
        name={SCREEN_NAMES.HOME}
        component={HomeScreen}
        options={defaultScreenOptions}
      />
      <Tab.Screen
        name={SCREEN_NAMES.EXERCISES}
        component={ExercisesScreen}
        options={defaultScreenOptions}
      />
    </Tab.Navigator>
  )
}
