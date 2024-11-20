import React from "react";

type Props = {
  children: React.ReactNode;
};
export default function Container({ children }: Props) {
  return (
    <div className="flex flex-col max-w-7xl min-h-screen mx-auto bg-white/[2%]">
      {children}
    </div>
  );
}
