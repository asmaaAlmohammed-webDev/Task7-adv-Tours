"use client";
import { useState } from "react";

const BikeBooksForm = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const options = [
    { value: "", label: "Select the service types" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };
  return (
    <form className="bg-[#FFFFFF4D] p-[30px] rounded-3xl  ">
      <div className="flex flex-wrap gap-7 justify-center items-center mb-7">
        <div className="flex flex-col gap-2 ">
          <label
            htmlFor="name"
            className="text-[18px] font-semibold text-[#333333]"
          >
            Name and Surname
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name and surname"
            className="border border-[#ccc] bg-white px-6 py-3.5 rounded-[8px] text-[16px] text-[#333333] font-normal w-[218px] md:w-[318px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-[18px] font-semibold text-[#333333]"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            className="border border-[#ccc] bg-white px-6 py-3.5 rounded-[8px] text-[16px] text-[#333333] font-normal w-[218px] md:w-[318px]"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-7 justify-center items-center mb-7">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="tele-num"
            className="text-[18px] font-semibold text-[#333333]"
          >
            Telephone Number
          </label>
          <input
            id="tele-num"
            type="tel"
            placeholder="Enter your telephone number"
            className="border border-[#ccc] bg-white px-6 py-3.5 rounded-[8px] text-[16px] text-[#333333] font-normal w-[218px] md:w-[318px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="select-field"
            className="text-[18px] font-semibold text-[#333333]"
          >
            Service Type
          </label>
          <select
            id="select-field"
            value={selectedOption}
            onChange={handleChange}
            className="border border-[#ccc] bg-white text-[#3333339b] px-6 py-3.5 rounded-[8px] text-[16px]   font-normal w-[218px] md:w-[318px]"
          >
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-wrap gap-7 justify-center items-center">
        <div className="flex flex-col gap-2 relative">
          <label
            htmlFor="date"
            className="text-[18px] font-semibold text-[#333333]"
          >
            Date
          </label>
          <input
            id="date"
            type="date"
            placeholder="Select the date"
            className=" border border-[#ccc] bg-white px-6 py-3.5 rounded-[8px] text-[16px] text-[#333333] font-normal w-[218px] md:w-[318px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="time"
            className="text-[18px] font-semibold text-[#333333]"
          >
            Time
          </label>
          <input
            id="time"
            type="time"
            placeholder="Select the time"
            className="border border-[#ccc] bg-white px-6 py-3.5 rounded-[8px] text-[16px] text-[#333333]  font-normal w-[218px] md:w-[318px]"
          />
        </div>
      </div>
    </form>
  );
};

export default BikeBooksForm;
