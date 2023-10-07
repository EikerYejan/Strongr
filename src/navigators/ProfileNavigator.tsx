import {createStackNavigator} from "@react-navigation/stack"

// components
import {ProfileScreen} from "@strongr/screens/ProfileScreen/ProfileScreen"
import {PrivacyPolicyScreen} from "@strongr/screens/PrivacyPolicyScreen/PrivacyPolicyScreen"
import {SettingsScreen} from "@strongr/screens/SettingsScreen/SettingsScreen"
import {SettingsContent} from "@strongr/components/SettingsContent/SettingsContent"
import {EditProfileScreen} from "@strongr/screens/EditProfileScreen/EditProfileScreen"
import {BackButton} from "@strongr/components/BackButton/BackButton"

// constants
import {SCREEN_NAMES} from "@strongr/constants/screens"

// types
import type {SettingsContentType} from "@strongr/constants/screens"
import {COLORS} from "@strongr/constants/colors"
import {themedColor, themedProp} from "@strongr/utils/theme"
import {MeasurementsScreen} from "@strongr/screens/MeasurementsScreen/MeasurementsScreen"

const Stack = createStackNavigator<{
  [SCREEN_NAMES.EDIT_PROFILE]: never
  [SCREEN_NAMES.PROFILE]: never
  [SCREEN_NAMES.PRIVACY]: never
  [SCREEN_NAMES.SETTINGS]: never
  [SCREEN_NAMES.SETTINGS_CONTENT]: {
    contentType: SettingsContentType
  }
  [SCREEN_NAMES.MEASUREMENTS]: never
}>()

export const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: "",
        headerLeft: (props) => (
          <BackButton {...props} arrowDirection="left" height={32} width={32} />
        ),
        headerLeftContainerStyle: {
          paddingLeft: 32 as const,
          paddingTop: themedProp(32, 2)
        },
        headerStyle: {
          backgroundColor: themedColor(COLORS.DARK_1, COLORS.PRIMARY)
        },
        headerTitleStyle: {
          color: COLORS.WHITE,
          marginLeft: "auto",
          marginRight: 40
        },
        presentation: "modal",
        title: ""
      }}
    >
      <Stack.Screen component={ProfileScreen} name={SCREEN_NAMES.PROFILE} />
      <Stack.Screen
        component={PrivacyPolicyScreen}
        name={SCREEN_NAMES.PRIVACY}
        options={{
          title: "Privacy Policy"
        }}
      />
      <Stack.Screen
        component={SettingsScreen}
        name={SCREEN_NAMES.SETTINGS}
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
      <Stack.Screen
        component={MeasurementsScreen}
        name={SCREEN_NAMES.MEASUREMENTS}
        options={{
          title: "Your Measurements"
        }}
      />
    </Stack.Navigator>
  )
}
