import {StyleSheet, Text, TouchableOpacity} from "react-native"

import {View} from "@strongr/components/View/View"

// constants
import {COLORS} from "@strongr/constants/colors"
import {FONTS} from "@strongr/constants/fonts"

interface Props {
  activeTab: string
  onTabPress: (tab: "login" | "signup") => void
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    left: 32,
    position: "absolute",
    top: 60,
    zIndex: 1
  },
  tabText: {
    fontFamily: FONTS.INTER_REGULAR,
    fontSize: 13,
    fontWeight: "400"
  }
})

export const AuthScreenTabs = ({activeTab, onTabPress}: Props) => {
  const getTabTextStyles = (tab: "login" | "signup") => {
    const isActive = tab === activeTab

    return {
      ...styles.tabText,
      color: isActive ? COLORS.WHITE : COLORS.SOFT,
      marginRight: tab === "login" ? 32 : 0
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          onTabPress("login")
        }}
      >
        <Text style={getTabTextStyles("login")}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onTabPress("signup")
        }}
      >
        <Text style={getTabTextStyles("signup")}>Sign up</Text>
      </TouchableOpacity>
    </View>
  )
}
