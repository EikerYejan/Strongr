import {useEffect, useRef, useState} from "react"
import {Text, TouchableOpacity, View} from "react-native"

// components
import {TextInput} from "../TextInput/TextInput"

// styles
import {searchInputStyles as styles} from "./styles"

// types
import type {TextInput as NativeInput} from "react-native"

interface Props {
  disabled?: boolean
  initialValue?: string
  onChangeText: (text: string | undefined) => void
  onClear?: () => void
  onSubmit?: () => void
}

export const SearchInput = ({
  disabled = true,
  initialValue,
  onChangeText,
  onClear,
  onSubmit
}: Props) => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>(initialValue)

  const input = useRef<NativeInput>(null)

  const onClearInput = () => {
    input.current?.clear()
    input.current?.blur()

    setSearchTerm(undefined)

    onClear?.()
    onSubmit?.()
  }

  useEffect(() => {
    onChangeText?.(searchTerm)
  }, [searchTerm]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <View pointerEvents={disabled ? "none" : "auto"} style={styles.container}>
      <TextInput
        caretHidden={disabled}
        editable={!disabled}
        iconName="Search"
        inputRef={input}
        placeholder="Search"
        style={styles.textInput}
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={onSubmit}
      />
      {searchTerm ? (
        <TouchableOpacity
          disabled={disabled}
          onPress={onClearInput}
          style={styles.clearIconContainer}
        >
          <Text style={styles.clearIcon}>&times;</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  )
}
