import {Text, View} from "react-native"
import {useMemo, useState} from "react"

// components
import {ScreenWrapper} from "@strongr/components/ScreenWrapper/ScreenWrapper"
import {TextInput} from "@strongr/components/TextInput/TextInput"
import {Button} from "@strongr/components/Button/Button"

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
    user: {email: userEmail, name: userName}
  } = appState

  const [name, setName] = useState(userName)
  const [email, setEmail] = useState(userEmail)

  const canSave = useMemo(() => {
    return name !== userName || email !== userEmail
  }, [email, name, userEmail, userName])

  const onChangeField = (field: string) => (value: string) => {
    if (field === "name") {
      setName(value)
    }

    if (field === "email") {
      setEmail(value.toLowerCase())
    }
  }

  const onSave = () => {
    updateAppState({user: {name, email}})
    navigation.goBack()
  }

  return (
    <ScreenWrapper>
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
          onChangeText={onChangeField("email")}
          style={styles.textInput}
          value={email}
        />
      </View>
      <Button
        disabled={!canSave}
        size="large"
        style={styles.saveButton}
        title="Save"
        onPress={onSave}
      />
    </ScreenWrapper>
  )
}
