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
      initialRouteName={initialRouteName}
      screenOptions={{headerShown: false, presentation: "modal"}}
    >
      <Stack.Screen component={AuthNavigator} name={NAVIGATORS.AUTH} />
      <Stack.Screen component={TabNavigator} name={NAVIGATORS.TABS_NAVIGATOR} />
      <Stack.Screen
        component={ProfileNavigator}
        name={NAVIGATORS.PROFILE_NAVIGATOR}
      />
    </Stack.Navigator>
  )
}
