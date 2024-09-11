import React from "react";
import Image from "next/image";
import avatar from "../../public/images/testimonial/avatar.png";
import avatar2 from "../../public/images/testimonial/avatar2.png";
import avatar3 from "../../public/images/testimonial/avatar3.png";
import avatar4 from "../../public/images/testimonial/avatar4.png";
import avatar5 from "../../public/images/testimonial/avatar5.png";
import avatar6 from "../../public/images/testimonial/avatar6.png";

const ClientFeedbackMain = () => {
  return (
    <section className="section feedback-s fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                  The team at Realitai exceeded our expectations with their
                  innovative solutions and timely delivery. Their expertise in
                  software development is unparalleled. We couldn&apos;t be
                  happier with the results!
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src={avatar} alt="Image" />
                </div>
                <div className="author-meta">
                  <h5>John S.</h5>
                  <p>CEO of Tech Innovators</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                  Working with Realitai was a game-changer for our startup.
                  Their dedication to understanding our needs and creating a
                  custom software solution was impressive. Highly recommend
                  their services!
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src={avatar2} alt="Image" />
                </div>
                <div className="author-meta">
                  <h5>Emily R.</h5>
                  <p>Founder of Green Solutions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                  From the initial consultation to the final deployment,
                  Realitai was professional and efficient. Their attention to
                  detail and commitment to quality ensured our project&apos;
                  success. Exceptional service!
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src={avatar3} alt="Image" />
                </div>
                <div className="author-meta">
                  <h5>Michael T.</h5>
                  <p>Project Manager at Alpha Corp</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                  We partnered with Realitai for a complex software project, and
                  they delivered beyond our expectations. Their team is
                  knowledgeable, responsive, and a pleasure to work with.
                  Outstanding job!
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src={avatar4} alt="Image" />
                </div>
                <div className="author-meta">
                  <h5>Sophia L.</h5>
                  <p>CTO of Future Tech</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                  The custom software developed by Realitai has significantly
                  improved our operational efficiency. Their team&apos;s
                  technical skills and customer-centric approach made the entire
                  process seamless. Five stars!
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src={avatar5} alt="Image" />
                </div>
                <div className="author-meta">
                  <h5>Daniel M.</h5>
                  <p>Ops Director NextGen Innovationsr</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                  Our experience with Realitai was fantastic. They transformed
                  our ideas into a robust software application that has boosted
                  our business growth. Their support and expertise are
                  top-notch!
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src={avatar6} alt="Image" />
                </div>
                <div className="author-meta">
                  <h5></h5>Olivia K.
                  <p>Co-founder of Smart Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__content-cta text-center">
              <button className="btn btn--secondary">Load More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedbackMain;
