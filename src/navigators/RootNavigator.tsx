import {createStackNavigator} from "@react-navigation/stack"

// components
import {TabNavigator} from "./TabNavigator"
import {SettingsNavigator} from "./SettingsNavigator"

// constants
import {NAVIGATORS} from "@strongr/constants/screens"

const Stack = createStackNavigator()

export const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={NAVIGATORS.TABS_NAVIGATOR} component={TabNavigator} />
      <Stack.Screen
        name={NAVIGATORS.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
      />
    </Stack.Navigator>
  )
}
