import { FiFileText } from "react-icons/fi";
import StatCard from "./StatCard";
import Heroimg from '../assets/Herosub-Img.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#05030a]"
    >
      {/* PURPLE GLOW EFFECTS */}
      <div className="pointer-events-none absolute -right-20 top-20 h-[300px] w-[300px] rounded-full bg-purple-700/20 blur-[120px] sm:h-[400px] sm:w-[400px] lg:-right-40 lg:top-40 lg:h-[500px] lg:w-[500px] lg:blur-[150px]" />
      
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[200px] w-[300px] rounded-full bg-fuchsia-700/10 blur-[100px] sm:h-[300px] sm:w-[400px] lg:left-1/3 lg:h-[350px] lg:w-[500px] lg:blur-[150px]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-10 lg:pt-32">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            <h1 className="font-semibold text-3xl leading-tight tracking-tight sm:text-4xl sm:leading-[1.15] md:text-5xl md:leading-[1.15] lg:text-[52px] lg:leading-[1.1] xl:text-[60px]">
              <span className="block text-orange-500">
                Powering the Future of
              </span>
              <span className="block text-white">
                Decentralized Digital
              </span>
              <span className="block text-white">
                Utility
              </span>
            </h1>

            <p className="mt-5 max-w-[550px] text-[18px] leading-relaxed text-gray-400 sm:text-base sm:leading-relaxed lg:mt-6 lg:text-lg lg:leading-relaxed">
              Zenix Token (ZNX) is a next-generation BEP-20 digital asset
              built on the BNB Smart Chain, designed to provide seamless,
              secure, and scalable utility across a rapidly expanding
              decentralized ecosystem.
            </p>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <button className="flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-medium tracking-wide text-white shadow-[0_0_25px_rgba(255,90,20,0.35)] transition-transform duration-200 hover:scale-105 sm:px-9 sm:py-4 sm:text-[15px]">
                BUY ZNX
              </button>

              <button className="flex items-center gap-2 rounded-full border border-cyan-400 px-5 py-3.5 text-sm font-semibold tracking-wide text-cyan-300 transition-all duration-200 hover:bg-cyan-400 hover:text-black sm:px-6 sm:text-[15px]">
                VIEW WHITEPAPER
                <FiFileText className="text-lg" />
              </button>
            </div>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:mt-14 lg:grid-cols-4">
              <StatCard
                title="Total Supply"
                value="1,330,000"
                orange
              />
              <StatCard
                title="Token Symbol"
                value="ZNX"
              />
              <StatCard
                title="Token Standard"
                value="BEP-20"
              />
              <StatCard
                title="Network"
                value="BSC"
              />
            </div>
          </div>

          {/* RIGHT TOKEN IMAGE */}
          <div className="order-1 flex items-center justify-center lg:order-2">
            <div className="relative flex items-center justify-center">
              {/* OUTER GLOW */}
              <div className="absolute h-[250px] w-[250px] rounded-full bg-cyan-400/30 blur-[80px] sm:h-[300px] sm:w-[300px] lg:h-[350px] lg:w-[350px] lg:blur-[120px]" />

              {/* BLACK CIRCLE BACKGROUND */}
              <div className="relative z-10 flex items-center justify-center rounded-full bg-black shadow-[0_0_45px_rgba(0,220,255,0.55)] h-[200px] w-[200px] sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] lg:h-[380px] lg:w-[380px] xl:h-[410px] xl:w-[410px]">
                <img
                  src={Heroimg}
                  alt="Zenix Token"
                  className="h-[140px] w-[140px] rounded-full object-cover sm:h-[200px] sm:w-[200px] md:h-[240px] md:w-[240px] lg:h-[300px] lg:w-[300px] xl:h-[320px] xl:w-[320px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;