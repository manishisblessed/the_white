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
    <section
      id="destination"
      className="relative py-20 md:py-24 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #FBF7F0 0%, #F4ECDC 50%, #E8DBC4 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="lg:col-span-5"
        >
          <h2 className="eyebrow text-[20px] md:text-[24px] text-copper-deep mb-2">
            The Destination
          </h2>
          <p
            className="display-heading italic text-[18px] md:text-[22px] mb-7 text-copper-deep/80"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
          >
            An Address Blessed By Proximity
          </p>

          <p className="body-serif text-[16px] md:text-[17px] text-ink/85 leading-[1.85] mb-8">
            Not every residence is built near sacred landmarks. Some become
            extraordinary because of where they stand. Located in the heart of
            modern Vrindavan, White Butter Residences places you moments away
            from the city&apos;s most revered destinations.
          </p>

          <ul className="space-y-3 mb-8">
            {landmarks.map((l, i) => (
              <motion.li
                key={l.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.07 }}
                className="flex items-start gap-4"
              >
                <TempleMarker />
                <div className="flex items-baseline gap-3 flex-1 border-b border-copper/15 pb-2">
                  <span className="display-heading text-[15px] md:text-[16px] text-copper-deep">
                    {l.name}
                  </span>
                  <span className="text-copper/40 mx-1">|</span>
                  <span className="body-serif text-[15px] md:text-[16px] text-ink/80 ml-auto">
                    {l.distance}
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>

          <p className="body-serif italic text-[15px] md:text-[16px] text-copper-deep/85 leading-[1.7]">
            A location that brings you closer
            <br /> to devotion, every single day.
          </p>
        </motion.div>

        {/* Right building render */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 relative"
        >
          <div className="relative w-full aspect-[5/4] md:aspect-[4/3]">
            <Image
              src="/images/destination-building-cropped.png"
              alt="White Butter Residences architectural render"
              fill
              sizes="(min-width:1024px) 58vw, 100vw"
              className="object-contain object-right"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
