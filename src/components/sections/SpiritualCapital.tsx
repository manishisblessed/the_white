"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const temples = [
  { src: "/images/banke-bihari.jpg", name: "Banke Bihari Temple" },
  { src: "/images/prem-mandir.jpg", name: "Prem Mandir" },
  { src: "/images/iskcon.jpg", name: "ISKCON Temple" },
  { src: "/images/chandrodaya.png", name: "Chandrodaya Mandir" },
];

export default function SpiritualCapital() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
  });

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="spiritual"
      className="relative bg-cream-100 py-20 md:py-28 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at center, #F4ECDC 0%, #E8DBC4 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="The Spiritual Capital"
          subtitle="Home to sacred landmarks that have inspired devotion for generations."
          align="center"
          className="mb-14"
        />

        {/* Frame container */}
        <div className="relative copper-frame px-6 md:px-10 py-10 md:py-14 bg-transparent">
          {/* Inner thin corners (decorative tick marks) */}
          <CornerTicks />

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {temples.map((t, i) => {
                const isActive = i === selected;
                return (
                  <div
                    key={t.name}
                    className="flex-[0_0_70%] md:flex-[0_0_56%] lg:flex-[0_0_48%] px-3 md:px-5"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1 : 0.92,
                        opacity: isActive ? 1 : 0.55,
                      }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="relative"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={t.src}
                          alt={t.name}
                          fill
                          sizes="(min-width:1024px) 48vw, 70vw"
                          className={`object-cover transition-all duration-700 ${
                            isActive ? "" : "sepia-[0.7] saturate-50"
                          }`}
                          style={{
                            filter: isActive ? "none" : "sepia(0.65) saturate(0.6) brightness(0.85)",
                          }}
                        />
                      </div>
                      <div
                        className={`mt-3 mx-auto w-fit px-8 py-2 transition-opacity duration-500 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                          background: "rgba(244,236,220,0.95)",
                          border: "1px solid rgba(139,74,43,0.4)",
                        }}
                      >
                        <p
                          className="display-heading text-[16px] md:text-[20px] text-copper-deep text-center whitespace-nowrap"
                          style={{ letterSpacing: "0.06em" }}
                        >
                          {t.name}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="absolute left-1 md:left-3 top-1/2 -translate-y-1/2 text-cream-50 hover:text-white transition-colors"
          >
            <svg width="28" height="40" viewBox="0 0 28 40" fill="none">
              <path
                d="M22 4L6 20L22 36"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="absolute right-1 md:right-3 top-1/2 -translate-y-1/2 text-cream-50 hover:text-white transition-colors"
          >
            <svg width="28" height="40" viewBox="0 0 28 40" fill="none">
              <path
                d="M6 4L22 20L6 36"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <p className="text-center mt-10 italic body-serif text-copper-deep/85 text-[15px] md:text-[17px]">
          Where devotion transcends ritual and becomes emotion.
        </p>
      </div>
    </section>
  );
}

function CornerTicks() {
  const cls = "absolute w-4 h-4 border-copper/60";
  return (
    <>
      <span className={`${cls} border-l border-t top-0 left-0`} />
      <span className={`${cls} border-r border-t top-0 right-0`} />
      <span className={`${cls} border-l border-b bottom-0 left-0`} />
      <span className={`${cls} border-r border-b bottom-0 right-0`} />
    </>
  );
}
