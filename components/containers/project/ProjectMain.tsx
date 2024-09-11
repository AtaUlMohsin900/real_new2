import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import hrone from "../../../public/images/projects/hr-one.jpg";
import hrtwo from "../../../public/images/projects/hr-two.jpg";
import hrthree from "../../../public/images/projects/hr-three.png";
import hrfour from "../../../public/images/projects/hr-four.png";
import hrfive from "../../../public/images/projects/hr-five.png";
import hrsix from "../../../public/images/projects/hr-six.jpg";

gsap.registerPlugin(ScrollTrigger);
const ProjectMain = () => {
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ele = slider.current;

    if (window.innerWidth >= 992 && ele) {
      gsap.registerPlugin(ScrollTrigger);

      const rightSections = gsap.utils.toArray(".project-sl__single");

      const pin = gsap.to(rightSections, {
        xPercent: -100 * (rightSections.length - 3),
        ease: "none",
        scrollTrigger: {
          trigger: ele,
          pin: true,
          invalidateOnRefresh: true,
          start: "center center-=100",
          scrub: 1,
          end: () => "+=" + (slider.current?.offsetWidth || 0),
          markers: false,
        },
      });

      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <section className="section project-sl" ref={slider}>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrone} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              mobile app
              <br />
              development
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrtwo} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              brand identity
              <br />
              difference
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrthree} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              marketing app
              <br />
              solutions
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrfour} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              LMS web app
              <br />
              lication
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrfive} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              brand identity
              <br />
              difference
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrsix} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              digital website
              <br />
              development
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrone} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              mobile app
              <br />
              development
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrtwo} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              brand identity
              <br />
              difference
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrthree} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              marketing app
              <br />
              solutions
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrfour} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              LMS web app
              <br />
              lication
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrfive} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              brand identity
              <br />
              difference
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrsix} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              digital website
              <br />
              development
            </Link>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ProjectMain;
