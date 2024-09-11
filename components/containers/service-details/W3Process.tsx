import React, { useState } from "react";

const IT_Telecom = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <section className="section ux-process bg-tertiary fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                IT & Telecom Network Dev
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                working IT & Telecom Networking process
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
                    <h4>Requirement Analysis</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We begin by thoroughly understanding your business needs,
                    evaluating existing infrastructure, and identifying specific
                    goals.{" "}
                  </p>
                  <p>
                    This stage ensures that our solutions align perfectly with
                    your technical and operational requirements
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
                    <h4>Network Design</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Our team designs a robust and scalable network architecture
                    tailored to your project’s needs.
                  </p>
                  <p>
                    This involves selecting appropriate technologies, protocols,
                    and topologies to ensure optimal performance and
                    future-proofing.
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
                    <h4>Solution Development</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We develop customized network solutions, integrating
                    cutting-edge technologies like SDN, NFV, and cloud-native
                    frameworks.
                  </p>
                  <p>
                    {" "}
                    This stage focuses on creating a flexible, secure, and
                    efficient network environment.
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
                    <h4>Testing & Validation</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Comprehensive testing is conducted to validate the network’s
                    performance, security, and scalability.
                  </p>
                  <p>
                    We simulate various scenarios to ensure the network meets
                    all specifications and is ready for deployment.
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
                    <h4> Deployment & Integration</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Our experts deploy the network solution, seamlessly
                    integrating it with existing systems and infrastructure.
                  </p>
                  <p>
                    This stage includes configuring devices, implementing
                    security measures, and ensuring minimal disruption to
                    operations.
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
                    <h4> Monitoring & Maintenance</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Post-deployment, we provide ongoing monitoring and
                    maintenance services to ensure the network remains secure,
                    efficient, and up-to-date.
                  </p>
                  <p>
                    This includes regular updates, troubleshooting, and
                    performance optimization.
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

export default IT_Telecom;
