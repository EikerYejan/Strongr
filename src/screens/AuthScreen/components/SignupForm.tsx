import {useState} from "react"

// components
import {AuthForm} from "./AuthForm"

// constants
import {SIGNUP_FORM_BACKGROUND} from "../constants"

interface Props {
  onSubmit: (payload: Record<string, unknown>) => void
}

// TODO: password input

export const SignupForm = ({onSubmit}: Props) => {
  const [fields, setFields] = useState({})

  const onInputChange = (field: string) => (value: string) => {
    setFields({
      ...fields,
      [field]: field === "email" ? value.toLowerCase() : value
    })
  }

  return (
    <AuthForm
      backgroundImage={SIGNUP_FORM_BACKGROUND}
      buttonText="Sign up"
      description="Enter your informations below or login with a other account"
      heading="Hello"
      headingAccent="newbie,"
      inputs={[
        {
          autoCorrect: false,
          name: "name",
          onChangeText: onInputChange("name"),
          placeholder: "Name"
        },
        {
          autoCapitalize: "none",
          keyboardType: "email-address",
          name: "email",
          onChangeText: onInputChange("email"),
          placeholder: "Email"
        },
        {
          autoCapitalize: "none",
          name: "password",
          onChangeText: onInputChange("password"),
          placeholder: "Password"
        },
        {
          autoCapitalize: "none",
          name: "password-confirmation",
          onChangeText: onInputChange("password"),
          placeholder: "Confirm Password"
        }
      ]}
      onSubmit={() => {
        onSubmit(fields)
      }}
    />
  )
}
