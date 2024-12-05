import React from "react";

type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className="mx-auto max-w-[976px] lg:w-full p-8">{children}</div>;
};
