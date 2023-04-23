import {Text, View} from "react-native"
import {useCallback, useEffect, useMemo} from "react"
import {Picker} from "@react-native-picker/picker"

// components
import {ScreenWrapper} from "@strongr/components/ScreenWrapper/ScreenWrapper"
import {BackButton} from "@strongr/components/BackButton/BackButton"
import {Button} from "@strongr/components/Button/Button"

// constants
import {ONBOARDING_STEPS} from "./constants"

// styles
import {onboardingScreenStyles as styles} from "./styles"

// utils
import {useAppState} from "@strongr/store/store"

// TODO: implement transitions between steps

export const OnboardingScreen = () => {
  const {
    appState: {lastOnboardingStep = 1, user},
    updateAppState
  } = useAppState()

  const {description, title, type, pickerOptions, pickerOptionLabel} =
    ONBOARDING_STEPS[lastOnboardingStep] || {}

  const isCompleted = useMemo(
    () => lastOnboardingStep === Object.keys(ONBOARDING_STEPS).length,
    [lastOnboardingStep]
  )

  const onNextStep = () => {
    updateAppState({
      lastOnboardingStep: lastOnboardingStep + 1,
      onboardingCompleted: isCompleted
    })
  }

  const onBack = () => {
    updateAppState({
      lastOnboardingStep: lastOnboardingStep - 1
    })
  }

  const onSelectionChange = useCallback(
    (value: number | string) => {
      updateAppState({user: {[type]: value}})
    },
    [type, updateAppState]
  )

  const renderContent = useCallback(() => {
    const useSmallPickerFont = ["goal", "activityLevel"].includes(type)
    const pickerSelectedValue = user[type]

    return (
      <Picker
        selectedValue={pickerSelectedValue}
        itemStyle={[
          styles.pickerOption,
          useSmallPickerFont ? {fontSize: 28} : {fontSize: 58}
        ]}
        style={styles.picker}
        onValueChange={onSelectionChange}
      >
        {pickerOptions.map((opt) => (
          <Picker.Item
            key={opt}
            label={`${opt} ${pickerOptionLabel ?? ""}`}
            value={opt}
          />
        ))}
      </Picker>
    )
  }, [onSelectionChange, pickerOptions, pickerOptionLabel, type, user])

  useEffect(() => {
    const hasStoredValue = user[type] !== undefined

    if (!hasStoredValue) onSelectionChange(pickerOptions[0])
  }, [onSelectionChange, pickerOptions, type, user])

  return (
    <ScreenWrapper>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.selectionWrapper}>{renderContent()}</View>
      <View style={styles.bottomBar}>
        {lastOnboardingStep > 1 ? (
          <BackButton arrowDirection="left" onPress={onBack} />
        ) : null}
        <Button
          rightIconName="ArrowRight"
          size="small"
          style={styles.nextButton}
          title={isCompleted ? "Start" : "Next"}
          onPress={onNextStep}
        />
      </View>
    </ScreenWrapper>
  )
}
