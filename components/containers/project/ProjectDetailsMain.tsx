import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import poster1 from "../../../public/images/projects/poster1.jpg";
import poster2 from "../../../public/images/projects/poster2.png";
import poster3 from "../../../public/images/projects/poster3.png";
import poster4 from "../../../public/images/projects/poster4.png";
import poster5 from "../../../public/images/projects/poster5.jpg";
import poster6 from "../../../public/images/projects/poster6.png";
import poster7 from "../../../public/images/projects/poster7.png";
import poster8 from "../../../public/images/projects/poster8.jpg";

import iconone from "../../../public/images/projects/icon-one.png";
import icontwo from "../../../public/images/projects/icon-two.png";
import iconthree from "../../../public/images/projects/icon-three.png";
import done from "../../../public/images/projects/d-one.jpg";
import dtwo from "../../../public/images/projects/d-two.png";
import dthree from "../../../public/images/projects/d-three.png";
import dfour from "../../../public/images/projects/d-four.jpg";
import dfive from "../../../public/images/projects/d-five.jpg";

const ProjectDetailsMain = () => {
  return (
    <section className="section project-d">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">
                SwiftTech Solutions Agile Development <br /> Initiative
              </h3>
              <p>
                In the early months of 2022, SwiftTech Solutions embarked on an
                ambitious journey to revolutionize its project management and
                development processes by embracing Agile methodologies. The
                project, dubbed &aps;SwiftAgile Transformation,&apos; aimed to
                enhance collaboration, increase flexibility, and deliver
                high-quality software products at a faster pace.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">Project Goals</h3>
              <ul>
                <li>
                  Enhance Team Collaboration: Foster a culture of open
                  communication and teamwork across all departments.
                </li>
                <li>
                  Increase Flexibility: Adapt to changing requirements and
                  market conditions swiftly and efficiently.
                </li>
                <li>
                  Improve Product Quality: Ensure the delivery of robust and
                  reliable software through continuous testing and feedback
                  loops.
                </li>
                <li>
                  Accelerate Delivery Times: Reduce the time-to-market for new
                  features and updates.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="poster__slider-wrapper">
              <div className="poster__slider-w">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  slidesPerGroup={1}
                  speed={800}
                  loop={true}
                  centeredSlides={false}
                  modules={[Autoplay, Navigation]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  navigation={{
                    nextEl: ".next-project-d",
                    prevEl: ".prev-project-d",
                  }}
                  className="poster__slider"
                >
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster1} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster2} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    S
                    <div className="poster__slider-single">
                      <Image src={poster3} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster4} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster5} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster6} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster7} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster8} alt="Image" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="slide-group">
                <button
                  aria-label="previous item"
                  className="slide-btn prev-project-d"
                >
                  <i className="fa-light fa-angle-left"></i>
                </button>
                <button
                  aria-label="next item"
                  className="slide-btn next-project-d"
                >
                  <i className="fa-light fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper fade-wrapper">
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Sectors</h5>
                <p>IT & Software Development</p>
              </div>
              <div className="thumb">
                <Image src={iconone} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Owner</h5>
                <p>Devon Musgrave</p>
              </div>
              <div className="thumb">
                <Image src={icontwo} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Project Date</h5>
                <p>Jan 2022 to Dec 2022</p>
              </div>
              <div className="thumb">
                <Image src={iconthree} alt="Image" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="details-group text-start section__content-cta">
              <h3 className="light-title-lg">Key Phases and Milestones</h3>
              <p>
                1. Inception Phase (January - February 2022): Conducted Agile
                training workshops for all team members. Established Agile
                teams, each with a dedicated Scrum Master and Product Owner.
                Defined the initial product backlog and prioritized features
                based on business value.
              </p>
              <p>
                2. Sprint 0 (March 2022): Set up the Agile infrastructure,
                including JIRA for task tracking and Confluence for
                documentation. Created a roadmap and release plan for the first
                quarter. Conducted the first sprint planning session to kick off
                development.
              </p>
              <p>
                3. Development Sprints (April - December 2022): Executed
                bi-weekly sprints, focusing on delivering incrementally
                shippable products. Held daily stand-up meetings to ensure
                transparency and address any roadblocks. Conducted sprint
                reviews and retrospectives to gather feedback and improve
                processes.
              </p>
              <p>
                4. Continuous Integration and Testing: Implemented automated
                testing frameworks to ensure code quality. Integrated continuous
                integration (CI) pipelines for seamless code deployment.
                Regularly conducted user acceptance testing (UAT) sessions to
                validate features.
              </p>
              <p>
                5. Release and Deployment: Successfully launched the first major
                release in June 2022, followed by subsequent releases every two
                months. Implemented a robust DevOps strategy to streamline
                deployment and monitor application performance.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="quote-pj">
              <div className="cont">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <blockquote className="secondary-text">
                  And the day came when the risk to remain tight in a bud was
                  more painful than the risk it took to blossom.
                </blockquote>
              </div>
              <div className="author">
                <h4>- Justin Billing</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="details-group text-start section__content-cta">
              <h3 className="light-title-lg">The Result</h3>
              <p>
                Results and Achievements Increased Productivity: The Agile
                transformation led to a 30% increase in team productivity and a
                25% reduction in development time. Higher Quality: Continuous
                testing and feedback resulted in a 40% decrease in post-release
                defects. Enhanced Collaboration: Regular communication and
                collaboration improved overall team morale and stakeholder
                satisfaction. Faster Time-to-Market: New features and updates
                were delivered 50% faster than the previous year.
              </p>
              <h5>Lessons Learned Embrace Change</h5>
              <p>
                Flexibility in adapting to changing requirements was key to the
                project&apos;s success. Continuous Improvement: Regular
                retrospectives and feedback loops were crucial for refining
                processes. Stakeholder Involvement: Engaging stakeholders early
                and often ensured alignment and support throughout the project.
              </p>
              <p>
                The SwiftAgile Transformation project demonstrated the power of
                Agile methodologies in driving innovation, improving efficiency,
                and delivering high-quality software products. SwiftTech
                Solutions continues to build on this success, leveraging Agile
                principles to navigate the ever-evolving landscape of software
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="project-d__slider-w section__content-cta">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          speed={800}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            1400: {
              slidesPerView: 5,
              centeredSlides: true,
            },
            1200: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          className="project-d__slider"
        >
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={done} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dtwo} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dthree} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfour} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfive} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={done} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dtwo} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dthree} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfour} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfive} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={done} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dtwo} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dthree} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfour} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfive} alt="Image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectDetailsMain;
