import {Indicator} from "./Indicator"
import {View} from "@strongr/components/View/View"

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
          <Indicator
            isActive={isActive}
            key={index}
            onPress={() => {
              onItemPress(index)
            }}
          />
        )
      })}
    </View>
  )
}
