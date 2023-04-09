import {createStackNavigator} from "@react-navigation/stack"

// components
import {SettingsScreen} from "@strongr/screens/SettingsScreen/SettingsScreen"

// constants
import {SCREEN_NAMES} from "@strongr/constants/screens"

const Stack = createStackNavigator()

export const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: "",
        title: ""
      }}
    >
      <Stack.Screen name={SCREEN_NAMES.SETTINGS} component={SettingsScreen} />
    </Stack.Navigator>
  )
}
