import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "../../../public/images/blog/one.jpg";
import two from "../../../public/images/blog/two.png";

const HomeBlog = () => {
  return (
    <section className="section blog fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                news & Blog
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">what&apos;s new in blog</h2>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-md-6">
            <div className="blog__single fade-top">
              <div className="blog__single-thumb topy-tilt">
                <Link href="blog-single">
                  <Image src={one} alt="Image" className="opacity-50" />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="blog-single">
                    A Simple Social Media Marketing Checklist
                  </Link>
                </h4>
                <div className="blog__single-meta">
                  <Link href="blog" className="sub-title">
                    creative
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>June 06, 2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="blog__single fade-top">
              <div className="blog__single-thumb topy-tilt">
                <Link href="blog-single">
                  <Image src={two} alt="Image" className="opacity-50" />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="blog-single">
                    Transforming Challenges into Opportunities
                  </Link>
                </h4>
                <div className="blog__single-meta">
                  <Link href="blog" className="sub-title">
                    creative
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>MARCH 16, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
