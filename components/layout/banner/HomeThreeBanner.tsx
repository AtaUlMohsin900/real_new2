import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import YoutubeEmbed from "../../../components/youtube/YoutubeEmbed";
import videobg from "../../../public/images/banner/video-bg.jpg";
import dotlarge from "../../../public/images/agency/dot-large.png";
import arrow from "../../../public/images/banner/arrow.png";

const HomeThreeBanner = () => {
  const [videoActive, setVideoActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <>
      <section className="banner-three">
        <div className="banner-three__slider-w banner-three-alt-w">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            speed={1000}
            loop={true}
            centeredSlides={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: false,
            }}
            onSlideChange={handleSlideChange}
            className="banner-three__slider banner-three-alt"
          >
            <SwiperSlide>
              <div
                className="banner-three__slider-single"
                style={{
                  backgroundImage: "url('/images/banner/banner-three-bg.jpg')",
                }}
              >
                <div className="container">
                  <div className="row justify-content-end">
                    <div className="col-12 col-lg-9 offset-lg-3 col-xl-7 offset-xl-4">
                      <div className="banner-three__content">
                        <h1 className="light-title">
                          Awesome IT & AI Training and Development Services for
                          You.
                        </h1>
                        <div className="section__content-cta cta">
                          <div className="arrow-wrapper d-none d-md-block">
                            <span className="arrow"></span>
                          </div>
                          <Link
                            href="our-services"
                            className="btn btn--secondary"
                          >
                            our services
                            <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="banner-three__slider-single"
                style={{
                  backgroundImage:
                    "url('/images/banner/banner-two-bg-two.jpg')",
                }}
              >
                <div className="container">
                  <div className="row justify-content-end">
                    <div className="col-12 col-lg-9 offset-lg-3 col-xl-7 offset-xl-4">
                      <div className="banner-three__content">
                        <h1 className="light-title">
                          Awesome IT & AI Services for Your Business
                        </h1>
                        <div className="section__content-cta cta">
                          <div className="arrow-wrapper d-none d-md-block">
                            <span className="arrow"></span>
                          </div>
                          <Link
                            href="our-services"
                            className="btn btn--secondary"
                          >
                            our services
                            <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="banner-three__slider-single"
                style={{
                  backgroundImage:
                    "url('/images/banner/banner-two-bg-three.jpg')",
                }}
              >
                <div className="container">
                  <div className="row justify-content-end">
                    <div className="col-12 col-lg-9 offset-lg-3 col-xl-7 offset-xl-4">
                      <div className="banner-three__content">
                        <h1 className="light-title">
                          Awesome IT & AI Services for Your Business
                        </h1>
                        <div className="section__content-cta cta">
                          <div className="arrow-wrapper d-none d-md-block">
                            <span className="arrow"></span>
                          </div>
                          <Link
                            href="our-services"
                            className="btn btn--secondary"
                          >
                            our services
                            <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="social justify-content-center justify-content-lg-end">
          <Link href="https://www.facebook.com/" target="_blank">
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
          <Link href="https://www.twitter.com/" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link href="https://www.pinterest.com/" target="_blank">
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </div>
        <Image src={arrow} alt="Image" className="arrow-img" />
        <Image src={dotlarge} alt="Image" className="dot-img" />
        <div className="banner-three__slider-progress-wrapper">
          <div className="container">
            <div className="banner-three__slider-progress">
              <div
                className={
                  "single-item" +
                  (activeIndex === 0 ? " single-item-active" : " ")
                }
              >
                <span>01</span>
                <p>TECHNOLOGY CONSULTANTS</p>
                <div className="slider-progress"></div>
              </div>
              <div
                className={
                  "single-item" +
                  (activeIndex === 1 ? " single-item-active" : " ")
                }
              >
                <span>02</span>
                <p>SOFTWARE ENGINEERS</p>
                <div className="slider-progress"></div>
              </div>
              <div
                className={
                  "single-item" +
                  (activeIndex === 2 ? " single-item-active" : " ")
                }
              >
                <span>03</span>
                <p>PRODUCT STRATEGY ADVISORS</p>
                <div className="slider-progress"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-three__meta ban-three-g-meta">
          <div className="cta">
            <div className="single">
              <h5 className="fw-7">12+</h5>
              <p className="fw-5">years of experience</p>
            </div>
            <div className="single">
              <h5 className="fw-7">25k</h5>
              <p className="fw-5">completed projects</p>
            </div>
          </div>
          <div className="banner-three__video">
            <Image src={videobg} alt="Image" />
            <button
              className="video-frame video-btn"
              onClick={() => setVideoActive(true)}
            >
              <i className="fa-sharp fa-solid fa-play"></i>
            </button>
          </div>
        </div>
      </section>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeThreeBanner;
