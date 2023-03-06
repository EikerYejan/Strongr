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
import type {Workout} from "@strongr/types/workout"

interface Props {
  onClose: () => void
  data: Workout
}

export const WorkoutModalContent = ({data, onClose}: Props) => {
  const {
    caloriesBurned,
    description,
    durationMinutes,
    excerpt,
    imageUrl,
    name,
    steps
  } = data

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
          <Text style={styles.workoutName}>{name}</Text>
          <Text style={styles.workoutExcerpt}>{excerpt}</Text>
          <View style={styles.workoutInfoWrapper}>
            <Button
              disabled
              leftIconName="Play"
              style={styles.workoutInfoItem}
              size="small"
              title={`${durationMinutes} min`}
              type="dark"
            />
            <Button
              disabled
              leftIconName="Flame"
              size="small"
              title={`${caloriesBurned} cal`}
              type="dark"
            />
          </View>
          <Text style={styles.workoutDescription}>{description}</Text>
          <View style={styles.workoutStepsWrapper}>
            {steps.map((item) => {
              const {durationSeconds, id, imageUrl: workoutImage, title} = item

              return (
                <View key={id} style={styles.workoutStepItem}>
                  <SmallCard
                    imageUrl={workoutImage}
                    subtitle={`0:${durationSeconds}`}
                    title={title}
                  />
                </View>
              )
            })}
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
