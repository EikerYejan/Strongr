import {StyleSheet, View} from "react-native"

interface Props {
  children: React.ReactNode
}

const styles = StyleSheet.create({
  container: {
    padding: 32
  },
  content: {}
})

export const ScreenWrapper = ({children}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
    </View>
  )
}
