import React from "react";
import {
  FaCube,
  FaWindowMaximize,
  FaCloud,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa6";

const ecosystemData = [
  {
    title: "ZNX Token",
    description:
      "The native currency powering transactions, access, and governance.",
    icon: <FaCube />,
    color: "cyan",
  },
  {
    title: "Web3 Applications",
    description:
      "A suite of decentralized tools designed for ease of use and high security.",
    icon: <FaWindowMaximize />,
    color: "pink",
  },
  {
    title: "Digital Services",
    description:
      "Integrating real-world utility by partnering with online service providers.",
    icon: <FaCloud />,
    color: "cyan",
  },
  {
    title: "Partnerships",
    description:
      "Collaborations to expand the reach and acceptance of ZNX.",
    icon: <FaHandshake />,
    color: "pink",
  },
  {
    title: "Future Innovation",
    description:
      "Constant R&D to stay ahead of blockchain trends.",
    icon: <FaLightbulb />,
    color: "cyan",
  },
];

const Ecosystem = () => {
  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden bg-[#07040d] px-5 py-20 text-white sm:px-8 lg:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-250px] top-[100px] h-[400px] w-[400px] rounded-full bg-fuchsia-700/20 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-[48px]font-bold sm:text-4xl lg:text-5xl">
            ZENIX Ecosystem Pillars
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ecosystemData.map((item, index) => (
            <div
              key={index}
              className="min-h-[145px] rounded-xl border border-white/10 bg-white/[0.035] p-5 text-center transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]"
            >
              {/* Icon */}
           <div
  className={`mb-5 flex items-center justify-center text-xl ${
    item.color === "pink" ? "text-fuchsia-500" : "text-cyan-400"
  }`}
>
  {item.icon}
</div>


              <h3 className="text-base text-[24px] font-medium text-gray-200">
                {item.title}
              </h3>

              <p className="mt-3 text-[13px] leading-5 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;