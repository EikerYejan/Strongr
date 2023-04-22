import {createStackNavigator} from "@react-navigation/stack"

// components
import {ProfileScreen} from "@strongr/screens/ProfileScreen/ProfileScreen"
import {PrivacyPolicyScreen} from "@strongr/screens/PrivacyPolicyScreen/PrivacyPolicyScreen"
import {SettingsScreen} from "@strongr/screens/SettingsScreen/SettingsScreen"
import {SettingsContent} from "@strongr/components/SettingsContent/SettingsContent"
import {EditProfileScreen} from "@strongr/screens/EditProfileScreen/EditProfileScreen"

// constants
import {SCREEN_NAMES} from "@strongr/constants/screens"

// types
import type {SettingsContentType} from "@strongr/constants/screens"

const Stack = createStackNavigator<{
  [SCREEN_NAMES.EDIT_PROFILE]: never
  [SCREEN_NAMES.PROFILE]: never
  [SCREEN_NAMES.PRIVACY]: never
  [SCREEN_NAMES.SETTINGS]: never
  [SCREEN_NAMES.SETTINGS_CONTENT]: {
    contentType: SettingsContentType
  }
}>()

export const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: "",
        presentation: "modal",
        title: ""
      }}
    >
      <Stack.Screen name={SCREEN_NAMES.PROFILE} component={ProfileScreen} />
      <Stack.Screen
        name={SCREEN_NAMES.PRIVACY}
        component={PrivacyPolicyScreen}
        options={{
          title: "Privacy Policy"
        }}
      />
      <Stack.Screen
        name={SCREEN_NAMES.SETTINGS}
        component={SettingsScreen}
        options={{title: "Settings"}}
      />
      <Stack.Screen
        name={SCREEN_NAMES.SETTINGS_CONTENT}
        options={({route}) => ({title: route.params.contentType})}
      >
        {({route}) => (
          <SettingsContent contentType={route.params?.contentType} />
        )}
      </Stack.Screen>
      <Stack.Screen
        component={EditProfileScreen}
        name={SCREEN_NAMES.EDIT_PROFILE}
      />
    </Stack.Navigator>
  )
}
