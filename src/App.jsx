import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VisionMission from "./components/VisionMission";
import UseCases from "./components/UseCases";
import Roadmap from "./components/Roadmap";
import Ecosystem from "./components/Ecosystem";
import Tokenomics from "./components/Tokenomics";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
 
const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05030a] text-white">
      
      <Navbar />

      <main>
        <Hero />

        <VisionMission />
 
        <UseCases />

        <Roadmap />
            <Ecosystem />
        <Tokenomics />
                <FAQ />
<CTA />
      </main>
<Footer />
 
    </div>
  );
};

export default App;