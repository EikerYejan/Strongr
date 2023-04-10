import {createStackNavigator} from "@react-navigation/stack"

// components
import {ProfileScreen} from "@strongr/screens/ProfileScreen/ProfileScreen"

// constants
import {SCREEN_NAMES} from "@strongr/constants/screens"
import {PrivacyPolicyScreen} from "@strongr/screens/PrivacyPolicyScreen/PrivacyPolicyScreen"

const Stack = createStackNavigator()

export const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: "",
        title: ""
      }}
    >
      <Stack.Screen name={SCREEN_NAMES.SETTINGS} component={ProfileScreen} />
      <Stack.Screen
        name={SCREEN_NAMES.PRIVACY}
        component={PrivacyPolicyScreen}
        options={{
          presentation: "modal",
          title: "Privacy Policy"
        }}
      />
    </Stack.Navigator>
  )
}
