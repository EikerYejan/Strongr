import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

// constants
import {COLORS} from "@strongr/constants/colors"
import {
  NAVIGATORS,
  screensConfig,
  SCREEN_NAMES
} from "@strongr/constants/screens"

// components
import {HomeScreen} from "@strongr/screens/HomeScreen/HomeScreen"
import {TabNavigationButton} from "@strongr/components/TabNavigationButton/TabNavigationButton"
import {ExercisesScreen} from "@strongr/screens/ExercisesScreen/ExercisesScreen"

// types
import type {BottomTabNavigationOptions} from "@react-navigation/bottom-tabs"
import type {NavigationProp} from "@react-navigation/native"

// utils
import {themedColor} from "@strongr/utils/theme"

interface Props {
  navigation: NavigationProp<Record<string, unknown>>
}

const Tab = createBottomTabNavigator()

const defaultScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabel: () => null,
  tabBarStyle: {
    alignItems: "center",
    backgroundColor: themedColor(COLORS.DARK_1, COLORS.WHITE),
    borderColor: COLORS.TRANSPARENT,
    height: 70,
    justifyContent: "center"
  }
}

const MockComponent = () => null

export const TabNavigator = ({navigation}: Props) => {
  return (
    <Tab.Navigator
      initialRouteName={SCREEN_NAMES.HOME}
      screenOptions={({route}) => {
        const screenConfig =
          screensConfig[route.name as keyof typeof screensConfig]

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
        component={HomeScreen}
        name={SCREEN_NAMES.HOME}
        options={defaultScreenOptions}
      />
      <Tab.Screen
        component={ExercisesScreen}
        name={SCREEN_NAMES.EXERCISES}
        options={defaultScreenOptions}
      />
      <Tab.Screen
        component={MockComponent}
        listeners={{
          tabPress: (e) => {
            e.preventDefault()
            navigation.navigate(NAVIGATORS.PROFILE_NAVIGATOR, {
              screen: SCREEN_NAMES.PROFILE
            })
          }
        }}
        name={SCREEN_NAMES.SETTINGS}
        options={defaultScreenOptions}
      />
    </Tab.Navigator>
  )
}
