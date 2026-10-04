import React from "react";

const trustItems = [
  {
    id: 1,
    title: "45,000+ Happy Customers",
    icon: (
      <svg className="w-8 h-8 md:w-11 md:h-11 stroke-[#ff9673]" viewBox="0 0 24 24" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18h18v2H3z" />
        <path d="M4 18l1-10 4 4 3-7 3 7 4-4 1 10" />
        <circle cx="5" cy="7" r="1" fill="currentColor" />
        <circle cx="12" cy="4" r="1" fill="currentColor" />
        <circle cx="19" cy="7" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "4.8/5 Customer Rating",
    icon: (
      <svg className="w-8 h-8 md:w-11 md:h-11 stroke-[#ff9673]" viewBox="0 0 24 24" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Trusted Since 2017",
    icon: (
      <svg className="w-8 h-8 md:w-11 md:h-11 stroke-[#ff9673]" viewBox="0 0 24 24" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Secure Payments",
    icon: (
      <svg className="w-8 h-8 md:w-11 md:h-11 stroke-[#ff9673]" viewBox="0 0 24 24" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Premium Collection",
    icon: (
      <svg className="w-8 h-8 md:w-11 md:h-11 stroke-[#ff9673]" viewBox="0 0 24 24" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 12L2 9z" />
        <path d="M11 3l-3 6 4 12" />
        <path d="M13 3l3 6-4 12" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Best Quality",
    icon: (
      <svg className="w-8 h-8 md:w-11 md:h-11 stroke-[#ff9673]" viewBox="0 0 24 24" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Worldwide Shipping",
    icon: (
      <svg className="w-8 h-8 md:w-11 md:h-11 stroke-[#ff9673]" viewBox="0 0 24 24" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
];

export default function WhyTrustUs() {
  return (
    <section className="w-full bg-[#faf8f5] py-10 md:py-10">
      {/* Import Serif font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,600&display=swap');
          
          .trust-main-title {
            font-family: 'Cormorant Garamond', Georgia, serif;
          }
        `}
      </style>

      <div className="max-w-[1650px] mx-auto px-2 sm:px-3">
        {/* Section Heading matching brand typographic style */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="trust-main-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#222222] font-semibold uppercase">
            WHY TRUST US
          </h2>
        </div>

        {/* 
            Grid Layout:
            - Mobile (<768px): Shows 3 columns with ONLY items 1-3 visible in 1 clean row
            - Tablet/Desktop (>=768px): Shows 7 columns with ALL items visible
        */}
        <div className="grid grid-cols-3 md:grid-cols-7 gap-x-2 md:gap-x-4 items-start justify-items-center">
          {trustItems.map((item, index) => (
            <div
              key={item.id}
              className={`${
                index >= 3 ? "hidden md:flex" : "flex"
              } flex-col items-center text-center group cursor-default w-full px-1`}
            >
              {/* Icon */}
              <div className="mb-2 md:mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                {item.icon}
              </div>

              {/* Title Text */}
              <p className="text-xs md:text-sm lg:text-base font-semibold text-gray-900 leading-snug md:leading-tight">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}