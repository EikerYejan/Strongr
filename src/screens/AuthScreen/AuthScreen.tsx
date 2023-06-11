import {Animated, KeyboardAvoidingView, Platform, View} from "react-native"
import {useCallback, useEffect, useRef, useState} from "react"

// components
import {SignupForm} from "./components/SignupForm"
import {LoginForm} from "./components/LoginForm"
import {AuthScreenTabs} from "./components/Tabs"

// constants
import {NAVIGATORS} from "@strongr/constants/screens"

// types
import type {NavigationProp} from "@react-navigation/native"

// utils
import {useAppState} from "@strongr/store/store"

interface Props {
  navigation: NavigationProp<never> & {replace: (name: string) => void}
}

export const AuthScreen = ({navigation}: Props) => {
  const {appState, updateAppState} = useAppState()
  const {name, email} = appState.user

  const [activeTab, setActiveTab] = useState<"login" | "signup">(
    !email ? "signup" : "login"
  )

  const fadeAnim = useRef(new Animated.Value(0)).current

  const fadeIn = useCallback(
    (cb?: () => void) => {
      Animated.timing(fadeAnim, {
        duration: 250,
        toValue: 1,
        useNativeDriver: true
      }).start(cb)
    },
    [fadeAnim]
  )

  const fadeOut = useCallback(
    (cb?: () => void) => {
      Animated.timing(fadeAnim, {
        duration: 250,
        toValue: 0,
        useNativeDriver: true
      }).start(cb)
    },
    [fadeAnim]
  )

  const onTabChange = (tab: "login" | "signup") => {
    fadeOut(() => {
      setActiveTab(tab)
      fadeIn()
    })
  }

  const onSubmit = (payload?: Record<string, unknown>) => {
    updateAppState({hasAuth: true, user: payload ?? {}})
    navigation.replace(NAVIGATORS.TABS_NAVIGATOR)
  }

  useEffect(() => {
    fadeIn()
  }, [fadeIn])

  return (
    <View>
      <AuthScreenTabs activeTab={activeTab} onTabPress={onTabChange} />
      <Animated.View style={{opacity: fadeAnim}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {activeTab === "login" ? (
            <LoginForm userName={name} onSubmit={onSubmit} />
          ) : (
            <SignupForm onSubmit={onSubmit} />
          )}
        </KeyboardAvoidingView>
      </Animated.View>
    </View>
  )
}
