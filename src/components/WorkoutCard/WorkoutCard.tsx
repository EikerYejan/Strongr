import {ImageBackground, Text, TouchableOpacity, View} from "react-native"
import {LinearGradient} from "expo-linear-gradient"

// styles
import {workoutCardStyles} from "./styles"

// types
import type {Workout} from "@strongr/types/workout"

interface Props {
  data: Workout
  onPress?: (data: Workout) => void
}

export const WorkoutCard = ({data, onPress}: Props) => {
  const {imageUrl, name, scheduledTime} = data

  const gradientColors = ["rgba(17, 17, 18, 0)", "rgba(17, 17, 18, 0.6)"]

  return (
    <TouchableOpacity
      onPress={() => {
        onPress?.(data)
      }}
      style={workoutCardStyles.container}
    >
      <ImageBackground
        resizeMode="cover"
        style={workoutCardStyles.imageBackground}
        source={{uri: imageUrl}}
      >
        <LinearGradient
          style={workoutCardStyles.imageBackground}
          colors={gradientColors}
        >
          <View style={workoutCardStyles.content}>
            <Text style={workoutCardStyles.heading}>{name}</Text>
            <View style={workoutCardStyles.textContainer}>
              <View style={workoutCardStyles.textBorder} />
              <Text style={workoutCardStyles.text}>{scheduledTime}</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}
