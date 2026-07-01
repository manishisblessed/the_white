"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const landmarks = [
  { name: "Prem Mandir", distance: "200m" },
  { name: "ISKCON Temple", distance: "800m" },
  { name: "Premanand Ji Maharaj Ashram", distance: "1 km" },
  { name: "Chandrodaya Mandir", distance: "2 km" },
  { name: "Banke Bihari Temple", distance: "3 km" },
];

function TempleMarker() {
  return (
    <svg width="14" height="20" viewBox="0 0 14 20" className="flex-shrink-0 mt-1 text-copper">
      <path
        d="M7 0 Q7 0, 9 4 Q11 6, 10 9 L10 18 L4 18 L4 9 Q3 6, 5 4 Q7 0, 7 0 Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}

export default function Destination() {
  return (
    <section id="destination" className="overflow-hidden">
      {/* ── Mobile: stacked layout (text then image) ── */}
      <div className="md:hidden bg-cream-50">
        <div className="px-6 py-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="eyebrow text-[20px] text-copper-deep mb-2">
              The Destination
            </h2>
            <p
              className="display-heading text-[18px] mb-7 text-ink"
              style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 600 }}
            >
              An Address Blessed By Proximity
            </p>

            <p className="body-serif text-[16px] text-ink leading-[1.85] mb-8">
              Not every residence is built near sacred landmarks. Some become
              extraordinary because of where they stand. Located in the heart of
              modern Vrindavan, White Butter Residences places you moments away
              from the city&apos;s most revered destinations.
            </p>

            <ul className="space-y-2.5 mb-8">
              {landmarks.map((l, i) => (
                <motion.li
                  key={l.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.07 }}
                  className="flex items-center gap-2"
                >
                  <TempleMarker />
                  <span className="display-heading text-[14px] text-copper-deep" style={{ fontWeight: 600 }}>
                    {l.name}
                  </span>
                  <Image
                    src="/images/candle.png"
                    alt=""
                    width={8}
                    height={16}
                    className="object-contain opacity-80"
                  />
                  <span className="body-serif text-[14px] text-copper-deep tabular-nums ml-4">
                    {l.distance}
                  </span>
                </motion.li>
              ))}
            </ul>

            <p className="body-serif text-[15px] text-copper-deep leading-[1.7]" style={{ fontWeight: 600 }}>
              A location that brings you closer
              <br /> to devotion, every single day.
            </p>
          </motion.div>
        </div>

        <div className="relative w-full h-[320px]">
          <Image
            src="/images/destination-building-cropped.png"
            alt="White Butter Residences architectural render"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* ── Desktop: original overlaid layout ── */}
      <div className="hidden md:block relative min-h-[700px]">
        <Image
          src="/images/destination-building-cropped.png"
          alt="White Butter Residences architectural render"
          fill
          sizes="100vw"
          className="object-cover object-right"
          priority={false}
        />

        <div className="absolute inset-0 destination-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="max-w-md lg:max-w-lg"
          >
            <h2 className="eyebrow text-[24px] text-copper-deep mb-2">
              The Destination
            </h2>
            <p
              className="display-heading text-[22px] mb-7 text-ink"
              style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 600 }}
            >
              An Address Blessed By Proximity
            </p>

            <p className="body-serif text-[17px] text-ink leading-[1.85] mb-8">
              Not every residence is built near sacred landmarks. Some become
              extraordinary because of where they stand. Located in the heart of
              modern Vrindavan, White Butter Residences places you moments away
              from the city&apos;s most revered destinations.
            </p>

            <ul className="space-y-2.5 mb-8">
              {landmarks.map((l, i) => (
                <motion.li
                  key={l.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.07 }}
                  className="flex items-center gap-2"
                >
                  <TempleMarker />
                  <span className="display-heading text-[15px] text-copper-deep" style={{ fontWeight: 600 }}>
                    {l.name}
                  </span>
                  <Image
                    src="/images/candle.png"
                    alt=""
                    width={8}
                    height={16}
                    className="object-contain opacity-80"
                  />
                  <span className="body-serif text-[15px] text-copper-deep tabular-nums ml-4">
                    {l.distance}
                  </span>
                </motion.li>
              ))}
            </ul>

            <p className="body-serif text-[16px] text-copper-deep leading-[1.7]" style={{ fontWeight: 600 }}>
              A location that brings you closer
              <br /> to devotion, every single day.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
