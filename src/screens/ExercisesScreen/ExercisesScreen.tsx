import {ActivityIndicator, FlatList, Text, View} from "react-native"
import {useQuery, useQueryClient} from "react-query"

// components
import {Card} from "@strongr/components/Card/Card"

// styles
import {exercisesScreenStyles as styles} from "./styles"

// types
import type {ListRenderItemInfo} from "react-native"
import type {Exercise} from "@strongr/types/exercises"

// utils
import {fetchExercises} from "@strongr/services/Api/exercises"
import {Button} from "@strongr/components/Button/Button"

export const ExercisesScreen = () => {
  const queryClient = useQueryClient()
  const {
    data: exercises = [],
    isLoading,
    error
  } = useQuery("exercises", fetchExercises)

  const refetch = async () => queryClient.invalidateQueries("exercises")

  const renderItem = ({item}: ListRenderItemInfo<Exercise>) => {
    return (
      <View style={styles.cardContainer}>
        <Card
          styles={styles.card}
          title={item.name}
          subtitle={item.category.name}
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
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Exercises</Text>
      {renderContent()}
    </View>
  )
}
