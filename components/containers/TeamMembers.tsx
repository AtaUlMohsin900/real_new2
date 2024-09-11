import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "../../public/images/teams/one.png";
import two from "../../public/images/teams/two.png";
import three from "../../public/images/teams/three.png";
import four from "../../public/images/teams/four.png";
import five from "../../public/images/teams/five.png";
import six from "../../public/images/teams/six.png";
import seven from "../../public/images/teams/seven.png";

const TeamMembers = () => {
  return (
    <section className="section team-slider-s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      our awesome crew
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">
                      our realitai team members
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-end">
                    <Link
                      href="our-teams"
                      className="btn btn--primary text-capitalize"
                    >
                      view all teams
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-r position-relative">
        <div className="team-s__slider-w">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            speed={800}
            loop={true}
            centeredSlides={true}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".next-team-s",
              prevEl: ".prev-team-s",
            }}
            className="team-s__slider"
            breakpoints={{
              1200: {
                slidesPerView: 5,
              },
              992: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3,
              },
              576: {
                slidesPerView: 2,
              },
              375: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={one} width={200} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.jpg')" }}
                    >
                      <div className="info">
                        <p>
                          Technical projects are managed, complex problems are
                          solved, and high-performing teams are led by a
                          seasoned senior engineer.
                        </p>
                      </div>
                      <h4>
                        <Link href="team-single">TTTTTTTTTTTT</Link>
                      </h4>
                      <p>Senior Engineer</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="team-single">Vijay Singh</Link>
                      </h5>
                      <p>Sr. Product Designer</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        He has experience spanning multiple prestigious
                        companies and a broad spectrum of technologies. With
                        over a decade of hands-on experience in the industry,
                        John has honed his skills in both front-end and back-end
                        development, making him a versatile and invaluable asset
                        to any development team.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Overall Progress</p>
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
                            <p>successful Projects</p>
                          </div>
                          <div
                            className="ski~ll-bar-wrapper"
                            data-percent="90%"
                          >
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        His ability to seamlessly integrate front-end and
                        back-end systems,scalable software solutions.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={two} width={200} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.jpg')" }}
                    >
                      <div className="info">
                        <p>“PPPPPPPPPPPP</p>
                      </div>
                      <h4>
                        <Link href="team-single">Jane Doe</Link>
                      </h4>
                      <p>Software Developer</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="team-single">John Smith</Link>
                      </h5>
                      <p>Web Developer</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        ohn is a skilled web developer specializing in Next.js,
                        React, and TypeScript for frontend development, and
                        Node.js for backend solutions. John excels in both
                        frontend and backend development, ensuring robust and
                        efficient full-stack solutions.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Overall Progress</p>
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
                            <p>successful Projects</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        John consistently delivers innovative and reliable web
                        applications.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={three} width={200} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.jpg')" }}
                    >
                      <div className="info">
                        <p>“PPPPPPPPP</p>
                      </div>
                      <h4>
                        <Link href="team-single">adsge</Link>
                      </h4>
                      <p>Senior engineer</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="team-single">Sarah Lee</Link>
                      </h5>
                      <p>AI Developer</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        She has a proven track record of creating sophisticated
                        AI models and algorithms that drive innovative solutions
                        in various industries. Sarah excels in developing neural
                        networks using frameworks like TensorFlow and PyTorch,
                        and has significant experience in implementing NLP
                        systems for chatbots.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Overall Progress</p>
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
                            <p>successful Projects</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        She has also experience in sentiment analysis, and
                        language translation. Her proficiency in Python
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={four} width={200} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.jpg')" }}
                    >
                      <div className="info">
                        <p>
                          “Lorem ipsum dolor sit amet consectetur adipiscing
                          elit
                        </p>
                      </div>
                      <h4>
                        <Link href="team-single">PPPPPP</Link>
                      </h4>
                      <p>Senior engineer</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="team-single">Rachelle Kristof</Link>
                      </h5>
                      <p>COORDINATOR & PROFESSOR, SOFTWARE ENGINEERING</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        She is a Head Teacher of the Mathematics and Software
                        Design & Development Faculty. Rachelle brings with her a
                        wealth of experience and we are thrilled she will be
                        sharing her expertise with colleagues across the world,
                        as she leads this faculty in 2021.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Overall Progress</p>
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
                            <p>successful Projects</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        She has also practical experiences to students and
                        prepare them for their careers.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={five} width={200} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.jpg')" }}
                    >
                      <div className="info">
                        <p>
                          “Lorem ipsum dolor sit amet consectetur adipiscing
                          elit
                        </p>
                      </div>
                      <h4>
                        <Link href="team-single">SSSS</Link>
                      </h4>
                      <p>Senior engineer</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="team-single">Mirha Ahmed</Link>
                      </h5>
                      <p>Sr. Grapic Designer</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Meet Mirha, your go-to professional personal assistant
                        and expert graphic designer.She provide a wide range of
                        graphic design services, including custom business
                        flyers, digital artwork, logos, banners, brochures,
                        Photoshop work, Illustrator graphics, e-book covers, and
                        editing.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Overall Progress ProgressProgressProgress</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="85%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Complete Project</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="92%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        No matter what graphic service you need, She is here to
                        assist you.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={six} width={200} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.jpg')" }}
                    >
                      <div className="info">
                        <p>
                          “Lorem ipsum dolor sit amet consectetur adipiscing
                          elit
                        </p>
                      </div>
                      <h4>
                        <Link href="team-single">Ssh</Link>
                      </h4>
                      <p>Senior engineer</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="team-single">Wang Jianlin</Link>
                      </h5>
                      <p>Sr. Backend Developer</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        He is a Proficient in Node.js, Laravel, PHP, and Python,
                        he has a robust understanding of backend architecture
                        and development. His expertise extends to databases,
                        including SQL, PostgreSQL, MySQL, and MongoDB, ensuring
                        efficient data management and retrieval.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Overall Progress ProgressProgressPerformance</p>
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
                            <p>Sucessful Projects</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        He also integrating AI solutions into backend systems to
                        enhance functionality and performance.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={seven} width={200} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.jpg')" }}
                    >
                      <div className="info">
                        <p>“PPPPPPPPPPPPPPPPP</p>
                      </div>
                      <h4>
                        <Link href="team-single">aaap. Lesh</Link>
                      </h4>
                      <p>Senior engineer</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="team-single">John Stiphan</Link>
                      </h5>
                      <p>Cloud Engineer</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        He is a highly skilled Cloud Engineer with over five
                        years of experience in the tech industry. Specializing
                        in AWS and Azure, John excels in designing and
                        implementing scalable cloud infrastructure. Known for a
                        keen problem-solving ability, John integrates innovative
                        cloud solutions into the software development lifecycle.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Overall Progress</p>
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
                            <p>successful Projects</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        John stays abreast of the latest advancements in cloud
                        technology, driving continuous improvement and
                        innovation.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="slide-group">
          <button aria-label="previous item" className="slide-btn prev-team-s">
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button aria-label="next item" className="slide-btn next-team-s">
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
