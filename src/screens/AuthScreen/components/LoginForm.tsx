// components
import {AuthForm} from "./AuthForm"

// constants
import {LOGIN_FORM_BACKGROUND} from "../constants"

interface Props {
  userName: string
  onSubmit: () => void
}

export const LoginForm = ({userName, onSubmit}: Props) => {
  const onInputChange = (field: string) => (value: string) => {
    console.log(field, value)
  }

  return (
    <AuthForm
      backgroundImage={LOGIN_FORM_BACKGROUND}
      buttonText="Login"
      heading="Welcome back,"
      headingAccent={userName}
      inputs={[
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
        }
      ]}
      onSubmit={onSubmit}
    />
  )
}
