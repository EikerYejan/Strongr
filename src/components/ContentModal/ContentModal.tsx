import {
  Image,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View
} from "react-native"
import {LinearGradient} from "expo-linear-gradient"
import Html from "react-native-render-html"

// components
import {Icon} from "@strongr/components/Icons/Icons"
import {Button} from "@strongr/components/Button/Button"
import {SmallCard} from "@strongr/components/SmallCard/SmallCard"

// constants
import {COLORS} from "@strongr/constants/colors"

// styles
import {workoutModalContentStyles as styles} from "./styles"

// types
import type {ButtonProps} from "@strongr/components/Button/Button"

interface ModalCard {
  imageUrl: string
  subtitle: string
  title: string
}

export interface ModalData {
  cards?: ModalCard[]
  description: string
  firstButtonProps?: ButtonProps
  heading: string
  imageUrl: string
  secondButtonProps?: ButtonProps
  subHeading?: string
}

interface Props {
  onClose: () => void
  data: ModalData
}

export const ContentModal = ({data, onClose}: Props) => {
  const {
    cards = [],
    description,
    firstButtonProps,
    heading,
    imageUrl,
    secondButtonProps,
    subHeading
  } = data

  const {width} = useWindowDimensions()

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.closeButton} onPress={onClose}>
        <Icon fill={COLORS.WHITE} name="ArrowLeft" />
      </Pressable>
      <Image style={styles.image} source={{uri: imageUrl}} />
      <View style={styles.contentContainer}>
        <ScrollView
          contentInset={{
            right: -10
          }}
          style={styles.scrollView}
          indicatorStyle="white"
        >
          <Text style={styles.workoutName}>{heading}</Text>
          <Text style={styles.workoutExcerpt}>{subHeading}</Text>
          <View style={styles.workoutInfoWrapper}>
            {firstButtonProps ? (
              <Button style={styles.workoutInfoItem} {...firstButtonProps} />
            ) : null}
            {secondButtonProps ? <Button {...secondButtonProps} /> : null}
          </View>
          <Html
            baseStyle={styles.workoutDescription}
            contentWidth={width}
            source={{html: description}}
          />
          <View style={styles.workoutStepsWrapper}>
            {cards.map((card, i) => (
              <View key={`${card.title}-${i}`} style={styles.workoutStepItem}>
                <SmallCard {...card} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <LinearGradient
        colors={["rgba(17, 17, 18, 0)", "rgba(17, 17, 18, 1)"]}
        style={styles.workoutStartButtonWrapper}
      >
        <Button
          title="Start Workout"
          onPress={() => {}}
          style={styles.workoutStartButton}
        />
      </LinearGradient>
    </View>
  )
}
