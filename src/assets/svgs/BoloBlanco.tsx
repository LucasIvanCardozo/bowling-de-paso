import type { SVGProps, Ref } from 'react'
import { forwardRef } from 'react'

const SvgBoloBlanco = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140.84578 312.47946" ref={ref} {...props}>
    <g transform="matrix(3.7795276,0,0,3.7795276,-335.48192,-406.96645)">
      <path
        d="m 98.837513,190.3534 h 8.249477 c 0,0 10.73163,-9.26068 10.73163,-23.48244 0,-14.22175 -9.12553,-23.48244 -9.12553,-28.19546 0,-4.71303 2.04412,-9.83947 2.04412,-13.39491 0,-3.55544 -3.21219,-7.93773 -6.57038,-7.93773 -3.3582,0 -6.716398,4.2996 -6.716398,7.77236 0,3.72081 1.314071,9.09531 1.314071,13.80833 0,4.71303 -10.001579,15.37935 -10.001579,28.19546 0,12.81613 10.074589,23.23439 10.074589,23.23439 z"
        fill="#ffffff"
      />
    </g>
  </svg>
)

const ForwardRef = forwardRef(SvgBoloBlanco)
export default ForwardRef
