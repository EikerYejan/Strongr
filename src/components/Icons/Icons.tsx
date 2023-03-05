import type {SvgProps} from "react-native-svg"
import Svg, {Path, Rect} from "react-native-svg"

const ICONS = {
  Home: ({fill, ...props}: SvgProps) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <Path
        d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z"
        fill={fill}
      />
    </Svg>
  ),
  Stats: ({fill, ...props}: SvgProps) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <Rect x="1.5" y="12" width="5" height="11" rx="2.5" fill={fill} />
      <Rect x="9.5" y="1" width="5" height="22" rx="2.5" fill={fill} />
      <Rect x="17.5" y="7" width="5" height="16" rx="2.5" fill={fill} />
    </Svg>
  ),
  Settings: ({fill, ...props}: SvgProps) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <Rect x="1.5" y="12" width="5" height="11" rx="2.5" fill={fill} />
      <Rect x="9.5" y="1" width="5" height="22" rx="2.5" fill={fill} />
      <Rect x="17.5" y="7" width="5" height="16" rx="2.5" fill={fill} />
    </Svg>
  ),
  ArrowLeft: ({fill, ...props}: SvgProps) => (
    <Svg width="10" height="16" viewBox="0 0 10 16" {...props}>
      <Path
        d="M8.28585 14.8571L1.42871 7.99997L8.28585 1.14282"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export type IconName = keyof typeof ICONS

export const Icon = ({name, ...props}: {name: IconName} & SvgProps) => {
  const Element = ICONS[name]

  return <Element {...props} />
}
