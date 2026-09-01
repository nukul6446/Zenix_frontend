import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "HOME",
    "ABOUT US",
    "USE CASES",
    "ROADMAP",
    "ECOSYSTEM",
    "TOKENOMICS",
    "FAQ",
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#07040d]">
      <nav className="mx-auto flex h-[70px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* LOGO */}
        <a href="#" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Zenix"
            className="h-10 w-auto object-contain sm:h-12 md:h-14 lg:h-16"
          />
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden  ml-40   lg:flex items-center gap-6 xl:gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
              className="text-[11px] xl:text-[13px] font-medium tracking-[1.5px] text-gray-300 transition-colors duration-200 hover:text-white whitespace-nowrap"
            >
              {link}
            </a>
          ))}
        </div>
 
{/* DESKTOP BUTTONS */}
<div className="hidden lg:flex items-center gap-3">
  <button
    className="
      rounded-full border border-cyan-400
      px-4 md:px-5 xl:px-6   /* skip lg, only grow at xl */
      py-2.5
      text-[11px] sm:text-[12px] md:text-[13px] xl:text-[14px] /* skip lg */
      font-semibold tracking-wide text-cyan-300
      transition-all duration-200 hover:bg-cyan-400 hover:text-black
    "
  >
    Connect Wallet
  </button>

  <button
    className="
      rounded-full bg-gradient-to-r from-orange-500 to-orange-600
      px-5 md:px-6 xl:px-7   /* skip lg */
      py-2.5
      text-[11px] sm:text-[12px] md:text-[13px] xl:text-[14px]
      font-semibold tracking-wide text-white
      shadow-[0_0_20px_rgba(255,90,20,0.4)]
      transition-transform duration-200 hover:scale-105
    "
  >
    Buy ZNX
  </button>
</div>



        {/* MOBILE BUTTON */}
      <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="flex h-10 w-10 items-center justify-center text-2xl text-white transition-colors hover:text-cyan-400 lg:hidden"
  aria-label="Toggle menu"
>
  {menuOpen ? <FiX /> : <FiMenu />}
</button>
      </nav>

      {/* MOBILE MENU */}
     <div
  className={`lg:hidden border-t border-white/10 bg-[#07040d] overflow-hidden transition-all duration-300 ease-in-out ${
    menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
  }`}
>
        <div className="px-6 py-6 flex flex-col gap-5">
    {links.map((link) => (
      <a
        key={link}
        href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
        onClick={() => setMenuOpen(false)}
        className="text-sm sm:text-base tracking-[2px] text-gray-300 transition-colors hover:text-white"
      >
        {link}
      </a>
    ))}

             <div className="mt-2 flex flex-col gap-3">
      <button className="w-full rounded-full border border-cyan-400 px-6 py-3 text-sm sm:text-base lg:text-[15px] font-semibold text-cyan-300 transition-all hover:bg-cyan-400 hover:text-black">
        Connect Wallet
      </button>

      <button className="w-full rounded-full bg-orange-500 px-6 py-3 text-sm sm:text-base lg:text-[15px] font-semibold text-white transition-transform hover:scale-[1.02]">
        Buy ZNX
      </button>
    </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;