import type { SVGProps, Ref } from "react"
import { forwardRef } from "react"
const SvgBoloBlanco = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 284 860"
    ref={ref}
    {...props}
  >
    <path
      d="M1318 138h1a80 80 0 0 1 80 80s4.16 31.777-4 90c-6.68 36.969-28.32 75.813-12 164 .31 20.313 77 164.083 77 276 0 140.151-61 250-61 250h-163s-60-116.836-60-257c0-110.091 55.67-181.524 82-274 13.24-67.158-6.81-119.26-14-157-9.67-50.767-8-90-8-90a82 82 0 0 1 82-82"
      data-name="Rect\xE1ngulo 10"
      style={{
        fill: "#f1f1f1",
        fillRule: "evenodd",
      }}
      transform="translate(-1176 -138)"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBoloBlanco);
export default ForwardRef;

