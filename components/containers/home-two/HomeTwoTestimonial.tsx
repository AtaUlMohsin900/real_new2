import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import star from "../../../public/images/testimonial/star.png";
import thumb from "../../../public/images/testimonial/thumb.webp";
import avatar7 from "../../../public/images/testimonial/avatar7.png";
import avatar8 from "../../../public/images/testimonial/avatar8.png";
import avatar9 from "../../../public/images/testimonial/avatar9.png";

gsap.registerPlugin(ScrollTrigger);
const HomeTwoTestimonial = () => {
  useEffect(() => {
    const device_width = window.innerWidth;

    if (
      document.querySelectorAll(".testimonial-g-con").length > 0 &&
      device_width > 576
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonial-two",
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: false,
        },
      });

      tl.to(".testimonial-g-con", {
        opacity: 0,
        scale: 1,
        y: "-100%",
        duration: 1,
      });
    }
  }, []);
  return (
    <section className="section testimonial-two">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5 col-xxl-4">
            <div className="testimonial-two__thumb">
              <Image src={thumb} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-7 offset-xxl-1">
            <div className="testimonial-two__content section__content testimonial-g-con">
              <span className="sub-title">
                testimonial
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Some Of Our Respected Happy Clients Says
              </h2>
              <div className="quote">
                <i className="fa-sharp fa-solid fa-quote-right"></i>
              </div>
              <div className="testimonial-two__slider-w">
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
                  className="testimonial-two__slider"
                >
                  <SwiperSlide>
                    <div className="testimonial-two__slider-single">
                      <div className="paragraph">
                        <blockquote className="secondary-text">
                          <q>
                            The team at Realitai exceeded our expectations in
                            every way. From the initial consultation to the
                            final product, their professionalism and expertise
                            were evident. Our project was completed on time,
                            within budget, and with outstanding quality.
                          </q>
                        </blockquote>
                      </div>
                      <div className="author-meta">
                        <div className="author-meta__thumb">
                          <Image src={avatar7} alt="Image" />
                        </div>
                        <div className="author-meta__content">
                          <h5>Sarah T.</h5>
                          <p>CEO of Tech Innovators</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-two__slider-single">
                      <div className="paragraph">
                        <blockquote className="secondary-text">
                          <q>
                            Working with Realitai was a fantastic experience.
                            They took our ideas and turned them into a robust,
                            user-friendly software solution. Their attention to
                            detail and dedication to client satisfaction set
                            them apart from other companies we&apos;ve worked
                            with. Highly recommend!
                          </q>
                        </blockquote>
                      </div>
                      <div className="author-meta">
                        <div className="author-meta__thumb">
                          <Image src={avatar8} alt="Image" />
                        </div>
                        <div className="author-meta__content">
                          <h5>James R.</h5>
                          <p>Project Manager at Digital Solutions</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-two__slider-single">
                      <div className="paragraph">
                        <blockquote className="secondary-text">
                          <q>
                            We approached Realitai with a complex software
                            development project, and they delivered beyond our
                            expectations. Their team is highly skilled,
                            responsive, and truly understands our needs. The
                            software has transformed our operations and
                            increased our efficiency tremendously.
                          </q>
                        </blockquote>
                      </div>
                      <div className="author-meta">
                        <div className="author-meta__thumb">
                          <Image src={avatar9} alt="Image" />
                        </div>
                        <div className="author-meta__content">
                          <h5>Emily W.</h5>
                          <p>Operations Director at Logistics Pro</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
    </section>
  );
};

export default HomeTwoTestimonial;
