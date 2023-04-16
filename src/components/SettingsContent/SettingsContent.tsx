import {View} from "react-native"
import {useCallback, useState} from "react"

// components
import {ScreenWrapper} from "../ScreenWrapper/ScreenWrapper"

// constants
import {settingsContentType} from "@strongr/constants/screens"

// types
import type {SettingsContentType} from "@strongr/constants/screens"
import {MenuOption} from "../MenuOption/MenuOption"

interface Props {
  contentType: SettingsContentType
}

export const SettingsContent = ({contentType}: Props) => {
  const [unitOfMeasure, setUnitOfMeasure] = useState<"metric" | "imperial">(
    "metric"
  )
  const [enableWorkoutReminders, setEnableWorkoutReminders] = useState(true)
  const [enableProgramNotifications, setEnableProgramNotifications] =
    useState(false)

  const onUnitOfMeasureChange = useCallback(
    (value: boolean, key: typeof unitOfMeasure) => () => {
      if (value) {
        setUnitOfMeasure(key)
      }
    },
    []
  )

  const renderContent = useCallback(() => {
    switch (contentType) {
      case settingsContentType.UNITS_OF_MEASURE:
        return (
          <>
            <MenuOption
              checked={unitOfMeasure === "metric"}
              inidicatorType="check"
              key="metric"
              label="Metric"
              onCheck={onUnitOfMeasureChange(true, "metric")}
            />
            <MenuOption
              checked={unitOfMeasure === "imperial"}
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
              onCheck={setEnableWorkoutReminders}
            />
            <MenuOption
              checked={enableProgramNotifications}
              inidicatorType="toggle"
              key="Program"
              label="Program Notifications"
              onCheck={setEnableProgramNotifications}
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
    onUnitOfMeasureChange,
    unitOfMeasure
  ])

  return (
    <ScreenWrapper>
      <View>{renderContent()}</View>
    </ScreenWrapper>
  )
}
