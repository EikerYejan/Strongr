import {useState} from "react"
import {ActivityIndicator, FlatList, Modal, Text} from "react-native"
import {useQuery} from "react-query"

// components
import {ContentModal} from "@strongr/components/ContentModal/ContentModal"
import {Card} from "@strongr/components/Card/Card"
import {Button} from "@strongr/components/Button/Button"
import {SearchInput} from "@strongr/components/SearchInput/SearchInput"
import {View} from "@strongr/components/View/View"

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
          styles={styles.card}
          subtitle={item.category}
          title={item.name}
          onPress={onPress}
        />
      </View>
    )
  }

  const renderContent = () => {
    if (isLoading && !exercises.length && !error) {
      return (
        <ActivityIndicator color="white" size="large" style={styles.loader} />
      )
    }

    if (error) {
      return (
        <Button
          size="small"
          title="There's been an error, please retry"
          type="dark"
          onPress={refetch}
        />
      )
    }

    return (
      <View>
        <FlatList
          data={exercises}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
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
          <ContentModal data={modalData} onClose={onModalClose} />
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
