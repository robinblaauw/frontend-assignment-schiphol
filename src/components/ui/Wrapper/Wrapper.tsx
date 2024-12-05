import React from "react";

type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className="mx-auto max-w-[1280px] lg:w-full p-8">{children}</div>;
};
