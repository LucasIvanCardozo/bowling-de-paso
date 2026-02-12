import type { SVGProps, Ref } from "react"
import { forwardRef } from "react"
const SvgElipse = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Capa_1"
    data-name="Capa 1"
    viewBox="0 0 477.839 477.839"
    ref={ref}
    {...props}
  >
    <defs>
      <style>{".cls-2{fill:#cecece}"}</style>
    </defs>
    <circle
      cx={238.92}
      cy={238.92}
      r={238.871}
      style={{
        fill: "#0c0c0c",
      }}
    />
    <path
      d="M405.447 113.312C395.875 99.824 389 87.55 393.245 84.536s15.447 5.48 25.02 18.968 13.89 26.865 9.643 29.878-12.889-6.582-22.46-20.07M446.036 164.138c-4.489-12.641-7.142-23.74-3.162-25.153s10.843 7.69 15.332 20.331 4.903 24.035.923 25.448-8.604-7.985-13.093-20.626"
      className="cls-2"
    />
    <ellipse
      cx={432.641}
      cy={210.775}
      className="cls-2"
      rx={11.737}
      ry={31.136}
      transform="rotate(-24.998 329.814 230.766)"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgElipse);
export default ForwardRef;

