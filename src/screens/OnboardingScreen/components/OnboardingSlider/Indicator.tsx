import {Animated, Easing} from "react-native"

// styles
import {indicatorStyles as styles} from "./styles"
import {useEffect, useRef} from "react"

interface Props {
  isActive: boolean
  onPress?: () => void
}

export const Indicator = ({isActive, onPress}: Props) => {
  const width = useRef(new Animated.Value(16)).current

  useEffect(() => {
    const value = isActive ? 36 : 16

    Animated.timing(width, {
      easing: Easing.elastic(0.35),
      toValue: value,
      duration: 100,
      useNativeDriver: false
    }).start()
  }, [isActive]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Animated.Text
      style={[
        styles.indicator,
        isActive ? styles.indicatorActive : {},
        {width}
      ]}
      onPress={onPress}
    />
  )
}
