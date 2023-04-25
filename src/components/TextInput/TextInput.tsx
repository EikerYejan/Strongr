import {TextInput as NativeInput, View} from "react-native"

// components
import {Icon} from "../Icons/Icons"

// constants
import {COLORS} from "@strongr/constants/colors"

// styles
import {textInputStyles as styles} from "./styles"

// types
import type {TextStyle, TextInputProps} from "react-native"
import type {IconName} from "../Icons/Icons"

interface Props extends TextInputProps {
  iconName?: IconName
  inputRef?: React.RefObject<NativeInput>
  inputStyles?: TextStyle
}

export const TextInput = ({
  iconName,
  inputRef,
  inputStyles,
  placeholderTextColor,
  style,
  ...props
}: Props) => {
  return (
    <View style={[styles.container, style]}>
      {iconName ? (
        <Icon width={22} height={22} fill={COLORS.WHITE} name={iconName} />
      ) : null}
      <NativeInput
        placeholderTextColor={placeholderTextColor ?? COLORS.WHITE}
        ref={inputRef}
        style={[styles.input, inputStyles]}
        {...props}
      />
    </View>
  )
}
