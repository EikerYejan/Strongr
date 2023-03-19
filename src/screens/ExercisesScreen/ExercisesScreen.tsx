import {useState} from "react"
import {ActivityIndicator, FlatList, Modal, Text, View} from "react-native"
import {useQuery} from "react-query"

// components
import {ContentModal} from "@strongr/components/ContentModal/ContentModal"
import {Card} from "@strongr/components/Card/Card"
import {Button} from "@strongr/components/Button/Button"
import {SearchInput} from "@strongr/components/SearchInput/SearchInput"

// hooks
import {useDebounce} from "@strongr/hooks/useDebounce"

// styles
import {exercisesScreenStyles as styles} from "./styles"

// types
import type {ListRenderItemInfo} from "react-native"
import type {Exercise} from "@strongr/types/exercises"
import type {ModalData} from "@strongr/components/ContentModal/ContentModal"

// utils
import {
  buildExerciseImageURL,
  fetchExercises
} from "@strongr/services/Api/exercises"

const transformDescription = (description: string) => {
  return description
    ?.split("||")
    ?.map((text, i) => <Text key={i}>{`${i + 1}. ${text}`}</Text>)
}

export const ExercisesScreen = () => {
  const [modalData, setModalData] = useState<ModalData>()
  const [search, setSearch] = useState<string | undefined>()

  const searchTerm = useDebounce(search, 500)

  const {
    data: exercises = [],
    isLoading,
    error,
    refetch
  } = useQuery(["exercises", searchTerm], async () =>
    fetchExercises(searchTerm)
  )

  const onItemPress = (item: Exercise) => {
    const description = transformDescription(item.instructions)

    setModalData({
      heading: item.name,
      description,
      imageUrl: buildExerciseImageURL(item),
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

  const onSearchSubmit = async () => {
    await refetch()
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
    if (isLoading && !exercises.length && !error) {
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
      <View style={styles.searchBarWrapper}>
        <SearchInput
          disabled={isLoading}
          initialValue={searchTerm}
          onChangeText={setSearch}
          onSubmit={onSearchSubmit}
        />
      </View>
      {renderContent()}
    </View>
  )
}
