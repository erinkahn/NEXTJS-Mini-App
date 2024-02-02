import Link from "next/link"
import { NAV_LINKS } from '@/constants/index'
import Button from "./Button"
import HilinkLogo from "./svgs/hilinkLogo"
import User from "./svgs/User"
import Menu from "./svgs/Menu"
import { ReactNode } from "react"

interface containerProps {
   icon: string | ReactNode
}

const Navbar = ({ icon }: containerProps) => {
   return (
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
         <Link href="/">
            <HilinkLogo />
         </Link>

         <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
               <Link key={link.key} href={link.href} className="regular-16 text-gray-50 flexCenter pb-1.5 transition-all hover:font-bold">
                  {link.label}
               </Link>
            ))}
         </ul>

         <div className="lg:flexCenter hidden">
            <Button
               type="button"
               title="Login"
               icon={<User />}
               variant="btn_dark_green"
            />
         </div>

         <div className="inline-block cursor-pointer lg:hidden"
         >
            <Menu />
         </div>
      </nav>
   )
}

export default Navbar