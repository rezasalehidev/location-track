import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const Labels = (props: SvgProps) => (
  <Svg
    width={13}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#38383E"
      fillRule="evenodd"
      d="M12.98 2.231v9.55c0 .934-.76 1.693-1.694 1.693h-9.56A1.694 1.694 0 0 1 .033 11.78V2.231c0-.934.759-1.693 1.693-1.693h9.56c.934 0 1.693.759 1.693 1.693Zm-1 0a.694.694 0 0 0-.694-.693h-9.56a.694.694 0 0 0-.693.693v9.55c0 .382.31.693.693.693h9.56c.382 0 .693-.31.693-.694V2.231ZM2.25 4a.5.5 0 0 1 1 0v5.75a.5.5 0 0 1-1 0V4Zm3.756 0a.5.5 0 0 1 1 0v5.75a.5.5 0 0 1-1 0V4ZM9.75 4a.5.5 0 0 1 1 0v5.75a.5.5 0 0 1-1 0V4ZM8 4.002a.5.5 0 0 1 1 0V7.75a.5.5 0 0 1-1 0V4.002Zm-3.872 0a.5.5 0 0 1 1 0V7.75a.5.5 0 0 1-1 0V4.002ZM8 9.25a.5.5 0 0 1 1 0v.5a.5.5 0 0 1-1 0v-.5Zm-3.872 0a.5.5 0 0 1 1 0v.5a.5.5 0 0 1-1 0v-.5Z"
      clipRule="evenodd"
    />
  </Svg>
)
