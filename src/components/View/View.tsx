import type {ViewProps} from "react-native"

const NativeView =
  require("react-native/Libraries/Components/View/ViewNativeComponent").default // eslint-disable-line @typescript-eslint/no-var-requires

export const View = ({children, ...props}: ViewProps) => {
  return <NativeView {...props}>{children}</NativeView>
}
