import { FiChevronDown } from "react-icons/fi";
import IconWithText from "./IconWithTxt";

interface SearchFieldProps {
  icon: string;
  label: string;
  options: string[];
  selected: string;
  onSelect?: (value: string) => void;
}

const FilterOptionBox = ({
  icon,
  label,
  options,
  selected,
  onSelect,
}: SearchFieldProps) => {
  return (
    <div className="flex items-center gap-2 bg-white px-4 py-3 w-full max-w-[260px] ">
      <div className="flex flex-col flex-1 ">
        <IconWithText
          iconSrc={icon}
          text={label}
          textClassName="text-[14px]  xl:text-[18px] font-semibold  text-[#333333]"
        />
        <div className="relative">
          <select
            className=" w-full text-black font-semibold bg-transparent outline-none"
            value={selected}
            onChange={(e) => onSelect?.(e.target.value)}
          >
            {options?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <FiChevronDown className="absolute right-0 top-1/3 transform -translate-y-1 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default FilterOptionBox;
