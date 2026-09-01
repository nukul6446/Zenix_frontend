import React from "react";
import Toka from "../assets/tokenize.png";
const tokenData = [
  {
    parameter: "Total Supply",
    detail: "1,330,000 ZNX",
  },
  {
    parameter: "Token Standard",
    detail: "BEP-20 (BNB Smart Chain)",
  },
  {
    parameter: "Token Name",
    detail: "Zenix Token",
  },
  {
    parameter: "Token Symbol",
    detail: "ZNX",
  },
  {
    parameter: "Decimals",
    detail: "18",
  },
  {
    parameter: "Launch Price",
    detail: "$0.50 USD",
  },
  {
    parameter: "Liquidity",
    detail: "100% Locked at Launch",
  },
];

const Tokenomics = () => {
  return (
    <section
      id="tokenomics"
      className="relative overflow-hidden bg-[#07040d] px-5 py-20 text-white sm:px-8 lg:px-10"
    >
      {/* Purple Glow */}
      <div className="pointer-events-none absolute bottom-[-250px] left-[-150px] h-[450px] w-[450px] rounded-full bg-fuchsia-700/20 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mb-12 text-center ">
          <h2 className="text-[48px] font-bold sm:text-4xl lg:text-5xl">
            Tokenomics
          </h2>

          <p className="mx-auto mt-4 max-w-[600px] text-sm leading-6 text-gray-400">
            A transparent and sustainable economic model designed for the ZENIX
            ecosystem.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* TABLE */}
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.035]">
            
            {/* Header */}
            <div className="grid grid-cols-2 border-b border-white/10 bg-fuchsia-500/[0.06] px-5 py-5">
              <div className="text-[14px] font-semibold tracking-[1px] text-gray-300">
                PARAMETER
              </div>

              <div className="text-[14px] font-semibold tracking-[1px] text-gray-300">
                DETAIL
              </div>
            </div>

            {/* Rows */}
            {tokenData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-2 border-b border-white/[0.07] px-5 py-5 last:border-none"
              >
                <div className="text-[16px] text-gray-400">
                  {item.parameter}
                </div>

                <div className="text-[16px] font-medium text-gray-200">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>

         <img src={Toka}
         className="h-full w-full object-cover"
         />
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;