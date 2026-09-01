import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VisionMission = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".timeline-item");

      items.forEach((item) => {
        const dot = item.querySelector(".timeline-dot");
        const line = item.querySelector(".timeline-line");
        const content = item.querySelector(".timeline-content");

        // Initial state
        gsap.set(dot, {
          opacity: 0,
          scale: 0,
        });

        gsap.set(content, {
          opacity: 0,
          y: 20,
        });

        gsap.set(line, {
          scaleY: 0,
          transformOrigin: "top center",
        });

        // Animation for EACH point
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        tl.to(dot, {
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: "back.out(2)",
        })
          .to(
            content,
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.15"
          )
          .to(
            line,
            {
              scaleY: 1,
              duration: 0.7,
              ease: "power2.out",
            },
            "-=0.25"
          );
      });
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="about-us"
      className="relative overflow-hidden bg-[#05030a] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      {/* Background Purple Glow */}
      <div className="pointer-events-none absolute -bottom-20 left-0 h-[250px] w-[300px] rounded-full bg-purple-700/20 blur-[100px] sm:h-[350px] sm:w-[400px] lg:-bottom-40 lg:h-[400px] lg:w-[500px] lg:blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}

          <div>
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[38px]">
              Building a Smarter

              <span className="mt-1 block text-fuchsia-500">
                Decentralized Future
              </span>
            </h2>

            <p className="mt-5 max-w-[520px] text-sm leading-6 text-gray-400 sm:text-base">
              In a rapidly evolving digital landscape, true utility and
              sustainable growth are paramount. Zenix (ZNX) is created to
              bridge the gap between complex blockchain technology and
              everyday digital applications. We are building a foundation
              for transparent, efficient, and community-driven digital
              interactions.
            </p>
          </div>

          {/* ================= RIGHT TIMELINE ================= */}

          <div className="relative space-y-12">

            {/* ================= VISION ================= */}

            <div className="timeline-item relative min-h-[125px] pl-7 sm:pl-8">

              {/* Purple Dot */}
              <div
                className="timeline-dot absolute left-0 top-[8px] z-10"
              >
                <div className="h-[8px] w-[8px] rounded-full bg-fuchsia-500 shadow-[0_0_14px_rgba(217,70,239,0.9)]" />
              </div>

              {/* Purple Vertical Line */}
              <div
                className="timeline-line absolute left-[3px] top-[22px] h-[110px] w-[1px] bg-gradient-to-b from-fuchsia-500 via-fuchsia-500/50 to-transparent"
              />

              {/* Content */}
              <div className="timeline-content">
                <h3 className="text-lg font-bold text-white sm:text-xl lg:text-[22px]">
                  OUR VISION
                </h3>

                <p className="mt-2 max-w-[500px] text-sm leading-6 text-gray-400">
                  To establish a thriving, interconnected digital ecosystem
                  where ZNX serves as the primary standard for decentralized
                  utility, enabling seamless value exchange and access to
                  innovative web3 services globally.
                </p>
              </div>
            </div>

            {/* ================= MISSION ================= */}

            <div className="timeline-item relative min-h-[125px] pl-7 sm:pl-8">

              {/* Cyan Dot */}
              <div
                className="timeline-dot absolute left-0 top-[8px] z-10"
              >
                <div className="h-[8px] w-[8px] rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
              </div>

              {/* Cyan Vertical Line */}
              <div
                className="timeline-line absolute left-[3px] top-[22px] h-[110px] w-[1px] bg-gradient-to-b from-cyan-400 via-cyan-400/50 to-transparent"
              />

              {/* Content */}
              <div className="timeline-content">
                <h3 className="text-lg font-bold text-white sm:text-xl lg:text-[22px]">
                  OUR MISSION
                </h3>

                <p className="mt-2 max-w-[500px] text-sm leading-6 text-gray-400">
                  To provide a secure, low-friction, and highly scalable token
                  on the BNB Smart Chain that empowers users, rewards community
                  participation, and integrates smoothly into diverse digital
                  platforms.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;