import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import thumbone from "../../../public/images/agency/thumb-one.png";
import thumbtwo from "../../../public/images/agency/thumb-two.png";
import star from "../../../public/images/star.png";
import dotlarge from "../../../public/images/agency/dot-large.png";

gsap.registerPlugin(ScrollTrigger);
const Agency = () => {
  useEffect(() => {
    const percentElements = document.querySelectorAll("[data-percent]");

    percentElements.forEach((el) => {
      const skillBarPercent = el.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = el.parentNode?.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const percent = el.getAttribute("data-percent") || "0%";
        skillBarPercent.style.width = percent;
        percentValue.textContent = percent;
      }
    });

    const axProgressBar = document.querySelectorAll(".skill-bar-single");
    axProgressBar.forEach((element) => {
      const skillBarPercent = element.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = element.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const target = percentValue.textContent || "0%";

        const axBarTimeline = gsap.timeline({
          defaults: {
            duration: 2,
          },
          scrollTrigger: {
            trigger: element,
          },
        });

        axBarTimeline.fromTo(
          skillBarPercent,
          {
            width: 0,
          },
          {
            width: target,
          }
        );

        axBarTimeline.from(
          percentValue,
          {
            textContent: "0%",
            snap: {
              textContent: 5,
            },
          },
          "<"
        );
      }
    });
  }, []);

  return (
    <section className="section agency">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="agency__thumb">
              <Image
                src={thumbone}
                alt="Image"
                className="thumb-one fade-left"
                priority
              />
              <Image
                src={thumbtwo}
                alt="Image"
                className="thumb-two fade-right"
                priority
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="agency__content section__content">
              <span className="sub-title">
                WELCOME
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Empowering our Businesses with Expert Software,IT & AI Training
                and Development
              </h2>
              <div className="paragraph">
                <p>
                  REALITAI is a fusion of &#39;reality&#39; and &#39;AI&#39;. We
                  specialize in innovative technologies, artificial
                  intelligence, and data analysis. Our expertise in developing
                  cutting-edge AI models and custom solutions to address
                  emerging business needs sets our company apart in the
                  industry. REALITAI was established in 2024 as a Generative AI
                  and AI-based Software and Smart Solutions company. We offer
                  comprehensive services, including solution design, planning,
                  and development, consultancy, training, and IT services, to
                  help our esteemed customers enhance their entire process of
                  planning, development, implementation, change management, and
                  post-implementation support. REALITAI is a trusted partner for
                  businesses seeking innovative solutions.
                </p>
              </div>
              <div className="skill-wrap">
                <div className="skill-bar-single d-none">
                  <div className="skill-bar-title">
                    <p className="primary-text">Website design</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="75%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p className="primary-text">Website design</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="75%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p className="primary-text">AI Development</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="90%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                      {/* <div>
                        {" "}
                        <button className="pt-5">Gradient Buttion</button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="section__content-cta">
                <Link href="about-us" className="btn btn--primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" priority />
      <Image src={dotlarge} alt="Image" className="dot-large" priority />
    </section>
  );
};

export default Agency;
