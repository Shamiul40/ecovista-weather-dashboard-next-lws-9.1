import React from "react";

export default function Card({ children }) {
  return (
    <div className="grid col-span-12 g lg:col-span-4 gap-6 2xl:col-span-3 gap-5">
      <div className="relative h-full min-h-[290px] max-w-full rounded-2xl bg-[#293A4E] p-5 text-white">
        {children}
      </div>
    </div>
  );
}
