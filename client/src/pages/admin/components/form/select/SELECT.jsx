import React, { useState } from "react";
import { FaGenderless } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const SELECT = ({
  Icon = <FaGenderless />,
  label = "Label",
  options = [],
  ...props
}) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-full flex flex-col gap-1 cursor-pointer">
      <label
        className="block text-sm font-medium text-gray-500"
        htmlFor={props?.id}
      >
        {label}
      </label>
      <div className="h-[3rem] relative flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
        {/* Icon container */}
        <span className="h-full flex items-center justify-center px-3 bg-gray-100 rounded-l-md">
          <Icon className="text-gray-400" />
        </span>

        {/* Custom Select */}
        <select
          className="w-full flex-1 h-full cursor-pointer border-none focus:outline-none rounded-r-md appearance-none pr-8 px-3"
          value={selectedOption}
          onChange={handleChange}
          {...props}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Dropdown arrow */}
        <span className="absolute right-2 pointer-events-none">
          <FiChevronDown className="text-gray-400" />
        </span>
      </div>
    </div>
  );
};

export default SELECT;
