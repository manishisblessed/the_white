"use client";

import { motion } from "framer-motion";

const amenities = [
  {
    name: "The White Butter Garden",
    desc: "A rooftop sanctuary designed for reflection, conversation and stillness.",
    icon: <GardenIcon />,
  },
  {
    name: "Curated Retail Boulevard",
    desc: "Thoughtfully selected experiences for everyday convenience and lifestyle.",
    icon: <RetailIcon />,
  },
  {
    name: "Hospitality-Inspired Living",
    desc: "Dedicated services and premium common spaces designed around comfort.",
    icon: <HospitalityIcon />,
  },
  {
    name: "International Design",
    desc: "Crafted by globally acclaimed architects to bring contemporary luxury into a sacred setting.",
    icon: <DesignIcon />,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 80% 60% at 50% 30%, #FBF1DC 0%, #F4ECDC 40%, #E8DBC4 100%)",
      }}
    >
      {/* Sunburst highlight */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(255,225,170,0.6), transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="eyebrow text-[20px] md:text-[26px] text-copper-deep mb-2"
          >
            The Experience
          </motion.h2>
          <p
            className="display-heading text-[22px] md:text-[28px] text-copper-deep mb-4"
            style={{ letterSpacing: "0.05em" }}
          >
            Crafted For Soulful Living
          </p>
          <p className="body-serif italic text-[15px] md:text-[16px] text-ink/75">
            Luxury here is not measured by excess. It is measured by peace.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {amenities.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15 }}
              className="flex flex-col items-center text-center px-2"
            >
              <Pin />
              <div
                className="w-24 h-24 md:w-28 md:h-28 -mt-3 rounded-full border border-copper/60 flex items-center justify-center text-copper-deep mb-5"
                style={{
                  background: "rgba(255,250,240,0.55)",
                  backdropFilter: "blur(2px)",
                }}
              >
                {a.icon}
              </div>
              <h3 className="display-heading text-[14px] md:text-[16px] text-copper-deep mb-2 leading-tight">
                {a.name}
              </h3>
              <p className="body-serif text-[13px] md:text-[14px] text-ink/75 leading-[1.6]">
                {a.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pin() {
  return (
    <svg width="12" height="20" viewBox="0 0 12 20" className="text-copper">
      <path
        d="M5 0 Q5 0, 7 4 Q9 7, 6 18 Q3 7, 5 4 Q5 0, 5 0 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GardenIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M30 8 L18 22 L18 40 L42 40 L42 22 Z" />
      <path d="M30 8 L24 14 L36 14 Z" />
      <path d="M28 40 L28 50 M32 40 L32 50" />
      <path d="M14 50 Q20 44, 24 50 Q26 46, 28 50" strokeLinecap="round" />
      <path d="M46 50 Q40 44, 36 50 Q34 46, 32 50" strokeLinecap="round" />
      <circle cx="30" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}

function RetailIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M14 22 L46 22 L44 50 L16 50 Z" />
      <path d="M14 22 L18 14 L42 14 L46 22" />
      <path d="M24 22 L24 30 M30 22 L30 30 M36 22 L36 30" />
      <rect x="26" y="36" width="8" height="14" />
      <path d="M10 14 L14 14 M10 18 L14 18" strokeLinecap="round" />
    </svg>
  );
}

function HospitalityIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="14" y="32" width="32" height="14" />
      <path d="M18 32 L18 26 Q18 22, 22 22 L38 22 Q42 22, 42 26 L42 32" />
      <path d="M22 32 L22 26 L38 26 L38 32" />
      <path d="M14 46 L14 50 M46 46 L46 50" strokeLinecap="round" />
      <path d="M28 14 L28 22 M32 14 L32 22" strokeLinecap="round" />
      <circle cx="48" cy="20" r="2" />
      <path d="M50 22 L52 26" strokeLinecap="round" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M20 14 L20 46 M40 14 L40 46" />
      <path d="M16 14 L44 14 M16 46 L44 46" />
      <path d="M18 16 Q20 12, 22 16 M38 16 Q40 12, 42 16" />
      <path d="M18 44 Q20 48, 22 44 M38 44 Q40 48, 42 44" />
      <ellipse cx="30" cy="30" rx="4" ry="10" />
      <path d="M24 22 L36 22 M24 38 L36 38" />
    </svg>
  );
}
