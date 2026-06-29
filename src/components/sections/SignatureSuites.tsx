"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Ornament from "@/components/Ornament";

const suites = [
  { src: "/images/suite-1.jpg", alt: "Luxury bedroom suite" },
  { src: "/images/suite-2.jpg", alt: "Premium bedding detail" },
  { src: "/images/suite-3.jpg", alt: "Signature suite balcony view" },
  { src: "/images/suite-4.jpg", alt: "Curated bath sanctuary" },
  { src: "/images/suite-5.jpg", alt: "Designer interior detail" },
];

const slides = [...suites, ...suites, ...suites];
const OFFSET = suites.length;

export default function SignatureSuites() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
    startIndex: OFFSET + 2,
  });
  const [selected, setSelected] = useState(OFFSET + 2);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="suites" className="relative bg-cream-50 py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <Ornament className="text-copper opacity-80 mb-7" width={170} />

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="display-heading text-[24px] md:text-[34px] lg:text-[38px] text-copper-deep text-center mb-5"
          style={{ letterSpacing: "0.04em" }}
        >
          Crafted For Different Ways Of Belonging
        </motion.h2>

        <p className="body-serif text-[16px] md:text-[17px] text-ink/80 text-center max-w-2xl mb-14 leading-[1.85]">
          Whether for personal retreats, long stays, spiritual getaways or
          legacy ownership, White Butter offers a carefully curated collection
          of residences.
        </p>

        <div className="relative w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((s, i) => {
                const isActive = i === selected;
                return (
                  <div
                    key={`${s.src}-${i}`}
                    className="flex-[0_0_42%] md:flex-[0_0_28%] lg:flex-[0_0_22%] px-3 md:px-4"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.05 : 0.85,
                        opacity: isActive ? 1 : 0.55,
                      }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="relative"
                    >
                      <div
                        className={`relative aspect-[3/4] overflow-hidden ${
                          isActive
                            ? "shadow-[0_20px_50px_-10px_rgba(139,74,43,0.35)]"
                            : ""
                        }`}
                        style={{
                          borderRadius: "50% 50% 6px 6px / 18% 18% 4px 4px",
                          border: isActive
                            ? "1px solid rgba(139,74,43,0.5)"
                            : "1px solid transparent",
                        }}
                      >
                        <Image
                          src={s.src}
                          alt={s.alt}
                          fill
                          priority
                          sizes="(min-width:1024px) 22vw, 42vw"
                          className="object-cover"
                          style={{
                            filter: isActive ? "none" : "saturate(0.5) brightness(0.9)",
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            aria-label="Previous suite"
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-cream-50/95 mix-blend-difference hover:scale-110 transition-transform"
          >
            <svg width="28" height="40" viewBox="0 0 28 40">
              <path
                d="M22 4L6 20L22 36"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next suite"
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-cream-50/95 mix-blend-difference hover:scale-110 transition-transform"
          >
            <svg width="28" height="40" viewBox="0 0 28 40">
              <path
                d="M6 4L22 20L6 36"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <motion.h3
          key={selected}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="display-heading text-[20px] md:text-[26px] text-copper-deep mt-12 text-center"
          style={{ letterSpacing: "0.08em" }}
        >
          Signature Suites
        </motion.h3>
        <p className="body-serif italic text-[14px] md:text-[15px] text-ink/70 mt-2 text-center">
          Each designed to bring comfort, elegance and tranquillity together.
        </p>

        <Ornament className="text-copper opacity-80 mt-7" width={170} />
      </div>
    </section>
  );
}
