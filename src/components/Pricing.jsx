import React from "react";
import { pricingOptions } from "../constant";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <div>
      <div className="mt-5 mx-auto">
        <h2 className="text-xl sm:text-4xl font-semibold lg:text-4xl text-neutral-700 text-left ml-20 lg:-mt-14 lg:mr-[360px] mb-8 tracking-wider">
          Plans & Pricing
        </h2>
        <div className="flex flex-wrap">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 p-2 pr-0 -z-50 text-black"
            >
              <div className="p-10 shadow-2xl xl:h-[120vh] lg:h-[130vh] relative bg-white">
                <p className="text-[33px] font-medium mb-3">
                  {option.title}
                  {option.title === "Professional" && (
                    <span className="bg-gradient-to-r from-[#00b289] to-[#00b289] text-transparent bg-clip-text text-[16px] popular-tag">
                      {/* <em><b>(Most popular)</b></em> */}
                      Most Popular
                    </span>
                  )}
                </p>
                <p className="text-[13px] pr-20 mb-4 font-medium text-neutral-600">
                  {option.para}
                </p>
                <p className="mb-8">
                  <span className="text-5xl mt-6 mr-4 font-semibold text-neutral-700">
                    {option.price}
                  </span>
                  <span className="text-neutral-800 tracking-tight text-xl">
                    /Month
                  </span>
                </p>
                <ul>
                  {option.features.map((features, index) => (
                    <li key={index} className="mt-4 flex items-center">
                      <span className="text-[#00b289]">
                        <Check />
                      </span>
                      <span className="ml-2">{features}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="justify-center items-center text-center py-4 px-4 inline-flex xl:w-10/12 sm:w-full w-full h-14 p-5 xl:bottom-10 tracking-tight text-[14px] font-bold text-white hover:bg-[#309880] transition-all duration-500 ease-in-out border bg-[#00b289] rounded-md xl:absolute lg:absolute xl:right-10 mt-20 lg:bottom-4 lg:w-11/12 lg:mx-auto lg:right-3 cursor-pointer"
                >
                  START FREE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
