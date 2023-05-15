/* eslint-disable @typescript-eslint/consistent-type-assertions */
import {atom, selector, useRecoilState} from "recoil"
import merge from "ts-deepmerge"

// storage
import {Storage, defaultAppState} from "./storage"

// types
import type {AppState, DeepPartial} from "@strongr/types"

const storedState = Storage.getAppStorage()

const appStateAtom = atom({
  default: Object.keys(storedState).length ? storedState : defaultAppState,
  key: "appState"
})

const appStateSelector = selector({
  get: ({get}) => get(appStateAtom),
  key: "appStateSelector",
  set: ({set}, newValue) => {
    if (process.env.NODE_ENV === "development") {
      console.log("set appStateSelector", newValue)
    }

    Storage.updateAppStorage(newValue as AppState)
    set(appStateAtom, newValue)
  }
})

export const useAppState = () => {
  const [appState, setNewAppState] = useRecoilState(appStateSelector)

  const updateAppState = (newState: DeepPartial<AppState>) => {
    setNewAppState(merge(appState, newState) as AppState)
  }

  return {appState, setAppState: setNewAppState, updateAppState}
}
