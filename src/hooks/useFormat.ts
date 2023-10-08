import {useCallback} from "react"
import {useAppState} from "@strongr/store/store"

import type {MeasurementUnit} from "@strongr/types"

export const useFormat = () => {
  const {appState} = useAppState()

  const kgToLb = (value: number) => {
    return value * 2.2046226218
  }

  const cmToInch = (value: number) => {
    return value * 0.3937007874
  }

  const formatMetricUnit = useCallback(
    (unit: MeasurementUnit): MeasurementUnit => {
      const currentSettings = appState.user.settings.measureUnit

      if (currentSettings === "metric") {
        return unit
      }

      if (unit === "kg") {
        return "lb"
      }

      if (unit === "cm") {
        return "in"
      }

      return unit
    },
    [appState.user.settings.measureUnit]
  )

  const formatMetricUnitValue = useCallback(
    (value: number | string, unit: MeasurementUnit): string => {
      const currentSettings = appState.user.settings.measureUnit

      if (currentSettings === "metric") {
        return `${value} ${unit}`
      }

      if (unit === "kg") {
        return `${kgToLb(Number(value)).toFixed(2)} ${formatMetricUnit(unit)}`
      }

      if (unit === "cm") {
        return `${cmToInch(Number(value)).toFixed(2)} ${formatMetricUnit(unit)}`
      }

      return `${value} ${formatMetricUnit(unit)}`
    },
    [appState.user.settings.measureUnit, formatMetricUnit]
  )

  return {formatMetricUnit, formatMetricUnitValue}
}
