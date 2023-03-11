import {fetch} from "./fetch"

// types
import type {Exercise} from "@strongr/types/exercises"

export const fetchExercises = async (): Promise<Exercise[]> => {
  const {data} = await fetch("/exercises")

  return data.data
}
