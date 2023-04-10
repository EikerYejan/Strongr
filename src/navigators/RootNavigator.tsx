import {createStackNavigator} from "@react-navigation/stack"

// components
import {TabNavigator} from "./TabNavigator"
import {ProfileNavigator} from "./ProfileNavigator"

// constants
import {NAVIGATORS} from "@strongr/constants/screens"

const Stack = createStackNavigator()

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, presentation: "modal"}}
    >
      <Stack.Screen name={NAVIGATORS.TABS_NAVIGATOR} component={TabNavigator} />
      <Stack.Screen
        name={NAVIGATORS.PROFILE_NAVIGATOR}
        component={ProfileNavigator}
      />
    </Stack.Navigator>
  )
}
