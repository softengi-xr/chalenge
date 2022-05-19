import * as React from 'react'
import Svg, { SvgProps, Defs, Rect, G, Use } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export const BackArrow = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 55 55" {...props}>
    <Defs>
      <Rect id="b" x={0} y={0} width={41} height={41} rx={20.5} />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <G transform="translate(7 5)">
        <Use fill="#000" filter="url(#a)" xlinkHref="#b" />
        <Use fill="#FFF" xlinkHref="#b" />
      </G>
      <G transform="rotate(45 -4.364 44.092)" fill="#434343">
        <Rect y={11.454} width={13} height={2} rx={1} />
        <Rect y={0.454} width={2} height={13} rx={1} />
      </G>
    </G>
  </Svg>
)
