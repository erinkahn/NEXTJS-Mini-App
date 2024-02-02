import { ReactNode } from "react"

type HeroTitleProps = {
   image?: ReactNode,
   imgClass?: string,
   title?: string,
   description?: string,
   titleClass?: string,
   descrClass?: string
}

const HeroText = ({ image, imgClass, title, description, titleClass, descrClass }: HeroTitleProps) => {
   return (
      <div>
         {image && <div className={imgClass}>{image}</div>}
         <h1 className={titleClass}>{title}</h1>
         <p className={descrClass}>{description}</p>
      </div>
   )
}

export default HeroText