import {Pressable, Text, View} from "react-native"

// styles
import {sectionHeadingStyles as styles} from "./styles"

interface Props {
  heading: string
  onRightTextPress?: () => void
  rightText?: string
}

export const SectionHeading = ({
  heading,
  onRightTextPress,
  rightText
}: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>{heading}</Text>
      {rightText ? (
        <Pressable onPress={onRightTextPress}>
          <Text style={styles.rightText}>{rightText}</Text>
        </Pressable>
      ) : null}
    </View>
  )
}
