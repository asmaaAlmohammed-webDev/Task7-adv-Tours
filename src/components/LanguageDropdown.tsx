"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface Props {
  className?: string;
  colortxtButton?: string;
}

const LanguageDropdown = ({ className = "", colortxtButton = "" }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("Eng");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center md:text-[17px] xl:text-[20px] font-semibold  cursor-pointer ${colortxtButton} `}
      >
        {language} <FiChevronDown className="ml-1" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-28 bg-gray-300 rounded shadow z-10 mb-2">
          <button
            onClick={() => toggleLanguage("Eng")}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Eng
          </button>
          <button
            onClick={() => toggleLanguage("Arb")}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Arb
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
