"use client";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/index";
import Button from "./Button";
import HilinkLogo from "@/components/svgs/HilinkLogo";
import User from "./svgs/User";
import Menu from "./svgs/Menu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <HilinkLogo />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className={`${pathname === link.href ? "font-bold text-green-50" : "regular-16 flexCenter pb-1.5 text-gray-50 transition-all hover:font-bold hover:text-green-50"}`}
          >
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

      <div className="inline-block cursor-pointer lg:hidden">
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
