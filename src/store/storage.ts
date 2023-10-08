import {MMKV} from "react-native-mmkv"
import * as Sentry from "@sentry/react-native"
import merge from "ts-deepmerge"

// types
import type {AppState} from "@strongr/types"

const STORAGE_VERSION = "1.4"

export const defaultAppState: AppState = {
  __version: STORAGE_VERSION,
  hasAuth: false,
  lastOnboardingStep: 1,
  onboardingCompleted: false,
  user: {
    email: undefined as string | undefined,
    name: "Stranger",
    settings: {
      enableProgramNotifications: false,
      enableWorkoutReminders: true,
      measureUnit: "metric"
    },
    measurements: {
      weight: {
        key: "weight",
        label: "Weight",
        unit: "kg"
      },
      body_fat: {
        key: "body_fat",
        label: "Body Fat",
        unit: "%"
      },
      caloric_intake: {
        key: "caloric_intake",
        label: "Caloric Intake",
        unit: "kcal"
      },
      neck: {
        key: "neck",
        label: "Neck",
        unit: "cm"
      },
      chest: {
        key: "chest",
        label: "Chest",
        unit: "cm"
      },
      shoulders: {
        key: "shoulders",
        label: "Shoulders",
        unit: "cm"
      },
      left_bicep: {
        key: "left_bicep",
        label: "Left Bicep",
        unit: "cm"
      },
      right_bicep: {
        key: "right_bicep",
        label: "Right Bicep",
        unit: "cm"
      },
      left_forearm: {
        key: "left_forearm",
        label: "Left Forearm",
        unit: "cm"
      },
      right_forearm: {
        key: "right_forearm",
        label: "Right Forearm",
        unit: "cm"
      },
      waist: {
        key: "waist",
        label: "Waist",
        unit: "cm"
      },
      hips: {
        key: "hips",
        label: "Hips",
        unit: "cm"
      },
      left_thigh: {
        key: "left_thigh",
        label: "Left Thigh",
        unit: "cm"
      },
      right_thigh: {
        key: "right_thigh",
        label: "Right Thigh",
        unit: "cm"
      },
      left_calf: {
        key: "left_calf",
        label: "Left Calf",
        unit: "cm"
      },
      right_calf: {
        key: "right_calf",
        label: "Right Calf",
        unit: "cm"
      }
    }
  }
}

class StorageService {
  private readonly storage = new MMKV()

  private readonly STORAGE_KEY = "appState"

  public init() {
    const storedData = this.getAppStorage()
    const storedDataVersion = storedData?.__version

    if (!Object.keys(storedData).length) {
      this.updateAppStorage(defaultAppState)

      return
    }

    if (storedDataVersion !== STORAGE_VERSION) {
      console.log("Storage version mismatch")

      // New data missing on this user, merge with defaults
      const mergedData = merge(defaultAppState, storedData)

      mergedData.__version = STORAGE_VERSION

      Sentry.captureMessage(
        `Storage version mismatch ${storedDataVersion} !== ${STORAGE_VERSION}`,
        {
          level: "log",
          extra: {
            currentUserStorage: storedData,
            currentStorageVersion: storedDataVersion,
            mergedData,
            STORAGE_VERSION
          }
        }
      )

      this.updateAppStorage(mergedData)
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
