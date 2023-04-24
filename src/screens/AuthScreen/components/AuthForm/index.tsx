import {Image, Text, View} from "react-native"

// components
import {TextInput} from "@strongr/components/TextInput/TextInput"
import {Button} from "@strongr/components/Button/Button"

// styles
import {authForm as styles} from "./styles"

interface Input {
  name: string
  onChangeText: (text: string) => void
  placeholder: string
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
        {inputs.map(({name, onChangeText, placeholder}) => (
          <TextInput
            key={name}
            placeholder={placeholder}
            style={styles.input}
            onChangeText={onChangeText}
          />
        ))}
        <Button
          rightIconName="ArrowRight"
          style={styles.submitButton}
          title={buttonText}
          onPress={onSubmit}
        />
      </View>
    </View>
  )
}
