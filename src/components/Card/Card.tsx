import {ImageBackground, Text, TouchableOpacity} from "react-native"
import {LinearGradient} from "expo-linear-gradient"
import {View} from "@strongr/components/View/View"

// styles
import {cardStyles as styles} from "./styles"

// types
import type {ViewStyle} from "react-native"

interface Props {
  description?: string
  imageUrl?: string
  onPress?: () => void
  styles?: ViewStyle
  subtitle?: string
  title: string
}

export const Card = ({
  description,
  imageUrl,
  onPress,
  styles: customStyles = {},
  subtitle,
  title
}: Props) => {
  const gradientColors = ["rgba(17, 17, 18, 0)", "rgba(17, 17, 18, 0.6)"]
  const BackgroundComponent = (
    imageUrl ? ImageBackground : View
  ) as React.ComponentType<any> // eslint-disable-line @typescript-eslint/no-explicit-any

  return (
    <TouchableOpacity
      disabled={!onPress}
      style={[styles.container, customStyles]}
      onPress={onPress}
    >
      <BackgroundComponent
        resizeMode="cover"
        source={{uri: imageUrl}}
        style={[styles.imageBackground, styles.defaultWrapper]}
      >
        <LinearGradient colors={gradientColors} style={styles.imageBackground}>
          <View style={styles.content}>
            <Text style={styles.heading}>{title}</Text>
            {subtitle ? (
              <View style={styles.textContainer}>
                <View style={styles.textBorder} />
                <Text style={styles.text}>{subtitle}</Text>
              </View>
            ) : null}
            {description ? (
              <Text style={styles.description}>{description}</Text>
            ) : null}
          </View>
        </LinearGradient>
      </BackgroundComponent>
    </TouchableOpacity>
  )
}
