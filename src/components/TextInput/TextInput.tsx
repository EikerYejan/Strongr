import {TextInput as NativeInput, View} from "react-native"

// components
import {Icon} from "../Icons/Icons"

// constants
import {COLORS} from "@strongr/constants/colors"

// styles
import {textInputStyles as styles} from "./styles"

// types
import type {TextInputProps} from "react-native"
import type {IconName} from "../Icons/Icons"

interface Props extends TextInputProps {
  iconName?: IconName
  inputRef?: React.RefObject<NativeInput>
}

export const TextInput = ({style, iconName, inputRef, ...props}: Props) => {
  return (
    <View style={[styles.container, style]}>
      {iconName ? (
        <Icon width={22} height={22} fill={COLORS.GRAY} name={iconName} />
      ) : null}
      <NativeInput ref={inputRef} style={styles.input} {...props} />
    </View>
  )
}
