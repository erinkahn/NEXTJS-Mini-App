import { ReactNode } from "react"

type HeroTitleProps = {
   image?: ReactNode,
   title?: string,
   description?: string,
   titleClass?: string,
   descrClass?: string
}

const HeroText = ({ image, title, description, titleClass, descrClass }: HeroTitleProps) => {
   return (
      <div>
         {image}
         <h1 className={titleClass}>{title}</h1>
         <p className={descrClass}>{description}</p>
      </div>
   )
}

export default HeroText