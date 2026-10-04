import React from "react";

// Image Imports from assets/categories
import necklacesCat from "../../assets/categories/necklaces-cat1.webp";
import necklacesMob from "../../assets/categories/necklaces-1Mob.webp";

import earringsCat from "../../assets/categories/earrings-cat2.webp";
import earringsMob from "../../assets/categories/earrings-2Mob.webp";

import banglesCat from "../../assets/categories/bangles-3cat.webp";
import banglesMob from "../../assets/categories/bangles-3Mob.webp";

import vaddanamsCat from "../../assets/categories/vaddanams-4cat.webp";
import vaddanamsMob from "../../assets/categories/vaddanams-4Mob.webp";

import otherCat from "../../assets/categories/other-5cat.webp";
import otherMob from "../../assets/categories/other-5Mob.webp";

import premiumCat from "../../assets/categories/premimum-6cat.webp";
import premiumMob from "../../assets/categories/premium-6Mob.webp";

const categories = [
  {
    id: 1,
    title: "Necklaces",
    desktopImage: necklacesCat,
    mobileImage: necklacesMob,
    link: "/collections/necklaces",
  },
  {
    id: 2,
    title: "Earrings",
    desktopImage: earringsCat,
    mobileImage: earringsMob,
    link: "/collections/earrings",
  },
  {
    id: 3,
    title: "Bangles",
    desktopImage: banglesCat,
    mobileImage: banglesMob,
    link: "/collections/bangles",
  },
  {
    id: 4,
    title: "Vaddanams (Hip Belts)",
    desktopImage: vaddanamsCat,
    mobileImage: vaddanamsMob,
    link: "/collections/vaddanams",
  },
  {
    id: 5,
    title: "Other Accessories",
    desktopImage: otherCat,
    mobileImage: otherMob,
    link: "/collections/accessories",
  },
  {
    id: 6,
    title: "Premium Bridal",
    desktopImage: premiumCat,
    mobileImage: premiumMob,
    link: "/collections/premium-bridal",
  },
];

export default function Categories() {
  return (
    <section className="w-full bg-[#faf8f5] py-12 md:py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Header */}
        <div className="relative mb-10 md:mb-12 flex flex-col items-center justify-center text-center px-4">
          {/* Ghost Background Typography */}
          <span className="absolute -top-5 md:-top-8 inset-x-0 font-serif text-5xl sm:text-7xl md:text-8xl uppercase tracking-[0.2em] text-stone-200/60 font-bold select-none pointer-events-none z-0">
            COLLECTIONS
          </span>

          {/* Status Pill Badge */}
          <div className="relative z-10 inline-flex items-center gap-2 bg-stone-100 border border-stone-200 px-4 py-1.5 rounded-full mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e48f76] animate-pulse" />
            <span className="text-[#e48f76] font-mono text-xs font-semibold tracking-[0.3em] uppercase">
              ✦ Explore Styles
            </span>
          </div>

          {/* Main Section Title */}
          <h2 className="relative z-10 font-serif text-2xl md:text-4xl uppercase tracking-widest text-stone-900 leading-tight">
            Categories
          </h2>

          {/* Symmetric Framing Accent */}
          <div className="relative z-10 flex items-center gap-3 mt-3">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#e48f76]" />
            <span className="text-[#e48f76] text-xs">✦</span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#e48f76]" />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6 relative z-10">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.link}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              {/* Square Image Box */}
              <div className="w-full aspect-square bg-[#ece8e2] overflow-hidden shadow-xs border border-black/5 group-hover:shadow-md transition-all duration-300 relative rounded-xs">
                <picture className="block w-full h-full">
                  <source media="(max-width: 768px)" srcSet={category.mobileImage} />
                  <img
                    src={category.desktopImage}
                    alt={category.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </picture>
              </div>

              {/* Category Title */}
              <h3 className="mt-3 text-xs sm:text-sm font-medium text-stone-800 leading-tight group-hover:text-[#e48f76] transition-colors duration-200 tracking-wide">
                {category.title}
              </h3>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}