import {StyleSheet} from "react-native"

import {View} from "@strongr/components/View/View"

interface Props {
  children: React.ReactNode
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
    height: "100%"
  },
  content: {
    position: "relative",
    height: "100%"
  }
})

export const ScreenWrapper = ({children}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
    </View>
  )
}
