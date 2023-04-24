import {createStackNavigator} from "@react-navigation/stack"

// components
import {TabNavigator} from "./TabNavigator"
import {ProfileNavigator} from "./ProfileNavigator"
import {AuthNavigator} from "./AuthNavigator"

// constants
import {NAVIGATORS} from "@strongr/constants/screens"

// utils
import {useAppState} from "@strongr/store/store"

const Stack = createStackNavigator()

export const RootNavigator = () => {
  const {
    appState: {hasAuth}
  } = useAppState()
  const initialRouteName = hasAuth ? NAVIGATORS.TABS_NAVIGATOR : NAVIGATORS.AUTH

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, presentation: "modal"}}
      initialRouteName={initialRouteName}
    >
      <Stack.Screen name={NAVIGATORS.AUTH} component={AuthNavigator} />
      <Stack.Screen name={NAVIGATORS.TABS_NAVIGATOR} component={TabNavigator} />
      <Stack.Screen
        name={NAVIGATORS.PROFILE_NAVIGATOR}
        component={ProfileNavigator}
      />
    </Stack.Navigator>
  )
}
