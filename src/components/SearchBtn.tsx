"use client";
import { FiSearch } from "react-icons/fi";

interface SearchButtonProps {
  onClick?: () => void;
  className?: string;
}

const SearchButton = ({ onClick, className = "" }: SearchButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`flex items-center justify-center gap-2 p-6 bg-[#FA8B02] text-white rounded-[12px] hover:bg-orange-600 transition duration-300 cursor-pointer ${className}`}
    >
      <FiSearch className="w-5 h-5" />
    </button>
  );
};

export default SearchButton;
