import {Modal, ScrollView, Text, TouchableOpacity} from "react-native"
import {useRef, useState} from "react"

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

// TODO: categorize measurements
export const MeasurementsScreen = () => {
  const [activeItem, setActiveItem] = useState<Measurement>()

  const activeItemValue = useRef<number>()

  const {appState, updateAppState} = useAppState()

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
    const newItem = {...activeItem, value: Number(activeItemValue.current)}

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
              {activeItem?.label} ({activeItem?.unit})
            </Text>
            <TextInput
              defaultValue={String(activeItem?.value ?? "")}
              iconName="Settings"
              keyboardType="number-pad"
              style={styles.modalInput}
              onChangeText={onModalInputChange}
            />
          </View>
        </Modal>

        {Object.entries(appState.user.measurements).map(([key, val]) => {
          const {label, unit, value} = val

          return (
            <View key={key} style={styles.item}>
              <Text style={styles.itemLabel}>{label}</Text>
              <View style={styles.itemControls}>
                {value ? (
                  <Text style={styles.itemValue}>
                    {value} {unit}
                  </Text>
                ) : null}
                <TouchableOpacity
                  style={styles.itemControlsButton}
                  onPress={() => {
                    onItemPress(key)
                  }}
                >
                  <Icon fill={COLORS.WHITE} name="Plus" />
                </TouchableOpacity>
              </View>
            </View>
          )
        })}
      </ScrollView>
    </ScreenWrapper>
  )
}
