import React from "react";
import Link from "next/link";

const Info = () => {
  return (
    <section className="section four-info">
      <div className="container">
        <div className="row gaper align-items-start">
          <div className="col-12 col-lg-6">
            <h2 className="light-title text-uppercase fw-7 title-anim">
              hello there !
            </h2>
          </div>
          <div className="col-12 col-lg-6">
            <div className="four-info__content">
              <p className="primary-text">
                An independent creative agency for all your branding,
                advertising and film production needs. With our signature style.
              </p>
              <p>
                Hey, I&apos;m Dan, a graphic designer, creative and social
                architect who loves to tell stories and creating feeling through
                the art of experimentation and motion. I&apos;m currently a
                designer at Visions Design doing a mix of motion graphics, web
                design and branding.
              </p>
              <div className="section__content-cta">
                <Link href="contact-us" className="btn btn--primary">
                  contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
