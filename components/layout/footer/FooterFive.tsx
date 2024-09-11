import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo1.png";
import gsap from "gsap";
import chroma from "chroma-js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const FooterFive = () => {
  const currentYear = new Date().getFullYear();

  const animatedTextRef = useRef<any>(null);
  const [animatedTextContent, setAnimatedTextContent] = useState("");

  useEffect(() => {
    const animatedChars = document.querySelectorAll(".animated-char");

    if (animatedChars.length > 0) {
      const folksBD = gsap.timeline({
        repeat: -1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".animated-text",
          start: "bottom 100%-=50px",
        },
      });

      const folksGradient = chroma.scale(["#56e0ff", "#f3e8fd"]);

      animatedChars.forEach((charElement, index) => {
        const delay = index * 0.04;

        folksBD.to(
          charElement,
          {
            duration: 0.5,
            scaleY: 0.6,
            ease: "power3.out",
            transformOrigin: "center bottom",
          },
          delay
        );

        folksBD.to(
          charElement,
          {
            yPercent: -20,
            ease: "elastic",
            duration: 0.8,
          },
          delay + 0.5
        );

        folksBD.to(
          charElement,
          {
            scaleY: 1,
            ease: "elastic.out(2.5, 0.2)",
            duration: 1.5,
          },
          delay + 0.5
        );

        folksBD.to(
          charElement,
          {
            color: () => {
              return folksGradient(index / animatedChars.length).hex();
            },
            ease: "power2.out",
            duration: 0.3,
          },
          delay + 0.5
        );

        folksBD.to(
          charElement,
          {
            yPercent: 0,
            ease: "back",
            duration: 0.8,
          },
          delay + 0.7
        );

        folksBD.to(
          charElement,
          {
            color: "#f3e8fd",
            duration: 1.4,
          },
          delay + 0.9
        );
      });
    }
  }, [animatedTextContent]);

  useEffect(() => {
    const animatedText = animatedTextRef.current;
    const textContent = animatedTextRef.current?.textContent;
    if (textContent) {
      setAnimatedTextContent(textContent);
      animatedText.innerHTML = "";
    }
  }, []);

  return (
    <footer className="footer-two footer-cmn section pb-0">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer-two__left">
              <div className="logo">
                <Link href="/">
                  <Image src={logo} priority alt="Image" />
                </Link>
              </div>
              <div className="paragraph">
                <p>
                  Welcome REALITAI We specialize in helping business most like
                  yours succeed online. From website design and development.
                </p>
              </div>
              <div className="section__content-cta">
                <h2>
                  <Link
                    href="mailto:info../..realitai.com"
                    className="folks-text animated-text"
                    ref={animatedTextRef}
                  >
                    info../..realitai.net
                    {animatedTextContent.split("").map((char, index) => (
                      <span
                        aria-hidden="true"
                        className="animated-char"
                        key={index}
                      >
                        {char}
                      </span>
                    ))}
                  </Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-7 offset-xl-1 col-xxl-5 offset-xxl-3">
            <div className="footer-two__right">
              <div className="social justify-content-start justify-content-lg-start">
                <Link href="https://www.facebook.com/" target="_blank">
                  <i className="fa-brands fa-facebook-f"></i>
                  <span>Facebook</span>
                </Link>
                <Link href="https://www.twitter.com/" target="_blank">
                  <i className="fa-brands fa-twitter"></i>
                  <span>Twitter</span>
                </Link>
                <Link href="https://www.pinterest.com/" target="_blank">
                  <i className="fa-brands fa-linkedin-in"></i>
                  <span>Linkedin</span>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                  <span>Instagram</span>
                </Link>
                <Link href="https://www.dribble.com/" target="_blank">
                  <i className="fa-light fa-basketball"></i>
                  <span>Dribble</span>
                </Link>
              </div>
              <div className="footer__single-meta section__content-cta">
                <Link
                  href="https://www.google.com/maps/place/Media+Foundation+Building/../..33.6950944,73.0486352,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfbfc8b476e783:0x1ad4388535624284!8m2!3d33.69509!4d73.0512101!16s%2Fg%2F11_k2bf5k?entry=ttu"
                  target="_blank"
                >
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  Lower Ground Floor, Media Foundation Building, G-8 Markaz,
                  Islamabad, Pakistan.
                </Link>
                <Link href="tel:+9251-554-0120">
                  <i className="fa-sharp fa-solid fa-phone-volume"></i>
                  +92 (51) 555-4120
                </Link>
                <Link href="mailto:info../..realitai.com">
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                  info../..realitai.net
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="row align-items-center gaper">
            <div className="col-12 col-xl-6">
              <div className="footer__copyright-text text-center text-xl-start">
                <p>
                  Copyright &copy;
                  <span id="copyYear">{currentYear}</span> realitai by{" "}
                  <Link href="#" target="_blank">
                    {" "}
                    UltraDevs
                  </Link>{" "}
                  . All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <ul className="justify-content-center justify-content-xl-end">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="about-us">About</Link>
                </li>
                <li>
                  <Link href="our-services">Services</Link>
                </li>
                <li>
                  <Link href="blog">Blog</Link>
                </li>
                <li>
                  <Link href="contact-us">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFive;
