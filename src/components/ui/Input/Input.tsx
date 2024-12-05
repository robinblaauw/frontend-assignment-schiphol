import React, { ChangeEvent } from "react";

type Props = {
  placeholder: string;
  value: string;
  onChange: (filterValue: string) => void;
};

export const Input = ({ placeholder, value, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      className="w-full text-sm max-w-md p-4 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-afternoon-blue focus:border-afternoon-blue"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};
