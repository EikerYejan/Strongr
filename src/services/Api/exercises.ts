import {API_BASE_URL, fetch} from "./fetch"

// types
import type {Exercise} from "@strongr/types/exercises"

export const fetchExercises = async (): Promise<Exercise[]> => {
  const {data} = await fetch("/exercises")

  return data.data
}

export const buildExerciseImageURL = (exercise: Exercise): string => {
  return `${API_BASE_URL}/image?name=${
    encodeURIComponent(exercise.name) + "Gym"
  }`
}
