import React from "react";
import { MemoryDetail } from "../types/types";

type MemoryProps = {
  memory: MemoryDetail;
};

export type MemoryTestProps = {
    memory ?: MemoryDetail;
  };
  

function Memory({ memory }: MemoryProps) {
  return (
    <>
      <div className="relative my-16 md:mb-7">
        <div className="traveler-container flex items-center justify-between gap-16 xl:gap-9 lg:flex-col-reverse">
          <div className="flex items-center justify-start lg:justify-center w-full max-w-xl">
            <img
              className="w-auto h-[55vh] object-fill"
              src={memory.img}
              alt="memory-img"
            />
          </div>
          <div className="grid items-center w-full max-w-2xl lg:text-center">
            <h1 className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg">
              {memory.title}
            </h1>
            <h1 className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg">
              {memory.subtitle}
            </h1>
            <p className="text-base my-5 sm:text-sm">{memory.text}</p>
            <div className="grid items-center grid-cols-3 gap-7 xl:gap-3">
              {memory.experience?.map((elm, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-emerald-500 to-green-300 rounded-lg h-auto w-auto flex items-center justify-center flex-col text-slate-900
                       text-center py-7 xl:p-5 px-5 filter cursor-pointer hover:scale-105 transition-all duration-400"
                >
                  <h1 className="text-3xl xl:text-2xl sm:text-xl font-bold">
                    {elm.number}
                  </h1>
                  <p className="text-lg xl:text-base sm:text-sm xs:text-xs font-medium">
                    {elm.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Memory;
