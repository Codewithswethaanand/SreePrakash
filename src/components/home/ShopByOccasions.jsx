import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import wedding from "../../assets/occasions/wedding.jpg";
import party from "../../assets/occasions/party.jpg";
import festive from "../../assets/occasions/festival.avif";
import office from "../../assets/occasions/office.webp";
import gifting from "../../assets/occasions/gifting.jpg";
import anniversary from "../../assets/occasions/anniversary.webp";
import birthday from "../../assets/occasions/birthday.jpeg";
import everyday from "../../assets/occasions/everyday.jpeg";

const occasions = [
  { id: 1, name: "Wedding", slug: "wedding", subtitle: "Grand Celebrations", image: wedding },
  { id: 2, name: "Party", slug: "party", subtitle: "Glamour & Shine", image: party },
  { id: 3, name: "Festive", slug: "festive", subtitle: "Traditional Magic", image: festive },
  { id: 4, name: "Office Wear", slug: "office-wear", subtitle: "Subtle Sophistication", image: office },
  { id: 5, name: "Daily", slug: "daily", subtitle: "Effortless Charm", image: gifting },
  { id: 6, name: "Anniversary", slug: "anniversary", subtitle: "Timeless Romance", image: anniversary },
  { id: 7, name: "Birthday", slug: "birthday", subtitle: "Celebratory Sparkle", image: birthday },
  { id: 8, name: "Everyday", slug: "everyday", subtitle: "Modern Essentials", image: everyday },
];

export default function ShopByOccasions() {
  const [active, setActive] = useState(0);

  const CARD_WIDTH = 360;
  const CARD_GAP = 24;
  const TOTAL_ITEMS = occasions.length;

  const next = () => {
    setActive((prev) => (prev + 1) % TOTAL_ITEMS);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + TOTAL_ITEMS) % TOTAL_ITEMS);
  };

  const extendedOccasions = [
    ...occasions.slice(-2).map((item) => ({ ...item, virtualId: `prev-${item.id}` })),
    ...occasions.map((item) => ({ ...item, virtualId: `main-${item.id}` })),
    ...occasions.slice(0, 2).map((item) => ({ ...item, virtualId: `next-${item.id}` })),
  ];

  const displayIndex = active + 2;

  return (
    <section className="bg-white py-12 md:py-16 px-0 w-full overflow-hidden">
      {/* Editorial Header */}
      <div className="relative mb-10 md:mb-12 flex flex-col items-center justify-center text-center px-4">
        {/* Ghost Background Typography */}
        <span className="absolute -top-5 md:-top-8 inset-x-0 font-serif text-5xl sm:text-7xl md:text-8xl uppercase tracking-[0.2em] text-stone-200/60 font-bold select-none pointer-events-none z-0">
          OCCASIONS
        </span>

        {/* Status Pill Badge */}
        <div className="relative z-10 inline-flex items-center gap-2 bg-stone-100 border border-stone-200 px-4 py-1.5 rounded-full mb-3 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e48f76] animate-pulse" />
          <span className="text-[#e48f76] font-mono text-xs font-semibold tracking-[0.3em] uppercase">
            ✦ Curated Edits
          </span>
        </div>

        {/* Main Section Title */}
        <h2 className="relative z-10 font-serif text-2xl md:text-4xl uppercase tracking-widest text-stone-900 leading-tight">
          Shop By Occasion
        </h2>

        {/* Symmetric Framing Accent */}
        <div className="relative z-10 flex items-center gap-3 mt-3">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#e48f76]" />
          <span className="text-[#e48f76] text-xs">✦</span>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#e48f76]" />
        </div>
      </div>

      {/* Carousel Track */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex items-center transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(50% - ${
              displayIndex * (CARD_WIDTH + CARD_GAP) + CARD_WIDTH / 2
            }px))`,
            gap: `${CARD_GAP}px`,
          }}
        >
          {extendedOccasions.map((item, idx) => {
            const isCentered = idx === displayIndex;

            return (
              <div
                key={item.virtualId}
                onClick={() => {
                  const realIndex = (idx - 2 + TOTAL_ITEMS) % TOTAL_ITEMS;
                  setActive(realIndex);
                }}
                className={`transition-all duration-500 flex-shrink-0 cursor-pointer ${
                  isCentered
                    ? "scale-100 z-20 opacity-100"
                    : "scale-90 opacity-50 hover:opacity-80"
                }`}
                style={{ width: `${CARD_WIDTH}px` }}
              >
                <Link to={`/collections/${item.slug}`} className="block">
                  <div className="relative group rounded-2xl overflow-hidden bg-stone-950 border border-stone-200/80 shadow-2xl transition-all duration-500">
                    {/* Slightly Larger Height Image Container */}
                    <div className="h-[460px] sm:h-[500px] md:h-[540px] w-full overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      
                      {/* Dark Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-85 group-hover:opacity-70 transition-opacity duration-500" />
                    </div>

                    {/* Floating Corner Number Badge */}
                    <span className="absolute top-5 left-5 font-mono text-xs text-[#e48f76] bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#e48f76]/30 font-medium">
                      0{item.id}
                    </span>

                    {/* Card Details Overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
                      <span className="text-[11px] uppercase tracking-[0.25em] text-stone-300 font-light mb-1">
                        {item.subtitle}
                      </span>
                      
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-xl md:text-2xl tracking-wider text-white uppercase group-hover:text-[#e48f76] transition-colors">
                          {item.name}
                        </h3>
                        <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white text-sm group-hover:bg-[#e48f76] group-hover:text-white group-hover:border-[#e48f76] transition-all duration-300">
                          ↗
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-stone-950/80 text-white border border-stone-800 hover:bg-[#e48f76] hover:border-[#e48f76] hover:text-white transition-all shadow-xl rounded-full w-11 h-11 md:w-12 md:h-12 flex items-center justify-center z-30 backdrop-blur-md cursor-pointer"
          aria-label="Previous Slide"
        >
          <FaChevronLeft className="text-sm" />
        </button>

        <button
          onClick={next}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-stone-950/80 text-white border border-stone-800 hover:bg-[#e48f76] hover:border-[#e48f76] hover:text-white transition-all shadow-xl rounded-full w-11 h-11 md:w-12 md:h-12 flex items-center justify-center z-30 backdrop-blur-md cursor-pointer"
          aria-label="Next Slide"
        >
          <FaChevronRight className="text-sm" />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="flex justify-center items-center gap-2 mt-8 md:mt-10">
        {occasions.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActive(index)}
            className={`rounded-full transition-all duration-300 ${
              active === index ? "w-8 h-2.5 bg-[#e48f76]" : "w-2.5 h-2.5 bg-stone-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}