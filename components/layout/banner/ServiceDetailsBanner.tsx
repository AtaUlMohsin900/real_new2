import React from "react";
import Link from "next/link";

const ServiceDetailsBanner = () => {
  return (
    <section
      className="cmn-banner service-single-banner bg-img"
      style={{ backgroundImage: "url('/images/banner/cmn-banner-bg.jpg')" }}
    >
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5 col-xl-7">
            <div className="text-center text-lg-start">
              <h2 className="title title-anim">
                IT & Telecom Network Development
              </h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <i className="fa-solid fa-house"></i>
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="our-services">Our Services</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    IT & AI TRAINING & DEVELOPMENT
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-5">
            <div className="slide-group justify-content-center justify-content-lg-end">
              <Link
                href="service-single"
                aria-label="previous item"
                className="slide-btn "
              >
                <i className="fa-light fa-angle-left"></i>
              </Link>
              <Link
                href="service-single"
                aria-label="next item"
                className="slide-btn"
              >
                <i className="fa-light fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsBanner;
