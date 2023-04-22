import {MMKV} from "react-native-mmkv"

// types
import type {AppState} from "./store"

const STORAGE_KEY = "appState"
const storage = new MMKV()

class StorageService {
  public updateAppStorage(value: AppState) {
    storage.set(STORAGE_KEY, JSON.stringify(value))
  }

  public getAppStorage(): AppState {
    const value = storage.getString(STORAGE_KEY)
    return value ? JSON.parse(value) : {}
  }

  public clearAppStorage() {
    storage.clearAll()
  }
}

export const Storage = new StorageService()
