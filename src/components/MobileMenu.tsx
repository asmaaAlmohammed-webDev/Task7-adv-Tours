"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NavLinkItem } from "@/types/NavLinksType";
import LanguageDropdown from "../components/LanguageDropdown";

interface MobileMenuProps {
  links: NavLinkItem[];
}

const MobileMenu = ({ links }: MobileMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(true)}
        className="block lg:hidden text-gray-800 focus:outline-none"
      >
        <Image
          src="/assets/imgs/nav-icons/menu.svg"
          alt="menu"
          width={50}
          height={50}
        />
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white px-4 pb-4 pt-2 space-y-3 flex flex-col items-center justify-center gap-10 h-screen transition-opacity duration-700 ease-in-out opacity-100 py-3.5 rounded-[10px] w-[90%] mx-auto mt-2.5 shadow-2xs">
          {/* menu bttons*/}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-800 focus:outline-none"
          >
            <Image
              src="/assets/imgs/nav-icons/exit.svg"
              alt="exit"
              width={50}
              height={50}
            />
          </button>

          {/* links*/}
          {links?.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#FA8B02] hover:underline text-[20px] font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Language Dropdown */}
          <LanguageDropdown className="mb-10" />

          {/* login & signup buttons*/}
          <Link
            href="/login"
            className="block text-gray-800 text-[25px]"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/signup"
            onClick={() => setIsMenuOpen(false)}
            className="bg-[#FA8B02] text-white text-[25px] px-2.5 py-3 rounded-[50px] flex justify-center items-center w-[200px] mx-auto"
          >
            Sign up
          </Link>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
