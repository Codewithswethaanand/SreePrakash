import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

// Swiper core and module styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Image Imports (Banners)
import banner1Desktop from "../../assets/banner/banner-1.webp";
import banner1Mobile from "../../assets/banner/banner-1Mob.webp";

import banner2Desktop from "../../assets/banner/banner-2.webp";
import banner2Mobile from "../../assets/banner/banner-2Mob.webp";

import banner3Desktop from "../../assets/banner/banner-3.webp";
import banner3Mobile from "../../assets/banner/banner-3Mob.webp";

import banner5Desktop from "../../assets/banner/banner-5.webp";
import banner5Mobile from "../../assets/banner/banner-5Mob.webp";

import banner6Desktop from "../../assets/banner/banner-6.webp";
import banner6Mobile from "../../assets/banner/banner-6Mob.webp";

import banner7Desktop from "../../assets/banner/banner-7.webp";
import banner7Mobile from "../../assets/banner/banner-7Mob.webp";

import banner8Desktop from "../../assets/banner/banner-8.webp";
import banner8Mobile from "../../assets/banner/banner-8Mob.webp";

import banner9Desktop from "../../assets/banner/banner-9.webp";
import banner9Mobile from "../../assets/banner/banner-9Mob.webp";

const banners = [
  {
    desktop: banner1Desktop,
    mobile: banner1Mobile,
    alt: "Premium gold jewellery collection banner",
  },
  {
    desktop: banner2Desktop,
    mobile: banner2Mobile,
    alt: "Diamond jewellery festive collection banner",
  },
  {
    desktop: banner3Desktop,
    mobile: banner3Mobile,
    alt: "Wedding jewellery collection banner",
  },
  {
    desktop: banner5Desktop,
    mobile: banner5Mobile,
    alt: "Navratri special offer jewellery banner",
  },
  {
    desktop: banner6Desktop,
    mobile: banner6Mobile,
    alt: "Royal heritage silver collection banner",
  },
  {
    desktop: banner7Desktop,
    mobile: banner7Mobile,
    alt: "Everyday luxury jewellery collection banner",
  },
  {
    desktop: banner8Desktop,
    mobile: banner8Mobile,
    alt: "Festive sparkle new arrivals banner",
  },
  {
    desktop: banner9Desktop,
    mobile: banner9Mobile,
    alt: "Exclusive designer collection banner",
  },
];

export default function HeroCarousel() {
  return (
    <section className="w-full overflow-hidden relative">
      <style>
        {`
          /* Customize active pagination dot indicator */
          .heroSwiper .swiper-pagination-bullet-active {
            background-color: #000000 !important; 
          }
        `}
      </style>

      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 3500, // Changes automatically every 3.5 seconds
          disableOnInteraction: false, // Keeps auto-changing even after manual swipes
        }}
        pagination={{
          clickable: true,
        }}
        className="heroSwiper"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <picture className="block w-full">
              {/* MOBILE IMAGE */}
              <source media="(max-width: 768px)" srcSet={banner.mobile} />

              {/* DESKTOP IMAGE */}
              <img
                src={banner.desktop}
                alt={banner.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="w-full h-auto md:h-[550px] lg:h-[650px] object-cover object-center block"
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}