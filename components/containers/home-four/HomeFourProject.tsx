import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "../../../public/images/projects/one.png";
import two from "../../../public/images/projects/two.jpg";
import three from "../../../public/images/projects/three.png";
import four from "../../../public/images/projects/four.png";
import five from "../../../public/images/projects/five.png";
import six from "../../../public/images/projects/six.png";
import seven from "../../../public/images/projects/seven.png";
import eight from "../../../public/images/projects/eight.png";

const HomeFourProject = () => {
  return (
    <section className="section projects-s pt-0 fade-wrapper">
      <div className="container">
        <div className="row gaper align-items-start">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={five} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    SwiftTech Solutions Agile Development Initiative
                  </Link>
                </h4>
                <p>
                  In the early months of 2022, SwiftTech Solutions embarked on
                  an ambitious journey to revolutionize its project management
                  and development processes by embracing Agile methodologies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={four} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    {" "}
                    Launch of the Online Test Academy
                  </Link>
                </h4>
                <p>
                  Project Overview: Launch of the Online Test Academy In the
                  summer of 2023, we embarked on an innovative project to create
                  the &apos;Online Test Academy,&apos; a comprehensive
                  e-learning platform designed to provide students with access
                  to high-quality test preparation resources.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper align-items-end">
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={one} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    Online Grocery Store and Delivery Service
                  </Link>
                </h4>
                <p>
                  Helping people in their journey self-In early 2024, we
                  launched &apos;FreshDirect,&apos; an innovative online grocery
                  store and delivery service designed to bring convenience and
                  quality to our customers&apo; shopping experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={eight} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    Launch of TradeSmart Mobile Trading App
                  </Link>
                </h4>
                <p>
                  In the spring of 2022, we launched &apos;TradeSmart,&apos; a
                  cutting-edge mobile trading app designed to empower users with
                  seamless access to financial markets.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper align-items-start">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={six} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">QuickBite Food Delivery App</Link>
                </h4>
                <p>
                  In the summer of 2023, we introduced &apos;QuickBite,&apos;a
                  state-of-the-art food delivery app aimed at transforming the
                  way people order and enjoy their favorite meals
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={two} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    DigiBoost Digital Marketing Agency
                  </Link>
                </h4>
                <p>
                  In early 2023, we launched &apos;DigiBoost,&apos; a
                  full-service digital marketing agency dedicated to helping
                  businesses enhance their online presence and achieve their
                  marketing goals.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper align-items-end ">
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={three} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    EduConnect Online Classroom App
                  </Link>
                </h4>
                <p>
                  In the spring of 2023, we launched &apos;EduConnect,&apos; an
                  innovative online classroom app designed to transform the
                  educational experience for students and educators alike.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={seven} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    ChatWave Video Calling and Chat App
                  </Link>
                </h4>
                <p>
                  In past 2022, we launched &apos;ChatWave,&apos; a
                  next-generation video calling and chat app designed to
                  facilitate seamless communication and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <Link href="our-projects" className="btn btn--secondary">
                Load More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFourProject;
