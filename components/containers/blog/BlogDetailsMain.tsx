import React from "react";
import Image from "next/image";
import Link from "next/link";
import poster from "../../../public/images/news/poster.png";
import groupone from "../../../public/images/news/group-one.jpg";
import grouptwo from "../../../public/images/news/group-two.png";
import ten from "../../../public/images/news/ten.jpg";
import eleven from "../../../public/images/news/eleven.jpg";
import twelve from "../../../public/images/news/twelve.jpg";
import thirteen from "../../../public/images/news/thirteen.jpg";
import fourteen from "../../../public/images/news/fourteen.png";

const BlogDetailsMain = () => {
  return (
    <section className="section blog-main blog-details fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-xl-8">
            <div className="blog-details__content">
              <div className="bd-thumb fade-top">
                <Image src={poster} alt="Image" />
              </div>
              <div className="bd-content">
                <div className="bd-meta">
                  <div className="meta__left">
                    <p>
                      <strong>Written by :</strong>
                      John pitter
                    </p>
                    <span></span>
                    <p>10/01/2023</p>
                  </div>
                </div>
                <div className="bd-content-info">
                  <h4 className="h4">A Short History of AI</h4>
                  <div className="paragraph">
                    <p>
                      A Brief History of AI Artificial Intelligence is an
                      integral part of our daily lives, manifesting through
                      voice assistants, automated services, and applications in
                      healthcare. Despite the frequent astonishments brought by
                      new advancements, AI often feels like a nascent
                      technology.
                    </p>
                    <p>
                      However, this perception is somewhat misleading, as AI has
                      been developing for over 70 years by 2023. This article
                      will trace the journey of AI, from rudimentary algorithms
                      to sophisticated systems such as OpenAI&apos;s ChatGPT.
                    </p>
                  </div>
                  <h4 className="h4">Where can I get some?</h4>
                </div>
              </div>
              <div className="bd-group">
                <Image src={groupone} alt="Image" className="fade-top" />
                <Image src={grouptwo} alt="Image" className="fade-top" />
              </div>
              <div className="bd-content ">
                <div className="bd-content__alt">
                  <p>
                    To sum up, Artificial Intelligence has gone through three
                    significant stages. Initially, the focus was on creating
                    neural networks, which then transitioned into the era of
                    machine learning (ML) from 1980 to 2010. Currently, we are
                    in the Deep Learning phase, which leverages artificial
                    neural networks to autonomously develop algorithms. The key
                    distinction between Deep Learning and Machine Learning is
                    that ML requires programmers to manually adjust and update
                    the system.
                  </p>
                  <ul>
                    <li>The First Neurocomputer: 1951</li>
                    <li>The Dartmouth Conference: 1956</li>
                    <li>ELIZA: 1966</li>
                    <li>Game program beats world champion: 1979</li>
                    <li>Chess computer beats world champion: 1997</li>
                    <li>TVoice Assistant Siri : 2011</li>
                    <li>Home Assistant Alexa: 2013</li>
                    <li>ChatGPT: 2022</li>
                  </ul>
                </div>
              </div>
              <div className="bd-quote">
                <blockquote>
                  <q className="light-title-lg">
                    Application of AI in Customer Service Artificial
                    intelligence is now utilized in customer service through
                    Natural Language Understanding (NLU).
                  </q>
                </blockquote>
              </div>
              <div className="bd-content">
                <div className="bd-content__alt mt-0">
                  <p>
                    The primary function of NLU is to determine whether a
                    specific query can be linked to an entry in the central
                    knowledge database. Essentially, this involves a
                    text-to-text comparison followed by a decision-making
                    process. In e-commerce, for instance, the phrase “I want my
                    money back” should correspond to “refund,” and the software
                    needs to identify this. Equally important is the
                    software&apos;s ability to recognize when terms and requests
                    do not align.
                  </p>
                </div>
              </div>
              <div className="bd-tags">
                <div className="tags-left">
                  <p>Tags:</p>
                  <div className="tags-content">
                    <Link href="blog">Information Technology</Link>
                    <Link href="blog">Artificial Intelligence</Link>
                  </div>
                </div>
                <div className="tags-right">
                  <p>Share:</p>
                  <ul className="social">
                    <li>
                      <Link href="/" aria-label="social media">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" aria-label="social media">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" aria-label="social media">
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" aria-label="social media">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="blog-details__pagination">
              <div className="row gaper">
                <div className="col-md-6">
                  <div className="single">
                    <Link href="blog">
                      <i className="fa-solid fa-arrow-left-long"></i>
                      Previous Blog
                    </Link>
                    <div className="latest-single">
                      <div className="latest-thumb">
                        <Link href="blog-single">
                          <Image src={eleven} alt="Image" />
                        </Link>
                      </div>
                      <div className="latest-content">
                        <p>01/05/2022</p>
                        <p>
                          <Link href="blog-single">
                            Get Latest Updates Best Blog This Business We
                            business.
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single single--alt">
                    <Link href="blog">
                      Next Blog
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                    <div className="latest-single">
                      <div className="latest-thumb">
                        <Link href="blog-single">
                          <Image src={ten} alt="Image" />
                        </Link>
                      </div>
                      <div className="latest-content">
                        <p>20/06/2023</p>
                        <p>
                          <Link href="blog-single">
                            Easy and Most Powerful Server and Platform.
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section pb-0 comment-form fade-top">
                <div className="section__header">
                  <h2 className="h2 text-start">Leave a comment</h2>
                </div>
                <form action="#" method="post">
                  <div className="form-group-wrapper">
                    <div className="form-group-single">
                      <input
                        type="text"
                        name="comment-name"
                        id="commentName"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group-single">
                      <input
                        type="email"
                        name="comment-email"
                        id="commentemail"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="form-group-single">
                    <textarea
                      name="comment-message"
                      id="commentMessage"
                      placeholder="Write Comment..."
                    ></textarea>
                  </div>
                  <div className="cta__group">
                    <button type="submit" className="btn btn--ocotonary">
                      post comment
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="blog-main__sidebar">
              <div className="widget ">
                <div className="widget__head">
                  <h5 className="h5">Search</h5>
                </div>
                <div className="widget-search">
                  <form action="#" method="post">
                    <div className="form-group-input">
                      <input
                        type="search"
                        name="blog-search"
                        id="blogSearch"
                        placeholder="Search here. . ."
                      />
                      <button type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="widget ">
                <div className="widget__head">
                  <h5 className="h5">Categories</h5>
                </div>
                <div className="widget__list">
                  <ul>
                    <li>
                      <Link href="blog">Business</Link>
                    </li>
                    <li>
                      <Link href="blog">Job Market</Link>
                    </li>
                    <li>
                      <Link href="blog">Marketing</Link>
                    </li>
                    <li>
                      <Link href="blog">News</Link>
                    </li>
                    <li>
                      <Link href="blog">Social Media</Link>
                    </li>
                    <li>
                      <Link href="blog">Trends</Link>
                    </li>
                    <li>
                      <Link href="blog">Writing</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget">
                <div className="widget__head">
                  <h5 className="h5">Recent Posts</h5>
                </div>
                <div className="widget__latest">
                  <div className="latest-single ">
                    <div className="latest-thumb">
                      <Link href="blog-single">
                        <Image src={ten} alt="Image" />
                      </Link>
                    </div>
                    <div className="latest-content">
                      <p>17/08/2022</p>
                      <p>
                        <Link href="blog-single">
                          Professional technology information & solutions.
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="latest-single ">
                    <div className="latest-thumb">
                      <Link href="blog-single">
                        <Image src={eleven} alt="Image" />
                      </Link>
                    </div>
                    <div className="latest-content">
                      <p>25/01/2021</p>
                      <p>
                        <Link href="blog-single">
                          We Should be Descriptive This Business.
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="latest-single ">
                    <div className="latest-thumb">
                      <Link href="blog-single">
                        <Image src={twelve} alt="Image" />
                      </Link>
                    </div>
                    <div className="latest-content">
                      <p>24/03/2023</p>
                      <p>
                        <Link href="blog-single">
                          Get Latest Updates Best Blog This Business
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="latest-single ">
                    <div className="latest-thumb">
                      <Link href="blog-single">
                        <Image src={thirteen} alt="Image" />
                      </Link>
                    </div>
                    <div className="latest-content">
                      <p>04/04/2024</p>
                      <p>
                        <Link href="blog-single">
                          Professional technology information & solutions
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget">
                <div className="widget__head">
                  <h5 className="h5">Tags</h5>
                </div>
                <div className="widget__tags">
                  <ul>
                    <li>
                      <Link href="blog">nature</Link>
                    </li>
                    <li>
                      <Link href="blog">Artificial Intelligence</Link>
                    </li>
                    <li>
                      <Link href="blog">galaxy</Link>
                    </li>
                    <li>
                      <Link href="blog">creative</Link>
                    </li>
                    <li>
                      <Link href="blog">art</Link>
                    </li>
                    <li>
                      <Link href="blog">business</Link>
                    </li>
                    <li>
                      <Link href="blog">space</Link>
                    </li>
                    <li>
                      <Link href="blog">biology</Link>
                    </li>
                    <li>
                      <Link href="blog">environemnt</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget widget-big ">
                <Link href="blog-single">
                  <Image src={fourteen} alt="Image" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsMain;
