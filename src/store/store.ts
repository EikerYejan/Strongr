/* eslint-disable @typescript-eslint/consistent-type-assertions */
import {atom, selector, useRecoilState} from "recoil"
import merge from "ts-deepmerge"

// storage
import {Storage} from "./storage"

// types
import type {AppState, DeepPartial} from "@strongr/types"

const storedState = Storage.getAppStorage()

const appStateAtom = atom({
  default: storedState,
  key: "appState"
})

const appStateSelector = selector({
  key: "appStateSelector",
  get: ({get}) => get(appStateAtom),
  set: ({set}, newValue) => {
    console.log("SAVING APP STATE", newValue)
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
