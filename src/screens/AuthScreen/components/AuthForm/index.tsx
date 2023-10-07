import {Image, ScrollView, Text} from "react-native"

// components
import {TextInput} from "@strongr/components/TextInput/TextInput"
import {Button} from "@strongr/components/Button/Button"
import {View} from "@strongr/components/View/View"

// constants
import {COLORS} from "@strongr/constants/colors"

// styles
import {authForm as styles} from "./styles"

// types
import type {TextInputProps} from "react-native"

// utils
import {themedColor} from "@strongr/utils/theme"

interface Input extends TextInputProps {
  name: string
}

interface Props {
  backgroundImage: string
  buttonText: string
  description?: string
  heading: string
  headingAccent: string
  inputs: Input[]
  onSubmit: () => void
}

export const AuthForm = ({
  backgroundImage,
  buttonText,
  description,
  heading,
  headingAccent,
  inputs = [],
  onSubmit
}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: backgroundImage}} style={styles.backgroundImage} />
      <View style={styles.topContainer}>
        <Text style={styles.heading}>
          {heading} <Text style={styles.headingAccent}>{headingAccent}</Text>
        </Text>
        {description ? (
          <Text style={styles.description}>{description}</Text>
        ) : null}
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContainerBackground} />
        <ScrollView persistentScrollbar>
          {inputs.map(({name, onChangeText, placeholder, ...inputProps}) => (
            <TextInput
              {...inputProps}
              autoCorrect={false}
              inputStyles={styles.inputBox}
              key={name}
              placeholder={placeholder}
              placeholderTextColor={themedColor(COLORS.WHITE, COLORS.BLACK)}
              style={styles.input}
              onChangeText={onChangeText}
            />
          ))}
          <Button
            rightIconName="ArrowRight"
            style={styles.submitButton}
            title={buttonText}
            onPress={() => {
              onSubmit()
            }}
          />
        </ScrollView>
      </View>
    </View>
  )
}
