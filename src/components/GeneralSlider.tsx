"use client";

import { useRef } from "react";
import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
interface SliderWrapperProps {
  items: ReactNode[];
  customClass?: string;
  breakpoints?: {
    [width: number]: {
      slidesPerView: number;
    };
  };
}

const GeneralSlider = ({
  items,
  customClass = "",
  breakpoints,
}: SliderWrapperProps) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  return (
    <div className={`relative ${customClass}`}>
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (
            typeof swiper.params.navigation === "object" &&
            swiper.params.navigation !== null &&
            prevRef.current &&
            nextRef.current
          ) {
            swiper.params.navigation = {
              ...swiper.params.navigation,
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            };
          }
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop
        spaceBetween={5}
        slidesPerView={items.length < 4 ? items.length : 4}
        breakpoints={breakpoints}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div className="absolute top-[-100px] lg:top-[-130px] md:top-[-180px] right-0 flex gap-2 z-50 md:mt-8">
        <button
          ref={prevRef}
          className="custom-prev flex w-[50px] h-[50px] items-center justify-center rounded-full bg-[#D9D9D9] text-white hover:opacity-80 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          ref={nextRef}
          className="custom-next flex w-[50px] h-[50px] items-center justify-center rounded-full bg-[#FA8B02] text-white hover:opacity-80 transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default GeneralSlider;
