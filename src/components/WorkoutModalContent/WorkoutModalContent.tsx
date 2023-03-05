import {Image, Pressable, ScrollView, Text, View} from "react-native"

// components
import {Icon} from "@strongr/components/Icons/Icons"

// constants
import {COLORS} from "@strongr/constants/colors"

// styles
import {workoutModalContentStyles as styles} from "./styles"

// types
import type {Workout} from "@strongr/types/workout"
import {Button} from "../Button/Button"

interface Props {
  onClose: () => void
  data: Workout
}

export const WorkoutModalContent = ({data, onClose}: Props) => {
  const {description, imageUrl, name} = data

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.closeButton} onPress={onClose}>
        <Icon fill={COLORS.WHITE} name="ArrowLeft" />
      </Pressable>
      <Image style={styles.image} source={{uri: imageUrl}} />
      <View style={styles.contentContainer}>
        <ScrollView bounces={false} indicatorStyle="white">
          <Text style={styles.workoutName}>{name}</Text>
          <Text style={styles.workoutDescription}>{description}</Text>
        </ScrollView>
      </View>
      <View style={styles.workoutStartButtonWrapper}>
        <Button title="Start Workout" onPress={() => {}} />
      </View>
    </View>
  )
}
