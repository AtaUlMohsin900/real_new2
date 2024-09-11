import React from "react";
import Image from "next/image";
import Link from "next/link";
import star from "../../../public/images/star.png";
import dotlarge from "../../../public/images/agency/dot-large.png";
import clutch from "../../../public/images/agency/clutch.png";
import thumbthree from "../../../public/images/agency/thumb-three2.png";

const HomeThreeAgency = () => {
  return (
    <section className="section agency agency-two">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="agency__thumb">
              <Image src={thumbthree} alt="Image" className="fade-left" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="agency__content section__content">
              <span className="sub-title">
                About Us
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                REALITAI is Empowering Innovations with AI / GenAI
              </h2>
              <div className="paragraph">
                <p>
                  {`REALITAI is a fusion of 'reality' and 'AI'. We specialize in innovative technologies, artificial intelligence, and data analysis. Our expertise in developing cutting-edge AI models and custom solutions to address emerging business needs sets our company apart in the industry.
REALITAI was established in 2024 as a Generative AI and AI-based Software and Smart Solutions company.
We offer comprehensive services, including solution design, planning, and development, consultancy, training, and IT services, to help our esteemed customers enhance their entire process of planning, development, implementation, change management, and post-implementation support. With extensive experience in IT infrastructure deployment, software development, web development, data warehousing, mission-critical enterprise solutions, and quality IT training, REALITAI is a trusted partner for businesses seeking innovative solutions.`}
                </p>
              </div>
              <div className="cta section__content-cta">
                <div className="single">
                  <h5 className="fw-7">12+</h5>
                  <p className="fw-5">years of experience</p>
                </div>
                <div className="single">
                  <h5 className="fw-7">25k</h5>
                  <p className="fw-5">completed projects</p>
                </div>
                <div className="single">
                  <h5 className="fw-7">120+</h5>
                  <p className="fw-5">Team members</p>
                </div>
              </div>
              <div className="section__content-cta cta-group">
                <Link href="/" className="clutch">
                  <Image src={clutch} alt="Image" />
                </Link>
                <Link
                  href="contact-us"
                  className="btn btn--primary text-capitalize"
                >
                  Book A Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      <Image src={dotlarge} alt="Image" className="dot-large" />
    </section>
  );
};

export default HomeThreeAgency;
