import React from "react";
import {
  FaMoneyBillTransfer,
  FaCircleNodes,
  FaTableCellsLarge,
  FaBriefcase,
  FaLink,
} from "react-icons/fa6";

const useCases = [
  {
    number: "01",
    title: "Ecosystem Payments",
    description:
      "Facilitating fast, low-cost transactions across all partnered platforms and upcoming Zenix digital products.",
    icon: <FaMoneyBillTransfer />,
    color: "cyan",
  },
  {
    number: "02",
    title: "Platform Utility",
    description:
      "Access premium features, exclusive content, and advanced tools within the broader Zenix network.",
    icon: <FaCircleNodes />,
    color: "purple",
  },
  {
    number: "03",
    title: "Web3 Applications",
    description:
      "Serving as the core medium of exchange in upcoming decentralized applications built within the Zenix ecosystem.",
    icon: <FaTableCellsLarge />,
    color: "cyan",
  },
  {
    number: "04",
    title: "Digital Services",
    description:
      "Pay for subscriptions, digital assets, and online services securely and anonymously.",
    icon: <FaBriefcase />,
    color: "purple",
  },
  {
    number: "05",
    title: "Future Integrations",
    description:
      "Continuous expansion into gaming, NFTs, and decentralized finance (DeFi) protocols to maximize Zenix utility and demand.",
    icon: <FaLink />,
    color: "cyan",
    wide: true,
  },
];

const UseCases = () => {
  return (
    <section
      id="use-cases"
      className="relative overflow-hidden bg-[#07040d] px-6 py-20 text-white lg:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-200px] top-[200px] h-[400px] w-[400px] rounded-full bg-fuchsia-700/20 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-[48px] font-bold md:text-4xl">
            Use Cases
          </h2>

          <p className="mt-3 text-[18px] text-gray-400">
            Discover the practical applications driving ZNX utility.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => (
            <div
              key={item.number}
              className={`relative min-h-[160px] overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 ${
                item.wide ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Number */}
              <span
                className={`absolute right-5 top-3 text-xl font-medium ${
                  item.color === "purple"
                    ? "text-fuchsia-500/50"
                    : "text-cyan-400/50"
                }`}
              >
                {item.number}
              </span>

              {/* Icon */}
              <div
                className={`mb-4 text-[36px] ${
                  item.color === "purple"
                    ? "text-fuchsia-500"
                    : "text-cyan-400"
                }`}
              >
                {item.icon}
              </div>

              <h3 className="text-[32px] font-bold text-gray-100">
                {item.title}
              </h3>

              <p className="mt-3 max-w-[500px] text-[16px] leading-5 text-gray-400">
                {item.description}
              </p>

              {/* subtle bottom glow */}
              <div
                className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 hover:w-full ${
                  item.color === "purple"
                    ? "bg-fuchsia-500"
                    : "bg-cyan-400"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;