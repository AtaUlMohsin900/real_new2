import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const ServiceMain = () => {
  return (
    <section className="section service-t">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-t__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                centeredSlides={false}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-service-t",
                  prevEl: ".prev-service-t",
                }}
                className="service-t__slider"
                breakpoints={{
                  1400: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          01
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">
                            IT & Telecom Network Dev
                          </Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Infrastructure Design</li>
                        <li>Network Security Solutions </li>
                        <li>Network Optimization</li>
                        <li>Cloud Integration</li>
                        <li>Support & Maintenance</li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          02
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="#">Web App Development</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Full-Stack Web</li>
                        <li>SaaS products</li>
                        <li>Multi-Tenant App</li>
                        <li>Web & CMS Integration</li>
                        <li>PWA Development</li>
                      </ul>
                      <div className="cta">
                        <Link href="#">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          03
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="#">Software Development</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Software Consulting</li>
                        <li> Designing Digital Experience</li>
                        <li>Legacy App Modernization</li>
                        <li>Support & Maintenance</li>
                        <li>Hire Developers</li>
                      </ul>
                      <div className="cta">
                        <Link href="#">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          04
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="#">Cloud App Development</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Hybrid Cloud App</li>
                        <li>Cloud Migration Services</li>
                        <li>Cloud-Native App </li>
                        <li>Cloud Architecture</li>
                        <li>Cloud Integration</li>
                      </ul>
                      <div className="cta">
                        <Link href="#">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          05
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="#">Mobile App Development</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Hybrid App Development</li>
                        <li>iOS App Development</li>
                        <li>Flutter App Development</li>
                        <li>React Native App </li>
                        <li>Ionic App Development</li>
                      </ul>
                      <div className="cta">
                        <Link href="#">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          06
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="#">Blockchain Development</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Cardano App Development</li>
                        <li>Stellar App Development</li>
                        <li>dApps Development</li>
                        <li>NFT Marketplace Dev</li>
                        <li>Metaverse Development</li>
                      </ul>
                      <div className="cta">
                        <Link href="#">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          07
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="#">Artificial Intelligence</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>AI Development</li>
                        <li>AI Copilot Development</li>
                        <li>OpenApi Development</li>
                        <li>ML Development</li>
                        <li>AI Engineers</li>
                      </ul>
                      <div className="cta">
                        <Link href="#">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          08
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="#">Generative AI Services</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>ChatGPT Developers</li>
                        <li>AI Agent Development</li>
                        <li>LLM Development</li>
                        <li>Hire Prompt Engineers</li>
                        <li>ChatGPT Integration Service</li>
                      </ul>
                      <div className="cta">
                        <Link href="#">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-group">
        <button aria-label="previous item" className="slide-btn prev-service-t">
          <i className="fa-light fa-angle-left"></i>
        </button>
        <button aria-label="next item" className="slide-btn next-service-t">
          <i className="fa-light fa-angle-right"></i>
        </button>
      </div>
    </section>
  );
};

export default ServiceMain;
