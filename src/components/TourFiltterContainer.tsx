"use client";
import { useState } from "react";
import TabsSelector from "./TabsSelector";
import FilterOptionBox from "./FilterOptionBox";
import SearchButton from "./SearchBtn";
import { filterOptionsData } from "@/data/FiltterOptionBoxData";

const TourFiltterContainer = () => {
  const [selectedTab, setSelectedTab] = useState("public");
  const [formState, setFormState] = useState({
    people: "Choose number",
    date: "Choose Date",
    time: "Choose Time",
    tour: "Select Tour",
    transport: "Select Transportation",
  });

  const tabOptions = [
    {
      label: "Public Tours",
      value: "public",
      styling: "rounded-tr-[0] rounded-br-[0] rounded-bl-[0]",
    },
    {
      label: "Private Tours",
      value: "private",
      styling: "rounded-tl-[0] rounded-br-[0] rounded-bl-[0]",
    },
  ];

  return (
    <div className="bg-[#FFFFFF33] backdrop-blur-md rounded-[12px] p-5 w-full max-w-[1383px] mx-auto mt-[60px]">
      <TabsSelector
        tabs={tabOptions}
        selected={selectedTab}
        onChange={setSelectedTab}
      />

      <div className="flex flex-wrap xl:flex-nowrap gap-4 items-center bg-white p-3 rounded-[12px] rounded-tl-[0px]">
        {filterOptionsData?.map((item) => (
          <FilterOptionBox
            key={item.label}
            icon={item.icon}
            label={item.label}
            selected={formState[item.selectedKey as keyof typeof formState]}
            options={item.options}
            onSelect={(value) =>
              setFormState((prev) => ({
                ...prev,
                [item.selectedKey]: value,
              }))
            }
          />
        ))}
        <SearchButton className="w-12 h-12 lg:w-20 lg:h-20 !px-0 !py-0 flex-shrink-0" />
      </div>
    </div>
  );
};

export default TourFiltterContainer;
