import {useCallback} from "react"
import {useAppState} from "@strongr/store/store"

import type {MeasurementUnit} from "@strongr/types"

export const useFormat = () => {
  const {appState} = useAppState()

  const lbToKg = (value: number) => {
    return Math.ceil(value * 0.45359237)
  }

  const inchToCm = (value: number) => {
    return Math.ceil(value * 2.54)
  }

  const kgToLb = (value: number) => {
    return Math.ceil(value * 2.2046226218)
  }

  const cmToInch = (value: number) => {
    return Math.ceil(value * 0.3937007874)
  }

  const calculatUnitValue = useCallback(
    (value: number, unit: MeasurementUnit, reverse = false) => {
      const currentSettings = appState.user.settings.measureUnit

      if (currentSettings === "metric") {
        return value
      }

      if (unit === "kg") {
        return reverse ? lbToKg(value) : kgToLb(value)
      }

      if (unit === "cm") {
        return reverse ? inchToCm(value) : cmToInch(value)
      }

      return value
    },
    [appState.user.settings.measureUnit]
  )

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

  const formatMetricUnitString = useCallback(
    (value: number | string, unit: MeasurementUnit): string => {
      const currentSettings = appState.user.settings.measureUnit

      if (currentSettings === "metric") {
        return `${value} ${unit}`
      }

      if (unit === "kg") {
        return `${kgToLb(Number(value))} ${formatMetricUnit(unit)}`
      }

      if (unit === "cm") {
        return `${cmToInch(Number(value))} ${formatMetricUnit(unit)}`
      }

      return `${value} ${formatMetricUnit(unit)}`
    },
    [appState.user.settings.measureUnit, formatMetricUnit]
  )

  return {
    calculatUnitValue,
    formatMetricUnit,
    formatMetricUnitString
  }
}
