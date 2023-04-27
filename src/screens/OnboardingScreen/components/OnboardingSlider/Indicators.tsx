import {View} from "react-native"
import Animated from "react-native-reanimated"

import {indicatorStyles as styles} from "./styles"

interface Props {
  activeIndex: number
  count: number
  onItemPress: (index: number) => void
  screenWidth: number
}

export const Indicators = ({
  activeIndex,
  count,
  onItemPress,
  screenWidth
}: Props) => {
  const width = count * 3 + 36 + count * 20

  return (
    <View
      style={[styles.containter, {width, left: screenWidth / 2 - width / 2}]}
    >
      {Array.from({length: count}).map((_, index) => {
        const isActive = index === activeIndex

        return (
          <Animated.Text
            onPress={() => {
              onItemPress(index)
            }}
            style={[styles.indicator, isActive ? styles.indicatorActive : {}]}
            key={index}
          />
        )
      })}
    </View>
  )
}
