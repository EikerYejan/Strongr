import {ImageBackground, Text, TouchableOpacity, View} from "react-native"
import {LinearGradient} from "expo-linear-gradient"

// styles
import {cardStyles as styles} from "./styles"

interface Props {
  imageUrl?: string
  title: string
  subtitle?: string
  onPress?: () => void
}

export const Card = ({imageUrl, title, subtitle, onPress}: Props) => {
  const gradientColors = ["rgba(17, 17, 18, 0)", "rgba(17, 17, 18, 0.6)"]

  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress}
      style={styles.container}
    >
      <ImageBackground
        resizeMode="cover"
        style={styles.imageBackground}
        source={{uri: imageUrl}}
      >
        <LinearGradient style={styles.imageBackground} colors={gradientColors}>
          <View style={styles.content}>
            <Text style={styles.heading}>{title}</Text>
            {subtitle ? (
              <View style={styles.textContainer}>
                <View style={styles.textBorder} />
                <Text style={styles.text}>{subtitle}</Text>
              </View>
            ) : null}
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}
