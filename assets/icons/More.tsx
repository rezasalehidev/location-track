import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const More = (props: SvgProps) => (
  <Svg
    width={4}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#38383E"
      d="M3.25 2a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0 5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0 5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
    />
  </Svg>
)
