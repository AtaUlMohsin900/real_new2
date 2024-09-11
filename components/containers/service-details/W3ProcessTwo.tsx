import React, { useState } from "react";

const IT_TelecomTwo = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <section className="section ux-process fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                more services
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Our Upcoming AI Development Services
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-f-wrapper">
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 0 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Natural Language Processing (NLP)</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We create advanced NLP systems that comprehend, interpret,
                    and generate human language for impactful uses like
                    chatbots, sentiment analysis, and content personalization.
                    Our solutions grasp language nuances, ensuring accurate,
                    context-aware interactions that enhance user experience and
                    operational efficiency.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 1 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Computer Vision</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Our computer vision services allow machines to interpret and
                    analyze visual data. We create advanced applications in
                    image recognition, video analysis, and automated quality
                    control for industries like manufacturing, security, and
                    retail. Our solutions offer high accuracy and real-time
                    processing, enabling faster, data-driven decisions for your
                    business.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 2 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Ongoing Support and Maintenance</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We provide ongoing support and maintenance for our AI
                    systems, including performance monitoring, troubleshooting,
                    and timely updates. We also offer staff training to help
                    your team effectively manage and utilize AI tools, ensuring
                    maximum benefits from AI integration.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 3 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>AI Integration Services</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We specialize in integrating AI solutions into existing
                    systems and workflows to enhance operations without
                    disruption. Our managed integration services ensure
                    continuity and harmony with your business processes and
                    technological infrastructure.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 4 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>POC Development</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Unlock your business&apos; AI potential with our tailored
                    Proof of Concept (POC) services. We help you validate
                    AI-driven ideas quickly and cost-effectively, ensuring they
                    align with your objectives before full-scale implementation.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 4 ? -1 : 4)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 5 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>AI Strategy Consultation</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Our AI strategy consultation services facilitate successful
                    AI adoption and integration. We conduct readiness
                    assessments, create strategic plans, and develop tailored
                    roadmaps to align AI with your business goals. Our advice,
                    grounded in in-depth analysis and best practices, promotes
                    sustainable growth and innovation.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 5 ? -1 : 5)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IT_TelecomTwo;
