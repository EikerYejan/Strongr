import {createStackNavigator} from "@react-navigation/stack"

// components
import {AuthScreen} from "@strongr/screens/AuthScreen/AuthScreen"

// constants
import {SCREEN_NAMES} from "@strongr/constants/screens"

const Stack = createStackNavigator()

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, presentation: "modal"}}
    >
      <Stack.Screen component={AuthScreen} name={SCREEN_NAMES.AUTH} />
    </Stack.Navigator>
  )
}
