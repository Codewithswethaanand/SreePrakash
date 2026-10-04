import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

// Local Image Imports
import kingsImg from "../../assets/new launch/kings.webp";
import navratanImg from "../../assets/new launch/Navratan.webp";
import gotapattiImg from "../../assets/new launch/gotapatti.webp";
import phulwariImg from "../../assets/new launch/phulwari.webp";
import threadsofroyaltyImg from "../../assets/new launch/threadsofroyalty.webp";
import flowtideImg from "../../assets/new launch/flow tide.webp";
import leafyImg from "../../assets/new launch/leafy.webp";
import natureImg from "../../assets/new launch/nature.webp";
import pillarsoftimeImg from "../../assets/new launch/pillarsoftime.webp";

const launchItems = [
  {
    id: 1,
    title: "Kings & Queens of Rajasthan",
    image: kingsImg,
    link: "/collections/kings-queens-rajasthan",
  },
  {
    id: 2,
    title: "Navratan",
    image: navratanImg,
    link: "/collections/navratan",
  },
  {
    id: 3,
    title: "Gota Patti",
    image: gotapattiImg,
    link: "/collections/gota-patti",
  },
  {
    id: 4,
    title: "Phulwari",
    image: phulwariImg,
    link: "/collections/phulwari",
  },
  {
    id: 5,
    title: "Threads Of Royalty",
    image: threadsofroyaltyImg,
    link: "/collections/threads-of-royalty",
  },
  {
    id: 6,
    title: "Flow Tide",
    image: flowtideImg,
    link: "/collections/flow-tide",
  },
  {
    id: 7,
    title: "Pillars Of Time",
    image: pillarsoftimeImg,
    link: "/collections/pillars-of-time",
  },
  {
    id: 8,
    title: "Leafy Collection",
    image: leafyImg,
    link: "/collections/leafy",
  },
  {
    id: 9,
    title: "Nature's Touch",
    image: natureImg,
    link: "/collections/nature",
  },
];

export default function NewLaunch() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full bg-[#faf8f5] py-12 md:py-16 px-2 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Editorial Header */}
        <div className="relative mb-10 md:mb-12 flex flex-col items-center justify-center text-center px-4">
          {/* Ghost Background Typography */}
          <span className="absolute -top-5 md:-top-8 inset-x-0 font-serif text-5xl sm:text-7xl md:text-8xl uppercase tracking-[0.2em] text-stone-200/60 font-bold select-none pointer-events-none z-0">
            ARRIVALS
          </span>

          {/* Status Pill Badge */}
          <div className="relative z-10 inline-flex items-center gap-2 bg-stone-100 border border-stone-200 px-4 py-1.5 rounded-full mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e48f76] animate-pulse" />
            <span className="text-[#e48f76] font-mono text-xs font-semibold tracking-[0.3em] uppercase">
              ✦ Fresh Collections
            </span>
          </div>

          {/* Main Section Title */}
          <h2 className="relative z-10 font-serif text-2xl md:text-4xl uppercase tracking-widest text-stone-900 leading-tight">
            New Launch
          </h2>

          {/* Symmetric Framing Accent */}
          <div className="relative z-10 flex items-center gap-3 mt-3">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#e48f76]" />
            <span className="text-[#e48f76] text-xs">✦</span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#e48f76]" />
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative px-1 sm:px-4">
          {/* Left Navigation Arrow */}
          <button
            ref={prevRef}
            aria-label="Previous Slide"
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-xs shadow-md border border-white/20 cursor-pointer"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Navigation Arrow */}
          <button
            ref={nextRef}
            aria-label="Next Slide"
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-xs shadow-md border border-white/20 cursor-pointer"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={12}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (swiper.params && swiper.params.navigation) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              });
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="w-full"
          >
            {launchItems.map((item) => (
              <SwiperSlide key={item.id}>
                <a
                  href={item.link}
                  className="block group relative aspect-square w-full overflow-hidden bg-stone-200 rounded-sm shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={1080}
                    height={1080}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}