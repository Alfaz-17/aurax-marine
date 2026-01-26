"use client"

import React from "react";

export const MarineLoader = () => {
  return (
    <div className="w-full h-[350px] flex justify-center items-center rounded-xl">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 border-[10px] border-white/20 border-t-accent rounded-[70%] animate-spin"></div>
        <h1 className="mt-4 text-[#0A3D62] text-2xl font-bold"></h1>
      </div>
    </div>
  );
};
