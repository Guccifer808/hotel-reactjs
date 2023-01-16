import React from "react";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper";
//
import Img1 from "../assets/img/heroSlider/1.jpg";
import Img2 from "../assets/img/heroSlider/2.jpg";
import Img3 from "../assets/img/heroSlider/3.jpg";

//Slider content
const slides = [
  {
    title: "Spectacular Rooms For Your Vacation",
    bg: Img1,
    btnText: "Our Best Offers",
  },
  {
    title: "Luxury Hotel For Your Vacation",
    bg: Img2,
    btnText: "Our Best Offers",
  },
  {
    title: "Award-Winning International Design Suites",
    bg: Img3,
    btnText: "Our Best Offers",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      className="heroSlider h-[600px] lg:h-[860px]"
      modules={[EffectFade, Autoplay]}
      effect="fade"
      speed={900}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
    >
      {slides.map((slide, index) => {
        const { title, bg, btnText } = slide;
        return (
          <SwiperSlide
            className="relative flex h-full items-center justify-center"
            key={index}
          >
            <div className="z-20 text-center text-white">
              <div className="my-5 py-10 font-additional font-semibold uppercase tracking-[4px]">
                Houston Hotels & SPA
              </div>
              <h1 className="mb-4 max-w-[920px] px-2 font-primary text-[2rem] uppercase leading-tight tracking-wide drop-shadow-2xl lg:text-[48px]">
                {title}
              </h1>
              {/* button */}
              <button className="btn btn-lg btn-primary mx-auto mt-10">
                {btnText}
              </button>
            </div>
            <div className="absolute top-0 h-full w-full">
              <img
                src={bg}
                alt={title}
                className="h-full w-full object-cover"
              />
            </div>
            {/* dark overlay for slides */}
            <div className="absolute h-full w-full bg-black/25"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
