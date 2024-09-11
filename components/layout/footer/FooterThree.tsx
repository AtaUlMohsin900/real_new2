import React from "react";
import Image from "next/image";
import Link from "next/link";
import thumb from "../../../public/images/footer/footer-three-thumb.png";
import logo from "../../../public/images/logo.png";

const FooterThree = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="section footer-three pb-0">
      <div className="container">
        <div className="row gaper align-items-start">
          <div className="col-12 col-lg-4">
            <div className="footer-three__single">
              <div className="footer-thumb">
                <Image src={thumb} alt="Image" />
                <div className="footer-thumb__content">
                  <h5>head quarters, USA</h5>
                </div>
              </div>
              <div className="footer-three__group ps-0">
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/place/Media+Foundation+Building/../..33.6950944,73.0486352,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfbfc8b476e783:0x1ad4388535624284!8m2!3d33.69509!4d73.0512101!16s%2Fg%2F11_k2bf5k?entry=ttu
                      "
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      Lower Ground Floor, Media Foundation Building, G-8 Markaz,
                      Islamabad, Pakistan.
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:406-555-0120">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      (051) 555-4120
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info../..realitai.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      info../..realitai.net
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://www.google.com/maps/place/Media+Foundation+Building/../..33.6950944,73.0486352,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfbfc8b476e783:0x1ad4388535624284!8m2!3d33.69509!4d73.0512101!16s%2Fg%2F11_k2bf5k?entry=ttu"
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="group-wrapper">
              <div className="footer-three__group">
                <div className="intro">
                  <h5>Germany</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      Wolfhager Strasse 425 - 70 Germany
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:406-555-0120">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      (406) 555-0120
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info../..realitai.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      info../..realitai.net
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
              <div className="footer-three__group section__content-cta">
                <div className="intro">
                  <h5>France</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      15 rue des Halles, 75001 Paris France
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:406-555-0120">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      +33 1 09 78 83 57
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info../..realitai.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      info../..realitai.net
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="group-wrapper">
              <div className="footer-three__group">
                <div className="intro">
                  <h5>Poland</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      Krakowskie Przedmiescie 15/17 00-071 Warsaw , Poland
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:406-555-0120">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      +48 (57) 878-8579
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info../..realitai.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      info../..realitai.net
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
              <div className="footer-three__group section__content-cta">
                <div className="intro">
                  <h5>Bangladesh</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      Sarulia. 1361. Dhaka, Bangladesh
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:406-555-0120">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      (880) 450-9898
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info../..realitai.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      info../..realitai.net
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-three__copyright">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer__copyright">
                <div className="row align-items-center gaper">
                  <div className="col-12 col-lg-8">
                    <div className="footer__copyright-text text-center text-lg-start">
                      <p>
                        Copyright &copy;
                        <span id="copyYear">{currentYear}</span> realitai by{" "}
                        <Link
                          href="https://themeforest.net/user/UltraDevs"
                          target="_blank"
                        >
                          UltraDevs
                        </Link>{" "}
                        . All Rights Reserved
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="text-center text-lg-end">
                      <Link href="/" className="logo">
                        <Image src={logo} alt="Image" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
