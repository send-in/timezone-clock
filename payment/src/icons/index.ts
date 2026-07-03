import { SVGProps } from "react"

export interface IconProps extends SVGProps<SVGSVGElement> {
	size?: number
}

// #region Individual Icon Components
export { default as Information } from "./Information"
export { default as Linkedin } from "./Linkedin"
export { default as Logo } from "./Logo"
// #endregion
