import {KeyboardAvoidingView, Platform, Text} from "react-native"
import {useMemo, useState} from "react"

// components
import {ScreenWrapper} from "@strongr/components/ScreenWrapper/ScreenWrapper"
import {TextInput} from "@strongr/components/TextInput/TextInput"
import {Button} from "@strongr/components/Button/Button"
import {View} from "@strongr/components/View/View"

// store
import {useAppState} from "@strongr/store/store"

// styles
import {editProfileScreenStyles as styles} from "./styles"

// types
import type {NavigationProp} from "@react-navigation/native"

interface Props {
  navigation: NavigationProp<never>
}

export const EditProfileScreen = ({navigation}: Props) => {
  const {appState, updateAppState} = useAppState()
  const {
    user: {age: userAge, email: userEmail, name: userName, weight: userWeight}
  } = appState

  const [fields, setFields] = useState({
    age: userAge,
    email: userEmail,
    name: userName,
    weight: userWeight
  })

  const {age, email, name, weight} = fields

  const canSave = useMemo(() => {
    return (
      name !== userName ||
      email !== userEmail ||
      age !== userAge ||
      weight !== userWeight
    )
  }, [age, email, name, weight, userAge, userEmail, userName, userWeight])

  const onChangeField = (field: string) => (value: string) => {
    setFields((prevFields) => ({...prevFields, [field]: value}))
  }

  const onSave = () => {
    updateAppState({user: {age, email, name, weight}})
    navigation.goBack()
  }

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.optionContainer}>
          <Text style={styles.optionLabel}>Name</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={onChangeField("name")}
          />
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.optionLabel}>Email</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            style={styles.textInput}
            value={email}
            onChangeText={onChangeField("email")}
          />
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.optionLabel}>Age</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            inputMode="numeric"
            keyboardType="number-pad"
            returnKeyType="done"
            style={styles.textInput}
            value={String(age ?? 0)}
            onChangeText={onChangeField("age")}
          />
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.optionLabel}>Weight</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            returnKeyType="done"
            style={styles.textInput}
            value={String(weight ?? 0)}
            onChangeText={onChangeField("weight")}
          />
        </View>
        <Button
          disabled={!canSave}
          size="large"
          style={styles.saveButton}
          title="Save"
          onPress={onSave}
        />
      </KeyboardAvoidingView>
    </ScreenWrapper>
  )
}
