"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "London", coordinates: [-0.1276, 51.5074], offsetY: -10 },
  { name: "Paris", coordinates: [2.3522, 48.8566], offsetY: -10 },
  { name: "Milan", coordinates: [9.1900, 45.4642], offsetY: -10 },
  { name: "Dubai", coordinates: [55.2708, 25.2048], offsetY: -10 }
];

export const AboutUnyta = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="about" className="w-full py-24 bg-[#F9F6F6] flex flex-col items-center overflow-hidden scroll-mt-24">
      <div className="max-w-[1096px] mx-auto px-6 w-full flex flex-col items-center text-center">
        
        {/* LOGO */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex justify-center"
        >
          <Image 
            src="/image.png" 
            alt="Unyta Logo Mark" 
            width={54} 
            height={54} 
            className="object-contain"
            quality={100}
            style={{ 
              height: "auto",
              filter: "brightness(0) saturate(100%) invert(11%) sepia(34%) saturate(4529%) hue-rotate(346deg) brightness(91%) contrast(98%)" 
            }}
          />
        </motion.div>

        {/* TITLE */}
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="font-cormorant font-semibold text-[36px] md:text-[42px] uppercase text-[#571111] mb-8"
        >
          ABOUT UNYTA
        </motion.h2>

        {/* PARAGRAPHS */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-sans font-medium text-[#22000C] text-base md:text-lg max-w-[926px] mb-8 leading-relaxed"
        >
          &ldquo;We created Unyta to make collaborations simpler, more transparent, and rewarding. Our vision: a world where creators and brands connect authentically.&rdquo;
        </motion.p>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="font-sans font-light text-[#22000C] text-[15px] md:text-[18px] max-w-[1022px] mb-10 leading-relaxed"
        >
          Founded with a shared passion for influencer collaborations, Unyta brings together a community of vetted creators and forward-thinking brands. We believe the best collaborations come from genuine connections — and that&apos;s exactly what we&apos;re building.
        </motion.p>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="font-sans font-medium text-[#22000C] text-[15px] md:text-[18px] max-w-[1022px] mb-16 leading-relaxed"
        >
          Unyta supports creators and brands globally, with curated experience collaborations soon available in:<br/>
          <span className="text-[#741717] leading-loose">London, Paris, Milan, Dubai.</span>
        </motion.p>

        {/* MAP CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="w-full max-w-[1096px] h-[250px] sm:h-[350px] md:h-[565px] bg-[#EFEBE9] rounded-[20px] md:rounded-[32px] overflow-hidden relative border border-black/5 flex items-center justify-center pointer-events-none"
        >
          {mounted && (
            <ComposableMap 
              projection="geoMercator" 
              projectionConfig={{ center: [20, 38], scale: 680 }}
              style={{ width: "100%", height: "100%", outline: "none" }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#E2D9D4"
                      stroke="#d0c3be"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {markers.map(({ name, coordinates, offsetY }) => (
                <Marker key={name} coordinates={coordinates}>
                  <circle r={5} fill="#741717" />
                  <text
                    textAnchor="middle"
                    y={offsetY}
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fill: "#541409", fontWeight: 500 }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          )}
        </motion.div>

      </div>
    </section>
  );
};
