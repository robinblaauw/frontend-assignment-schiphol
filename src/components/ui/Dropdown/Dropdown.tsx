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
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
