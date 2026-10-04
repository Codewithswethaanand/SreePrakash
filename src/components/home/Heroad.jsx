import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Image Imports (Banners)
import banner1Desktop from "../../assets/banner2ad/earrings2ad.webp";
import banner2Desktop from "../../assets/banner2ad/Necklace_Sets2ad.webp";
import banner3Desktop from "../../assets/banner2ad/noseeings2ad.webp";
import banner5Desktop from "../../assets/banner2ad/Rings2ad.webp";

const banners = [
  {
    image: banner1Desktop,
    alt: "Earrings banner",
  },
  {
    image: banner2Desktop,
    alt: "Necklace sets banner",
  },
  {
    image: banner3Desktop,
    alt: "Nose rings banner",
  },
  {
    image: banner5Desktop,
    alt: "Rings banner",
  },
];

export default function HeroCarousel() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Custom Pagination Bullet Styling */}
      <style>
        {`
          .heroSwiper .swiper-pagination-bullet {
            background-color: #ffffff !important;
            opacity: 0.6;
            width: 10px;
            height: 10px;
            transition: all 0.3s ease;
          }
          .heroSwiper .swiper-pagination-bullet-active {
            background-color: #000000 !important;
            opacity: 1;
            width: 28px;
            border-radius: 5px;
          }
        `}
      </style>

      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="heroSwiper w-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <img
                src={banner.image}
                alt={banner.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="w-full h-auto object-cover block"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}