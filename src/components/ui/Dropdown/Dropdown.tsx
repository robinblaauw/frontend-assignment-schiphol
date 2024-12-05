import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type DropdownProps = {
  options: string[];
  value: string;
  onChange: (newValue: string) => void;
};

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <div className="relative max-w-md">
      <select
        className="pr-8 w-full text-sm p-4 bg-white rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-afternoon-blue focus:border-afternoon-blue"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="absolute top-1/2 right-2 w-4 h-4 text-schiphol-blue transform -translate-y-1/2 pointer-events-none" />
    </div>
  );
};
