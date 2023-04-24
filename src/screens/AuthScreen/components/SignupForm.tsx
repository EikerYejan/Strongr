// components
import {AuthForm} from "./AuthForm"

// constants
import {SIGNUP_FORM_BACKGROUND} from "../constants"

interface Props {
  onSubmit: () => void
}

export const SignupForm = ({onSubmit}: Props) => {
  const onInputChange = (field: string) => (value: string) => {
    console.log(field, value)
  }

  return (
    <AuthForm
      backgroundImage={SIGNUP_FORM_BACKGROUND}
      buttonText="Sign up"
      heading="Hello"
      headingAccent="newbie,"
      description="Enter your informations below or login with a other account"
      inputs={[
        {
          name: "email",
          onChangeText: onInputChange("email"),
          placeholder: "Email"
        },
        {
          name: "password",
          onChangeText: onInputChange("password"),
          placeholder: "Password"
        },
        {
          name: "password-confirmation",
          onChangeText: onInputChange("password"),
          placeholder: "Confirm Password"
        }
      ]}
      onSubmit={onSubmit}
    />
  )
}
