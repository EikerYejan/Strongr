import {Dimensions, Image, Text} from "react-native"
import {useRef, useState} from "react"
import {GestureHandlerRootView} from "react-native-gesture-handler"

// components
import Carousel from "react-native-reanimated-carousel"
import {Button} from "@strongr/components/Button/Button"
import {View} from "@strongr/components/View/View"

// styles
import {styles} from "./styles"
import {Indicators} from "./Indicators"

// types
import type {ICarouselInstance} from "react-native-reanimated-carousel"

interface Props {
  onGetStartedPress: () => void
}

interface Slide {
  imageUrl: string
  subtitle: string
  title: string
}

const slides: Slide[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    subtitle: "start your journey",
    title: "Meet your coach,"
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1616279968959-30b0738951e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    subtitle: "to stay fit",
    title: "Create a workout plan"
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1613845205719-8c87760ab728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    subtitle: "key to all success",
    title: "Action is the"
  }
]

export const OnboardingSlider = ({onGetStartedPress}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const carousel = useRef<ICarouselInstance>(null)

  const {width} = Dimensions.get("screen")

  const onIndicatorPress = (index: number) => {
    carousel?.current?.scrollTo({index})
    setActiveIndex(index)
  }

  const renderSlide = ({item, index}: {item: Slide; index: number}) => {
    const {imageUrl, subtitle, title} = item

    return (
      <View style={styles.slide}>
        <Image source={{uri: imageUrl}} style={styles.slideImage} />
        <View style={styles.contentContainer}>
          <Text style={styles.slideTitle}>
            {title}
            {"\n"}
            <Text style={styles.slideSubTitle}>{subtitle}</Text>
          </Text>
          <View style={styles.contentBackground} />
          {index === slides.length - 1 && (
            <Button
              rightIconName="ArrowRight"
              style={styles.slideButton}
              title="Start Now"
              onPress={onGetStartedPress}
            />
          )}
        </View>
      </View>
    )
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Carousel<Slide>
        snapEnabled
        data={slides}
        loop={false}
        mode="horizontal-stack"
        modeConfig={{
          snapDirection: "left",
          stackInterval: 20,
          moveSize: width + 200
        }}
        ref={carousel}
        renderItem={renderSlide}
        width={width}
        onScrollEnd={setActiveIndex}
      />
      <Indicators
        activeIndex={activeIndex}
        count={slides.length}
        screenWidth={width}
        onItemPress={onIndicatorPress}
      />
    </GestureHandlerRootView>
  )
}
