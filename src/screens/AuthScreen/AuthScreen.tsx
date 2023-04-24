import {Animated, View} from "react-native"
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
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login")

  const {appState, updateAppState} = useAppState()
  const {name} = appState.user

  const fadeAnim = useRef(new Animated.Value(0)).current

  const fadeIn = useCallback(
    (cb?: () => void) => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true
      }).start(cb)
    },
    [fadeAnim]
  )

  const fadeOut = useCallback(
    (cb?: () => void) => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 250,
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

  const onSubmit = () => {
    updateAppState({hasAuth: true})
    navigation.replace(NAVIGATORS.TABS_NAVIGATOR)
  }

  useEffect(() => {
    fadeIn()
  }, [fadeIn])

  return (
    <View>
      <AuthScreenTabs activeTab={activeTab} onTabPress={onTabChange} />
      <Animated.View style={{opacity: fadeAnim}}>
        {activeTab === "login" ? (
          <LoginForm userName={name} onSubmit={onSubmit} />
        ) : (
          <SignupForm onSubmit={onSubmit} />
        )}
      </Animated.View>
    </View>
  )
}
