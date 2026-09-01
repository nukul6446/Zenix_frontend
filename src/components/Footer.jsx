import React from "react";
import {
  FaTelegramPlane,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import zenixLogo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#07040d] text-white">
      
      {/* Main Footer */}
      <div className="mx-auto grid max-w-[1250px] gap-12 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        
        {/* Logo Section */}
        <div>
          <img
            src={zenixLogo}
            alt="Zenix Logo"
            className="h-auto w-[130px] object-contain"
          />

          <p className="mt-7 max-w-[210px] text-sm leading-6 text-gray-400">
            Powering the Future of
            <br />
            Decentralized Digital Utility.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-5 text-xs font-bold tracking-[2px] text-gray-300">
            NAVIGATION
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a
                href="#home"
                className="transition hover:text-fuchsia-400"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="transition hover:text-fuchsia-400"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#use-cases"
                className="transition hover:text-fuchsia-400"
              >
                Use Cases
              </a>
            </li>

            <li>
              <a
                href="#roadmap"
                className="transition hover:text-fuchsia-400"
              >
                Roadmap
              </a>
            </li>

            <li>
              <a
                href="#ecosystem"
                className="transition hover:text-fuchsia-400"
              >
                Ecosystem
              </a>
            </li>

            <li>
              <a
                href="#tokenomics"
                className="transition hover:text-fuchsia-400"
              >
                Tokenomics
              </a>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="mb-5 text-xs font-bold tracking-[2px] text-gray-300">
            COMMUNITY
          </h3>

          <ul className="space-y-4 text-sm text-gray-400">
            
            <li>
              <a
                href="#"
                className="flex items-center gap-3 transition hover:text-cyan-400"
              >
                <FaTelegramPlane className="text-lg text-gray-300" />
                Telegram
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 transition hover:text-cyan-400"
              >
                <FaXTwitter className="text-lg text-gray-300" />
                Twitter
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 transition hover:text-cyan-400"
              >
                <FaYoutube className="text-lg text-gray-300" />
                Youtube
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 transition hover:text-cyan-400"
              >
                <FaFacebookF className="text-lg text-gray-300" />
                Facebook
              </a>
            </li>

          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="mb-5 text-xs font-bold tracking-[2px] text-gray-300">
            RESOURCES
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a
                href="#"
                className="transition hover:text-fuchsia-400"
              >
                Contract Address
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:text-fuchsia-400"
              >
                BscScan
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition hover:text-fuchsia-400"
              >
                PancakeSwap
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto max-w-[900px] text-center">
          
          <p className="text-xs text-gray-500">
            © 2026 ZENIX. All rights reserved.
          </p>

          <p className="mx-auto mt-4 max-w-[800px] text-[10px] leading-5 text-gray-500">
            Disclaimer: The information provided on this website does not
            constitute investment advice, financial advice, trading advice, or
            any other sort of advice and you should not treat any of the
            website's content as such. The Zenix team does not recommend that
            any cryptocurrency should be bought, sold, or held by you. Do
            conduct your own due diligence and consult your financial advisor
            before making any investment decisions.
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;