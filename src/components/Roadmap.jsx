import React from "react";

const roadmap = [
  {
    phase: "Phase 1:",
    title: "Foundation",
    color: "cyan",
    points: [
      "Smart Contract Development & Auditing",
      "Website Launch & Branding",
      "Initial Community Building (Telegram, X)",
      "Whitepaper Release",
    ],
  },
  {
    phase: "Phase 2:",
    title: "Launch",
    color: "purple",
    points: [
      "PancakeSwap Listing",
      "100% Liquidity Locking",
      "Aggressive Marketing Campaigns",
      "CoinMarketCap & CoinGecko Applications",
    ],
  },
  {
    phase: "Phase 3:",
    title: "Ecosystem",
    color: "cyan",
    points: [
      "Rollout of Initial dApp Integrations",
      "Strategic Partnerships with Web3 Projects",
      "First CEX (Centralized Exchange) Listings",
      "Community Governance Initiatives",
    ],
  },
  {
    phase: "Phase 4:",
    title: "Expansion",
    color: "purple",
    points: [
      "Cross-Chain Interoperability Research",
      "Tier-1 Exchange Listings",
      "Launch of Zenix Exclusive Digital Platforms",
      "Global Mainstream Marketing Push",
    ],
  },
];

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden bg-[#07040d] px-6 py-20 text-white lg:px-10"
    >
      {/* Background Purple Glow */}
      <div className="pointer-events-none absolute right-[-250px] top-[150px] h-[500px] w-[500px] rounded-full bg-fuchsia-700/20 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-[48px] font-bold md:text-4xl">
            Development Roadmap
          </h2>

          <p className="mt-3 text-[18px] text-gray-400">
            Our strategic plan for building the ZENIX ecosystem.
          </p>
        </div>

        {/* Roadmap Cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {roadmap.map((item, index) => (
            <div
              key={index}
              className={`relative min-h-[300px] overflow-hidden rounded-md border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.015] p-6 ${
                item.color === "cyan"
                  ? "border-t-2 border-t-cyan-400"
                  : "border-t-2 border-t-fuchsia-500"
              }`}
            >
              {/* Side Accent */}
              <div

                className={`absolute bottom-0 left-0 h-full w-[2px] ${
                  item.color === "cyan"
                    ? "bg-cyan-400/60"
                    : "bg-fuchsia-500/60"
                }`}
              />

              {/* Title */}
              <h3 className="text-[32px] font-bold text-gray-100">
                {item.phase}
              </h3>

              <h4 className="mt-1 text-[32px] font-bold text-gray-300">
                {item.title}
              </h4>

              {/* Points */}
              <ul className="mt-7 space-y-4">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-[16px]leading-5 text-gray-400"
                  >
                    <span
                      className={`mt-[7px] h-1 w-1 shrink-0 rounded-full ${
                        item.color === "cyan"
                          ? "bg-cyan-400"
                          : "bg-fuchsia-500"
                      }`}
                    />

                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom line */}
              <div
                className={`absolute bottom-0 left-0 h-[1px] w-full ${
                  item.color === "cyan"
                    ? "bg-cyan-400/50"
                    : "bg-fuchsia-500/50"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;