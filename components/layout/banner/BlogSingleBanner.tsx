import React from "react";
import Link from "next/link";

const BlogSingleBanner = () => {
  return (
    <section
      className="cmn-banner bg-img"
      style={{ backgroundImage: "url('/images/banner/cmn-banner-bg.jpg')" }}
    >
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12">
            <div className="text-center text-lg-start">
              <h2 className="title title-anim">
                What is AI Development and History of Artificial ?
              </h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <i className="fa-solid fa-house"></i>
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blog Details
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSingleBanner;
