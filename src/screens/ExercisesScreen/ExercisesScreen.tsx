import {useState} from "react"
import {ActivityIndicator, FlatList, Modal, Text, View} from "react-native"
import {useQuery, useQueryClient} from "react-query"

// components
import {ContentModal} from "@strongr/components/ContentModal/ContentModal"
import {Card} from "@strongr/components/Card/Card"

// styles
import {exercisesScreenStyles as styles} from "./styles"

// types
import type {ListRenderItemInfo} from "react-native"
import type {Exercise} from "@strongr/types/exercises"
import type {ModalData} from "@strongr/components/ContentModal/ContentModal"

// utils
import {fetchExercises} from "@strongr/services/Api/exercises"
import {Button} from "@strongr/components/Button/Button"

const transformDescription = (description: string) => {
  return description
    .split("||")
    .map((text, i) => <Text key={i}>{`${i}. ${text}`}</Text>)
}

export const ExercisesScreen = () => {
  const [modalData, setModalData] = useState<ModalData>()

  const queryClient = useQueryClient()
  const {
    data: exercises = [],
    isLoading,
    error
  } = useQuery("exercises", fetchExercises)

  const refetch = async () => queryClient.invalidateQueries("exercises")

  const onItemPress = (item: Exercise) => {
    const description = transformDescription(item.instructions)

    setModalData({
      heading: item.name,
      description,
      imageUrl:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80",
      firstButtonProps: {
        disabled: true,
        leftIconName: "Barbell",
        size: "small",
        title: item.category,
        type: "dark"
      }
    })
  }

  const onModalClose = () => {
    setModalData(undefined)
  }

  const renderItem = ({item}: ListRenderItemInfo<Exercise>) => {
    const onPress = () => {
      onItemPress(item)
    }

    return (
      <View style={styles.cardContainer}>
        <Card
          onPress={onPress}
          styles={styles.card}
          title={item.name}
          subtitle={item.category}
        />
      </View>
    )
  }

  const renderContent = () => {
    if (isLoading && !error) {
      return (
        <ActivityIndicator style={styles.loader} size="large" color="white" />
      )
    }

    if (error) {
      return (
        <Button
          onPress={refetch}
          title="There's been an error, please retry"
          size="small"
          type="dark"
        />
      )
    }

    return (
      <View>
        <FlatList
          data={exercises}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Exercises</Text>
      <Modal
        animationType="slide"
        presentationStyle="formSheet"
        visible={!!modalData}
      >
        {modalData ? (
          <ContentModal onClose={onModalClose} data={modalData} />
        ) : null}
      </Modal>
      {renderContent()}
    </View>
  )
}
