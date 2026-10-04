import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

const bestSellerProducts = [
  {
    id: 1,
    title: "Leafy Affair Tarusa Pendant Set",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
    originalPrice: "949",
    discountedPrice: "569",
    discount: "-40%",
    link: "/product/leafy-affair-tarusa-pendant-set",
  },
  {
    id: 2,
    title: "Fractals In Nature Symmetra Enamel Pendant",
    image: "https://images.unsplash.com/photo-1611591475155-4282fc289e84?q=80&w=800&auto=format&fit=crop",
    originalPrice: "699",
    discountedPrice: "419",
    discount: "-40%",
    link: "/product/fractals-in-nature-symmetra-enamel-pendant",
  },
  {
    id: 3,
    title: "Meherbaan Chandbali Tassel Drop Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
    originalPrice: "1,449",
    discountedPrice: "869",
    discount: "-40%",
    link: "/product/meherbaan-chandbali-tassel-drop-earrings",
  },
  {
    id: 4,
    title: "Phulwari Neelika Oxidised Floral Dangler Earrings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
    originalPrice: "749",
    discountedPrice: "449",
    discount: "-40%",
    link: "/product/phulwari-neelika-oxidised-floral-dangler-earrings",
  },
];

export default function BestSellers() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full bg-[#faf8f5] py-10 md:py-14 px-2 sm:px-4 md:px-6 relative overflow-hidden">
      <div className="w-full mx-auto">
        
        {/* Editorial Header */}
        <div className="relative mb-8 md:mb-10 flex flex-col items-center justify-center text-center px-4">
          {/* Ghost Background Typography */}
          <span className="absolute -top-5 md:-top-8 inset-x-0 font-serif text-5xl sm:text-7xl md:text-8xl uppercase tracking-[0.2em] text-stone-200/60 font-bold select-none pointer-events-none z-0">
            POPULAR
          </span>

          {/* Status Pill Badge */}
          <div className="relative z-10 inline-flex items-center gap-2 bg-stone-100 border border-stone-200 px-4 py-1.5 rounded-full mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e48f76] animate-pulse" />
            <span className="text-[#e48f76] font-mono text-xs font-semibold tracking-[0.3em] uppercase">
              ✦ Customer Favorites
            </span>
          </div>

          {/* Main Section Title */}
          <h2 className="relative z-10 font-serif text-2xl md:text-4xl uppercase tracking-widest text-stone-900 leading-tight">
            Best Sellers
          </h2>

          {/* Symmetric Framing Accent */}
          <div className="relative z-10 flex items-center gap-3 mt-3">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#e48f76]" />
            <span className="text-[#e48f76] text-xs">✦</span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#e48f76]" />
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full">
          {/* Left Arrow Button */}
          <button
            ref={prevRef}
            aria-label="Previous Slide"
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-xs shadow-md border border-white/20 cursor-pointer"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            ref={nextRef}
            aria-label="Next Slide"
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-xs shadow-md border border-white/20 cursor-pointer"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
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
              480: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="w-full"
          >
            {bestSellerProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="group flex flex-col h-full bg-white text-center rounded-sm p-3 shadow-xs border border-stone-100">
                  
                  {/* Product Image Box */}
                  <div className="relative aspect-square w-full overflow-hidden bg-[#e8ded4] mb-3 rounded-xs">
                    <a href={product.link} className="block w-full h-full">
                      <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </a>

                    {/* Discount Badge */}
                    <div className="absolute top-2 right-2 bg-[#ea8875] text-white text-[11px] font-medium px-2 py-0.5 tracking-wider shadow-xs">
                      {product.discount}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <a href={product.link}>
                        <h3 className="text-xs sm:text-sm font-normal text-stone-800 line-clamp-2 hover:text-[#ea8875] transition-colors leading-relaxed min-h-[2.5rem]">
                          {product.title}
                        </h3>
                      </a>

                      {/* Pricing */}
                      <div className="mt-2 mb-3 flex items-center justify-center gap-2 text-xs sm:text-sm">
                        <span className="line-through text-stone-400 font-normal">
                          ₹{product.originalPrice}
                        </span>
                        <span className="font-semibold text-stone-900">
                          ₹{product.discountedPrice}
                        </span>
                      </div>
                    </div>

                    {/* Action Bar (Add to Cart + Wishlist Heart) */}
                    <div className="flex items-center gap-2 pt-1">
                      <button className="flex-1 bg-[#ea8875] hover:bg-[#d77865] text-white text-[11px] sm:text-xs font-medium py-2.5 px-3 uppercase tracking-wider transition-colors duration-200 cursor-pointer rounded-xs">
                        ADD TO CART
                      </button>

                      <button 
                        aria-label="Add to Wishlist"
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-stone-200 text-stone-500 hover:text-red-500 hover:border-red-400 transition-colors cursor-pointer shrink-0 bg-white"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-4.364-6.364C14.162 6.318 13.01 7.02 12 8.125c-1.01-1.105-2.162-1.807-3.318-1.807z" />
                        </svg>
                      </button>
                    </div>

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