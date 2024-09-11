import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import videoframethree from "../../../public/images/video-frame-three.png";
import thumbsmall from "../../../public/images/banner/four-thumb-small0-transformed.png";
import fourthumb from "../../../public/images/banner/four-thumb-small-transformed.webp";

gsap.registerPlugin(ScrollTrigger);
const HomeFourBanner = () => {
  useEffect(() => {
    const deviceWidth = window.innerWidth;

    if (document.querySelector(".g-ban-four") && deviceWidth > 576) {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".banner-four",
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: false,
        },
      });

      tl.to(".g-ban-four", {
        opacity: 0,
        scale: 0.3,
        y: "100%",
        x: "30%",
        zIndex: -1,
        duration: 2,
      });
    }
  }, []);

  return (
    <section className="banner-four">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="banner-four__content">
              <div className="intro">
                <p>
                  I&apos;m a brand led designer that combines creative with
                  strategy to create compelling brand identity and digital
                  design experiences.
                </p>
                <div className="arrow-wrapper">
                  <span className="arrow"></span>
                </div>
              </div>
              <div className="banner-four__title">
                <h1>
                  I am a digital designer
                  <Link className="frame g-ban-frame" href="about-us">
                    <Image src={videoframethree} alt="Image" />
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                  & dreamer
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={thumbsmall} alt="Image" className="small" />
      <Image src={fourthumb} alt="Image" className="large g-ban-four" />
    </section>
  );
};

export default HomeFourBanner;
