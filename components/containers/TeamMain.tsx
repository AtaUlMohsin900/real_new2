import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "../../public/images/teams/one.png";
import two from "../../public/images/teams/two.png";
import three from "../../public/images/teams/three.png";
import four from "../../public/images/teams/four.png";
import five from "../../public/images/teams/five.png";
import six from "../../public/images/teams/six.png";

const TeamMain = () => {
  return (
    <section className="section team-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={one} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.jpg')" }}
                >
                  <div className="info">
                    <p>“five Star Rating</p>
                  </div>
                  <h4>
                    <Link href="team-single">Vijay Singh</Link>
                  </h4>
                  <p>Sr. Product Designer</p>
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
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={two} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.jpg')" }}
                >
                  <div className="info">
                    <p>“Five Star Rating</p>
                  </div>
                  <h4>
                    <Link href="team-single">John Smith</Link>
                  </h4>
                  <p>Web Developer</p>
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
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={three} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.jpg')" }}
                >
                  <div className="info">
                    <p>“Five Star Rating</p>
                  </div>
                  <h4>
                    <Link href="team-single">Sarah Lee</Link>
                  </h4>
                  <p>AI Developer</p>
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
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={four} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.jpg')" }}
                >
                  <div className="info">
                    <p>“Five Star Rating</p>
                  </div>
                  <h4>
                    <Link href="team-single">Rachelle Kristof</Link>
                  </h4>
                  <p>Software Engineer</p>
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
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={five} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.jpg')" }}
                >
                  <div className="info">
                    <p>“Five Star Rating</p>
                  </div>
                  <h4>
                    <Link href="team-single">Mirha Ahmed</Link>
                  </h4>
                  <p>Sr. Graphic Designer</p>
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
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={six} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.jpg')" }}
                >
                  <div className="info">
                    <p>“Five Star Rating</p>
                  </div>
                  <h4>
                    <Link href="team-single">Wang Jianlin</Link>
                  </h4>
                  <p>Sr. Backend Developer</p>
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
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__content-cta text-center">
              <button className="btn btn--secondary">Load More..</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMain;
