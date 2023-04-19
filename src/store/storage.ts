import {MMKV} from "react-native-mmkv"

// types
import type {AppState} from "./store"

const STORAGE_KEY = "appState"
const storage = new MMKV()

const updateAppStorage = (value: AppState) => {
  storage.set(STORAGE_KEY, JSON.stringify(value))
}

const getAppStorage = (): AppState => {
  const value = storage.getString(STORAGE_KEY)
  return value ? JSON.parse(value) : {}
}

export const Storage = {getAppStorage, updateAppStorage}
