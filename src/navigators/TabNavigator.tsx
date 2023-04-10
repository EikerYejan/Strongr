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

interface Props {
  navigation: NavigationProp<Record<string, unknown>>
}

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
        name={SCREEN_NAMES.HOME}
        component={HomeScreen}
        options={defaultScreenOptions}
      />
      <Tab.Screen
        name={SCREEN_NAMES.EXERCISES}
        component={ExercisesScreen}
        options={defaultScreenOptions}
      />
      <Tab.Screen
        name={SCREEN_NAMES.SETTINGS}
        component={MockComponent}
        options={defaultScreenOptions}
        listeners={{
          tabPress: (e) => {
            e.preventDefault()
            navigation.navigate(NAVIGATORS.PROFILE_NAVIGATOR, {
              screen: SCREEN_NAMES.PROFILE
            })
          }
        }}
      />
    </Tab.Navigator>
  )
}
