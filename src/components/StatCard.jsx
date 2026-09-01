import React from "react";

const StatCard = ({ title, value, orange }) => {
  return (
    <div className="min-w-[135px] rounded-md border border-white/10 bg-white/[0.035] px-3 py-4.5 backdrop-blur-sm">
      <p className="text-[12px] text-gray-400">
        {title}
      </p>

      <p
        className={`mt-1 text-[24px] font-semibold ${
          orange ? "text-orange-500" : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
};

export default StatCard;