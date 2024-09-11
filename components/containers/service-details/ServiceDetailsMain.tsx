import React from "react";
import Image from "next/image";
import thumbone from "../../../public/images/service/thumb-one.png";
import thumbtwo from "../../../public/images/service/thumb1-two.jpg";

const ServiceDetailsMain = () => {
  return (
    <section className="section service-details fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="service-details__slider">
              <div className="service-details__slider-single">
                <div className="poster fade-top">
                  <Image src={thumbone} alt="Image" className="opacity-50" />
                </div>
                <div className="details-group section__cta text-start">
                  <h3 className="title-anim">
                    Expert IT & Telecom Networking Development
                  </h3>
                  <p>
                    As a seasoned IT & Telecom networking development firm, we
                    specialize in designing and deploying cutting-edge solutions
                    that leverage advanced networking technologies, cloud
                    computing, IoT, and AI-driven automation. Our team of
                    developers, proficient in networking protocols, frameworks,
                    APIs, and programming languages such as Python, Java, and
                    C++, serves a wide array of industries including
                    telecommunications, enterprise IT, and smart cities.
                  </p>
                  <p>
                    Our commitment to innovation ensures that we stay at the
                    forefront of technological advancements, continuously
                    integrating the latest developments to enhance network
                    performance and security. Whether you&apos;re looking to
                    optimize network infrastructure, develop custom network
                    solutions, or explore the potential of 5G and beyond, our
                    comprehensive services are designed to meet your specific
                    needs and propel your business forward in the rapidly
                    evolving digital landscape.
                  </p>
                </div>
                <div className="section__content-cta">
                  <div className="row gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">
                          Crafting Cutting-Edge IT & Telecom Networking
                          Solutions for the Digital Era
                        </h3>
                        <p>
                          From Software-Defined Networking (SDN) and Network
                          Function Virtualization (NFV) to cloud-native
                          solutions, IoT networks, and AI-driven network
                          management, we create a wide range of IT and Telecom
                          solutions that enable businesses to excel in the
                          digital realm.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={thumbtwo} alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsMain;
