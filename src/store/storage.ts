import {MMKV} from "react-native-mmkv"

// types
import type {AppState} from "@strongr/types"

const defaultAppState: AppState = {
  user: {
    name: "Stranger",
    email: undefined as string | undefined,
    settings: {
      measureUnit: "metric",
      enableWorkoutReminders: true,
      enableProgramNotifications: false
    }
  }
}

class StorageService {
  private readonly storage = new MMKV()

  private readonly STORAGE_KEY = "appState"

  public init() {
    const storedData = this.getAppStorage()

    if (!Object.keys(storedData).length) {
      this.updateAppStorage(defaultAppState)
    }
  }

  public updateAppStorage(value: AppState) {
    this.storage.set(this.STORAGE_KEY, JSON.stringify(value))
  }

  public getAppStorage(): AppState {
    const value = this.storage.getString(this.STORAGE_KEY)
    return value ? JSON.parse(value) : {}
  }

  public clearAppStorage() {
    this.storage.clearAll()
  }
}

export const Storage = new StorageService()
