import {useCallback} from "react"

// components
import {ScreenWrapper} from "../ScreenWrapper/ScreenWrapper"
import {MenuOption} from "../MenuOption/MenuOption"

// constants
import {settingsContentType} from "@strongr/constants/screens"

// hooks
import {useAppState} from "@strongr/store/store"

// types
import type {SettingsContentType} from "@strongr/constants/screens"

interface Props {
  contentType: SettingsContentType
}

export const SettingsContent = ({contentType}: Props) => {
  const {
    appState: {user},
    updateAppState
  } = useAppState()
  const {settings} = user || {}
  const {enableProgramNotifications, enableWorkoutReminders, measureUnit} =
    settings

  const onUnitOfMeasureChange = useCallback(
    (value: boolean, key: typeof measureUnit) => () => {
      if (value) {
        updateAppState({
          user: {
            settings: {
              measureUnit: key
            }
          }
        })
      }
    },
    [updateAppState]
  )

  const onNotificationsChange = useCallback(
    (reminders: boolean, programNotifications: boolean) => {
      updateAppState({
        user: {
          settings: {
            enableWorkoutReminders: reminders,
            enableProgramNotifications: programNotifications
          }
        }
      })
    },
    [updateAppState]
  )

  const renderContent = useCallback(() => {
    switch (contentType) {
      case settingsContentType.UNITS_OF_MEASURE:
        return (
          <>
            <MenuOption
              checked={measureUnit === "metric"}
              inidicatorType="check"
              key="metric"
              label="Metric"
              onCheck={onUnitOfMeasureChange(true, "metric")}
            />
            <MenuOption
              checked={measureUnit === "imperial"}
              inidicatorType="check"
              key="imperial"
              label="Imperial"
              onCheck={onUnitOfMeasureChange(true, "imperial")}
            />
          </>
        )

      case settingsContentType.NOTIFICATIONS:
        return (
          <>
            <MenuOption
              checked={enableWorkoutReminders}
              inidicatorType="toggle"
              key="Reminders"
              label="Workout Reminders"
              onCheck={(val) => {
                onNotificationsChange(val, enableProgramNotifications)
              }}
            />
            <MenuOption
              checked={enableProgramNotifications}
              inidicatorType="toggle"
              key="Program"
              label="Program Notifications"
              onCheck={(val) => {
                onNotificationsChange(enableWorkoutReminders, val)
              }}
            />
          </>
        )

      default:
        return null
    }
  }, [
    contentType,
    enableProgramNotifications,
    enableWorkoutReminders,
    measureUnit,
    onNotificationsChange,
    onUnitOfMeasureChange
  ])

  return <ScreenWrapper>{renderContent()}</ScreenWrapper>
}
