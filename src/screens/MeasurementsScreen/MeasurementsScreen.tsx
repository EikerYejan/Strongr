import {Modal, ScrollView, Text, TouchableOpacity} from "react-native"
import {useMemo, useRef, useState} from "react"

// components
import {ScreenWrapper} from "@strongr/components/ScreenWrapper/ScreenWrapper"
import {View} from "@strongr/components/View/View"
import {Icon} from "@strongr/components/Icons/Icons"
import {BackButton} from "@strongr/components/BackButton/BackButton"
import {TextInput} from "@strongr/components/TextInput/TextInput"

// contants
import {COLORS} from "@strongr/constants/colors"

// styles
import {measurementsScreenStyles as styles} from "./styles"

// types
import type {Measurement} from "@strongr/types"

// utils
import {useAppState} from "@strongr/store/store"
import {useFormat} from "@strongr/hooks/useFormat"

export const MeasurementsScreen = () => {
  const [activeItem, setActiveItem] = useState<Measurement>()

  const activeItemValue = useRef<number>()

  const {appState, updateAppState} = useAppState()
  const {calculatUnitValue, formatMetricUnit, formatMetricUnitString} =
    useFormat()

  const onModalClose = () => {
    activeItemValue.current = undefined
    setActiveItem(undefined)
  }

  const onItemPress = (key: string) => {
    setActiveItem(appState.user.measurements[key])
  }

  const onModalInputChange = (value: string) => {
    activeItemValue.current = Number(value)
  }

  const onModalSave = () => {
    const newItem = {
      ...activeItem,
      value: activeItem
        ? calculatUnitValue(
            activeItemValue.current ?? activeItem.value ?? 0,
            activeItem?.unit,
            true
          )
        : 0
    }

    if (newItem.key) {
      updateAppState({
        user: {
          measurements: {
            ...appState.user.measurements,
            [newItem.key]: newItem
          }
        }
      })
    }

    onModalClose()
  }

  const options = useMemo(() => {
    const grouped = Object.entries(appState.user.measurements || {}).reduce<
      Record<"Core" | "Body Part", Measurement[]>
    >(
      (acc, [key, val]) => {
        if (["weight", "body_fat", "caloric_intake"].includes(key)) {
          return {...acc, Core: [...acc.Core, val]}
        }

        return {...acc, "Body Part": [...acc["Body Part"], val]}
      },

      {Core: [], "Body Part": []}
    )

    return grouped
  }, [appState.user.measurements])

  return (
    <ScreenWrapper>
      <ScrollView
        contentInset={{
          right: -10
        }}
      >
        <Modal
          animationType="fade"
          presentationStyle="pageSheet"
          visible={!!activeItem}
          onDismiss={onModalClose}
          onRequestClose={onModalClose}
        >
          {activeItem ? (
            <View style={styles.modalContent}>
              <BackButton
                arrowDirection="left"
                height={35}
                width={35}
                onPress={onModalClose}
              />

              <TouchableOpacity
                style={styles.modalSaveButton}
                onPress={onModalSave}
              >
                <Text style={styles.modalSaveButtonText}>Save</Text>
              </TouchableOpacity>

              <Text style={styles.modalInputLabel}>
                {activeItem.label} ({formatMetricUnit(activeItem.unit)})
              </Text>
              <TextInput
                defaultValue={calculatUnitValue(
                  activeItem.value ?? 0,
                  activeItem.unit
                )?.toString()}
                iconName="Settings"
                keyboardType="number-pad"
                style={styles.modalInput}
                onChangeText={onModalInputChange}
              />
            </View>
          ) : null}
        </Modal>

        {Object.keys(options).map((key) => {
          const items = options[key as keyof typeof options]

          return (
            <View key={key} style={styles.groupWrapper}>
              <Text style={styles.groupTitle}>{key}</Text>
              {items.map(({key: k, label, unit, value}) => (
                <View key={k} style={styles.item}>
                  <Text style={styles.itemLabel}>{label}</Text>
                  <View style={styles.itemControls}>
                    {value ? (
                      <Text style={styles.itemValue}>
                        {formatMetricUnitString(value, unit)}
                      </Text>
                    ) : null}
                    <TouchableOpacity
                      style={styles.itemControlsButton}
                      onPress={() => {
                        onItemPress(k)
                      }}
                    >
                      <Icon fill={COLORS.WHITE} name="Plus" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          )
        })}
      </ScrollView>
    </ScreenWrapper>
  )
}
