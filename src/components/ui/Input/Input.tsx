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
      className="w-full max-w-md px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};
