import type { SVGProps, Ref } from "react"
import { forwardRef } from "react"
const SvgFlecha = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 330.219 175"
    ref={ref}
    {...props}
  >
    <path
      d="m1120 1613-62-163-10 45s-100.538-48.38-178 1c-45.286 28.69-67.829 71.64-80 129-5.895-.54 104.8-122.98 211-43l-36 28Z"
      data-name="Forma 1"
      style={{
        fill: "#030303",
        fillRule: "evenodd",
      }}
      transform="translate(-789.781 -1450)"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFlecha);
export default ForwardRef;

