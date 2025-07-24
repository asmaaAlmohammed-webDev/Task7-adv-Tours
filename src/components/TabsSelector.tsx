"use client";

interface Tab {
  label: string;
  value: string;
  styling?: string;
}

interface TabsSelectorProps {
  tabs: Tab[];
  selected: string;
  onChange: (value: string) => void;
  className?: string;
  classNameBtn?: string;
}

const TabsSelector = ({
  tabs,
  selected,
  onChange,
  className = "",
}: TabsSelectorProps) => {
  return (
    <div className={`flex ${className}`}>
      {tabs?.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={`p-4  font-semibold text-[18px] transition duration-300 ease-in-out rounded-[12px] cursor-pointer ${
            tab.styling
          }
            ${
              selected === tab.value
                ? "bg-white text-[#FA8B02] "
                : "bg-[#FFFFFF66] text-white  hover:border-[#FA8B02] hover:text-[#FA8B02]"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabsSelector;
