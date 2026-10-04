import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    stars: 5,
    text: "Our wedding couture is an inimitable artisanal display of bridal wear collection inspired by Indian traditions & eccentricities. It is a tribute to the confident modern-age bride.",
    author: "Suviksha",
    location: "Trivandrum",
  },
  {
    id: 2,
    stars: 5,
    text: "Hey I received your product ! I was'nt sure about the quality but OMG i'm so happy .. Worth every penny, I really liked the piece and packing. Thank you so much.",
    author: "Anju",
    location: "Tamilnadu",
  },
  {
    id: 3,
    stars: 5,
    text: "I have recieved your neckpieces today. Both of them looking so beautiful & elegent Special appreciation for shristhi in prefect packing and quick delivery",
    author: "Athulya",
    location: "Kerala",
  },
  {
    id: 4,
    stars: 5,
    text: "The quality of the jewellery is top notch! The shine and detail are just as shown in the picture. Will definitely order again soon.",
    author: "Priya",
    location: "Bangalore",
  },
];

export default function CustomerStories() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full bg-white py-5 md:py-16 px-4 relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto relative">
        
        {/* Editorial Header */}
        <div className="relative mb-10 md:mb-12 flex flex-col items-center justify-center text-center px-4">
          {/* Ghost Background Typography */}
          <span className="absolute -top-5 md:-top-8 inset-x-0 font-serif text-5xl sm:text-7xl md:text-8xl uppercase tracking-[0.2em] text-stone-200/60 font-bold select-none pointer-events-none z-0">
            REVIEWS
          </span>

          {/* Status Pill Badge */}
          <div className="relative z-10 inline-flex items-center gap-2 bg-stone-100 border border-stone-200 px-4 py-1.5 rounded-full mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e48f76] animate-pulse" />
            <span className="text-[#e48f76] font-mono text-xs font-semibold tracking-[0.3em] uppercase">
              ✦ Real Feedback
            </span>
          </div>

          {/* Main Section Title */}
          <h2 className="relative z-10 font-serif text-2xl md:text-4xl uppercase tracking-widest text-stone-900 leading-tight">
            Customer Stories
          </h2>

          {/* Symmetric Framing Accent */}
          <div className="relative z-10 flex items-center gap-3 mt-3">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#e48f76]" />
            <span className="text-[#e48f76] text-xs">✦</span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#e48f76]" />
          </div>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative px-4 sm:px-10">
          {/* Left Arrow Button */}
          <button
            ref={prevRef}
            aria-label="Previous Story"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#e48f76] text-black hover:bg-[#e48f76] hover:text-white transition-colors cursor-pointer flex items-center justify-center shadow-xs"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            ref={nextRef}
            aria-label="Next Story"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#e48f76] text-black hover:bg-[#e48f76] hover:text-white transition-colors cursor-pointer flex items-center justify-center shadow-xs"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
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
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="w-full"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-[#e48f76] p-6 sm:p-8 rounded-xs h-full flex flex-col justify-between text-center min-h-[260px]">
                  {/* Rating Stars */}
                  <div className="flex justify-center items-center gap-1 mb-4 text-white">
                    {[...Array(item.stars)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-white text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {item.text}
                  </p>

                  {/* Author Info */}
                  <div className="text-right text-xs sm:text-sm">
                    <p className="font-semibold text-black">- {item.author}</p>
                    <p className="text-white/80 text-[11px]">{item.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}