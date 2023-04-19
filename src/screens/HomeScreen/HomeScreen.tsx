import {useMemo, useState} from "react"
import {Modal, Text, View} from "react-native"

// components
import {Card} from "@strongr/components/Card/Card"
import {SectionHeading} from "@strongr/components/SectionHeading/SectionHeading"

// fixgures
import {warmup} from "@strongr/fixtures/workouts"

// hooks
import {useAppState} from "@strongr/store/store"

// styles
import {homeScreenStyles} from "./styles"
import {ContentModal} from "@strongr/components/ContentModal/ContentModal"

// types
import type {ModalData} from "@strongr/components/ContentModal/ContentModal"

export const HomeScreen = () => {
  const [activeModalID, setActiveModalID] = useState<string>()

  const {
    appState: {user}
  } = useAppState()
  const {name: userName} = user

  const modalWorkoutData = useMemo<ModalData | null>(() => {
    // search for Id here

    if (activeModalID) {
      const {caloriesBurned, description, excerpt, imageUrl, name, steps} =
        warmup

      return {
        description,
        heading: name,
        imageUrl,
        subHeading: excerpt,
        firstButtonProps: {
          disabled: true,
          leftIconName: "Flame",
          size: "small",
          title: `${caloriesBurned} cal`,
          type: "dark"
        },
        secondButtonProps: {
          disabled: true,
          leftIconName: "Play",
          size: "small",
          title: "30 min",
          type: "dark"
        },
        cards: steps.map((step) => ({
          imageUrl: step.imageUrl,
          title: step.title,
          subtitle: `0:${step.durationSeconds}`
        }))
      }
    }

    return null
  }, [activeModalID])

  const onWotkoutCardPress = () => {
    setActiveModalID(warmup.id)
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
          <ContentModal data={modalWorkoutData} onClose={onModalClose} />
        ) : null}
      </Modal>
      <View style={homeScreenStyles.anouncer}>
        <View style={homeScreenStyles.greetingWrapper}>
          <Text style={homeScreenStyles.greeting}>Hello,&nbsp;</Text>
          <Text style={homeScreenStyles.userName}>{userName}</Text>
        </View>
        <Text style={homeScreenStyles.anouncerText}>Good morning.</Text>
      </View>
      <View>
        <SectionHeading heading="Today Workout Plan" rightText="Mon 26 Apr" />
        <Card
          title={warmup.name}
          subtitle={warmup.scheduledTime}
          imageUrl={warmup.imageUrl}
          onPress={onWotkoutCardPress}
        />
      </View>
    </View>
  )
}
