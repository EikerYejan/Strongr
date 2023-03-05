import {useMemo, useState} from "react"
import {Modal, Text, View} from "react-native"

// components
import {WorkoutCard} from "@strongr/components/WorkoutCard/WorkoutCard"

// fixgures
import {warmup} from "@strongr/fixtures/workouts"

// hooks
import {useStore} from "@strongr/store/store"

// styles
import {homeScreenStyles} from "./styles"
import {WorkoutModalContent} from "@strongr/components/WorkoutModalContent/WorkoutModalContent"

// types
import type {Workout} from "@strongr/types/workout"
import {SectionHeading} from "@strongr/components/SectionHeading/SectionHeading"

export const HomeScreen = () => {
  const [activeModalID, setActiveModalID] = useState<string>()

  const {userData} = useStore()
  const {name} = userData

  const modalWorkoutData = useMemo(() => {
    // search for Id here

    if (activeModalID) {
      return warmup
    }

    return null
  }, [activeModalID])

  const onWotkoutCardPress = (data: Workout) => {
    setActiveModalID(data.id)
  }

  const onModalClose = () => {
    setActiveModalID(undefined)
  }

  return (
    <View style={homeScreenStyles.container}>
      <Modal
        animationType="slide"
        presentationStyle="formSheet"
        visible={!!modalWorkoutData}
      >
        {modalWorkoutData ? (
          <WorkoutModalContent data={modalWorkoutData} onClose={onModalClose} />
        ) : null}
      </Modal>
      <View style={homeScreenStyles.anouncer}>
        <View style={homeScreenStyles.greetingWrapper}>
          <Text style={homeScreenStyles.greeting}>Hello,&nbsp;</Text>
          <Text style={homeScreenStyles.userName}>{name}</Text>
        </View>
        <Text style={homeScreenStyles.anouncerText}>Good morning.</Text>
      </View>
      <View>
        <SectionHeading heading="Today Workout Plan" rightText="Mon 26 Apr" />
        <WorkoutCard data={warmup} onPress={onWotkoutCardPress} />
      </View>
    </View>
  )
}
