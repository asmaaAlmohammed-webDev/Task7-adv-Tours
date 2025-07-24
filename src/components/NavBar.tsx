import { NavLinkItem } from "@/types/NavLinksType";
import Image from "next/image";
import Link from "next/link";
import NavLinksList from "./NavLinksList";
import LanguageDropdown from "./LanguageDropdown";
import MobileMenu from "./MobileMenu";

interface NavProps {
  logo: string;
  links: NavLinkItem[];
  className?: string;
  onLoginClick?: () => void;
  onSignupClick?: () => void;
}
const Navbar = ({
  links,
  logo,
  className,
  onLoginClick,
  onSignupClick,
}: NavProps) => {
  return (
    <nav
      className={` fixed z-100 px-6 md:px-12  4xl:px-[250px]  flex justify-between ${className}`}
    >
      {/* Logo */}

      <Link href="/">
        <div className=" w-[80px] md:w-[95px] lg:w-full">
          <Image
            src={logo}
            alt="Logo"
            width={130}
            height={130}
            layout="responsive"
          />
        </div>
      </Link>

      {/* links */}

      <NavLinksList
        links={links}
        className=" hidden lg:flex md:gap-5 xl:gap-10 items-center mx-auto"
        classNameLink="text-white  md:text-[17px] xl:text-[20px] font-semibold  hover:text-orange-600 transition duration-300"
      />

      <div className="flex items-center gap-2.5">
        {/* Language Dropdown */}

        <LanguageDropdown
          className="hidden lg:block relative mr-[22px]"
          colortxtButton="text-white  hover:text-orange-600 transition duration-300"
        />

        {/* Buttons */}

        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onLoginClick?.();
          }}
          className="hidden lg:block text-white md:text-[17px] xl:text-[20px] font-semibold  mr-[22px] hover:text-orange-600 transition duration-300"
        >
          Login
        </Link>

        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onSignupClick?.();
          }}
          className="hidden md:w-24  xl:w-[168px] lg:flex justify-center items-center bg-[#FA8B02] text-white px-2.5 md:py-3 xl:py-6 rounded-[50px] md:text-[17px] xl:text-[20px] font-semibold  hover:bg-orange-600 transition duration-300"
        >
          Sign up
        </Link>
      </div>

      {/* Mobile Menu  */}

      <MobileMenu links={links} />
    </nav>
  );
};

export default Navbar;
