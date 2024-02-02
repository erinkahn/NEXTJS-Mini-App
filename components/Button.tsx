import Image from "next/image"
import { ReactNode } from "react"

// repeating elements like buttons should be in the component folder 

// typescript props
type ButtonProps = {
   type: 'button' | 'submit',
   title: string,
   icon?: string | ReactNode, // optional icon
   variant: string
}

const Button = ({ type, title, icon, variant }: ButtonProps) => { // props
   return (
      <button
         type={type}
         className={`flexCenter gap-3 rounded-full border ${variant}`}
      >
         {icon}
         <label className="bold-16 whitespace-nowrap">{title}</label>
      </button>
   )
}

export default Button