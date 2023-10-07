import {Children, cloneElement} from "react"
import {Image, Pressable, ScrollView, Text, View} from "react-native"
import {LinearGradient} from "expo-linear-gradient"

// components
import {Icon} from "@strongr/components/Icons/Icons"
import {Button} from "@strongr/components/Button/Button"
import {SmallCard} from "@strongr/components/SmallCard/SmallCard"

// constants
import {COLORS} from "@strongr/constants/colors"

// styles
import {workoutModalContentStyles as styles} from "./styles"

// types
import type {ReactElement} from "react"
import type {ButtonProps} from "@strongr/components/Button/Button"

interface ModalCard {
  imageUrl: string
  subtitle: string
  title: string
}

export interface ModalData {
  cards?: ModalCard[]
  description: string | React.ReactNode[]
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

  const mapDescription = () => {
    if (typeof description === "string") return null

    return Children.map(description, (child) => {
      return cloneElement(child as ReactElement, {
        style: styles.workoutDescription
      })
    })
  }

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.closeButton} onPress={onClose}>
        <Icon fill={COLORS.WHITE} name="ArrowLeft" />
      </Pressable>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.contentContainer}>
        <ScrollView
          contentInset={{
            right: -10
          }}
          indicatorStyle="white"
          style={styles.scrollView}
        >
          <Text style={styles.workoutName}>{heading}</Text>
          {subHeading ? (
            <Text style={styles.workoutExcerpt}>{subHeading}</Text>
          ) : null}
          <View style={styles.workoutInfoWrapper}>
            {firstButtonProps ? (
              <Button style={styles.workoutInfoItem} {...firstButtonProps} />
            ) : null}
            {secondButtonProps ? <Button {...secondButtonProps} /> : null}
          </View>
          <View style={styles.workoutDescriptionWrapper}>
            <Text style={styles.workoutDescriptionTitle}>Instructions</Text>
            {typeof description === "string" ? (
              <Text style={styles.workoutDescription}>{description}</Text>
            ) : (
              mapDescription()
            )}
          </View>
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
          style={styles.workoutStartButton}
          title="Start Workout"
          onPress={() => {}}
        />
      </LinearGradient>
    </View>
  )
}
