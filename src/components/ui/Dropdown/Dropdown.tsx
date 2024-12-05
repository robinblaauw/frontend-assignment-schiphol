import React from "react";

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
    <div>
      <select
        className="w-full text-sm max-w-md p-4 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-afternoon-blue focus:border-afternoon-blue"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
