import {API_BASE_URL, fetch} from "./fetch"

// types
import type {Exercise} from "@strongr/types/exercises"

export const fetchExercises = async (query?: string): Promise<Exercise[]> => {
  const {data} = await fetch(query ? "/search" : "/exercises", {
    params: {query}
  })

  return data.data
}

export const buildExerciseImageURL = (exercise: Exercise): string => {
  return `${API_BASE_URL}/image?name=${
    encodeURIComponent(exercise.name) + "Gym"
  }`
}
