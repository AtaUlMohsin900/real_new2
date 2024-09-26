import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const ProjectSlider = () => {
  return (
    <div className="project__text-slider-w">
      <Swiper
        slidesPerView="auto"
        spaceBetween={40}
        speed={5000}
        loop={true}
        centeredSlides={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false,
        }}
        className="project__text-slider"
      >
        <SwiperSlide>
          <div className="project__text-slider-single">
            <h2 className="light-title">
              <Link href="our-projects">
                Projects
                <i className="fa-sharp fa-solid fa-star"></i>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project__text-slider-single">
            <h2 className="light-title">
              <Link href="our-projects">
                Projects
                <i className="fa-sharp fa-solid fa-star"></i>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project__text-slider-single">
            <h2 className="light-title">
              <Link href="our-projects">
                Projects
                <i className="fa-sharp fa-solid fa-star"></i>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project__text-slider-single">
            <h2 className="light-title">
              <Link href="our-projects">
                Projects
                <i className="fa-sharp fa-solid fa-star"></i>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project__text-slider-single">
            <h2 className="light-title">
              <Link href="our-projects">
                Projects
                <i className="fa-sharp fa-solid fa-star"></i>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project__text-slider-single">
            <h2 className="light-title">
              <Link href="our-projects">
                Projects
                <i className="fa-sharp fa-solid fa-star"></i>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project__text-slider-single">
            <h2 className="light-title">
              <Link href="our-projects">
                Projects
                <i className="fa-sharp fa-solid fa-star"></i>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
