import React from "react";

const CTA = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#07040d] px-5 py-20 sm:px-8 md:py-24"
    >
      {/* Purple background glow */}
      <div className="pointer-events-none absolute left-[-250px] bottom-[-200px] h-[500px] w-[500px] rounded-full bg-fuchsia-700/25 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        {/* CTA Box */}
        <div className="rounded-2xl border border-fuchsia-500/50 bg-gradient-to-r from-[#15131b] via-[#121218] to-[#111116] px-6 py-10 text-center shadow-[0_0_25px_rgba(217,70,239,0.45)] sm:px-10 sm:py-12 md:py-14">
          
          <h2 className="text-[48px] font-bold tracking-tight text-gray-100 sm:text-4xl md:text-5xl">
            Step Into the ZENIX Ecosystem
          </h2>

          {/* Buttons */}
          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            
            {/* Buy Button */}
            <a
              href="#tokenomics"
              className="rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/30 transition duration-300 hover:-translate-y-1 hover:shadow-fuchsia-500/50"
            >
              Buy ZNX
            </a>

            {/* Community Button */}
            <a
              href="#"
              className="rounded-full border border-cyan-400/50 px-7 py-3 text-sm font-medium text-cyan-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-400/10"
            >
              Join Community
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;