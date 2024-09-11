import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "../../public/images/phone.png";
import mail from "../../public/images/mail.png";
import location from "../../public/images/location.png";
import time from "../../public/images/time.png";
// import nodemailer from '@types/nodemailer'

const ContactMain = () => {
  useEffect(() => {
    const mainContentLink = document.getElementById("main-content");
    const scrollToTarget = (event: { preventDefault: () => void }) => {
      event.preventDefault();
      const targetContent = document.getElementById("target-content");
      if (targetContent) {
        targetContent.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (mainContentLink) {
      mainContentLink.addEventListener("click", scrollToTarget);
    }

    return () => {
      if (mainContentLink) {
        mainContentLink.removeEventListener("click", scrollToTarget);
      }
    };
  }, []);

  return (
    <section className="section contact-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={phone} alt="Phone" />
              </div>
              <div className="content">
                <h4>Phone & Fax</h4>
                <p>
                  <Link href="tel:+923335512815">Mobile : +92-3335512815</Link>
                </p>
                <p>
                  <Link href="tel:+925111234567">Fax : +92-51-11234567</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={mail} alt="Mail" />
              </div>
              <div className="content">
                <h4>Mail Address</h4>
                <p>
                  <Link href="mailto:Info../..realitai.net">
                    Info../..realitai.net
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={location} alt="Location" />
              </div>
              <div className="content">
                <h4>Our Location</h4>
                <p>
                  <Link href="" target="_blank"></Link>
                </p>
                <p>
                  Lower Ground Floor, Media Foundation Building, G-8 Markaz,
                  Islamabad, Pakistan.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={time} alt="Time" />
              </div>
              <div className="content">
                <h4>Office Hour</h4>
                <p>Sun - Thu 09 am - 06 pm</p>
                <p>Fri - Sat 4 pm - 10 pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 ">
          {/* <image src={time} alt="time" /> */}
          <div className="col-12">
            <div className="map-wrapper">
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  <div>
                    <ul className="zyx-cflb row pt-5 text-xl">
                      <Link
                        id="main-content"
                        href="#target-content"
                        tabIndex={-1}
                        className="focus:outline-none focus:ring-2 focus:ring-blue-500 "
                      >
                        General Enquiry
                      </Link>

                      <Link
                        id="main-content"
                        href="#target-content"
                        tabIndex={-1}
                        className="focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        Sales Enquiry
                      </Link>
                      <ul className="zyx-cflb row pt-5 text-xl font-size:12px">
                        <Link
                          className="zyx-link--no-style"
                          href="/service-provider/global/en/download-enquiry"
                        >
                          Download Enquiry
                        </Link>
                      </ul>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="contact-main__form fade-top">
                    <h3>General Enquiry</h3>
                    <form
                      action="#"
                      method="post"
                      className="section__content-cta"
                    >
                      <div className="grid">
                        <div className="group-input">
                          <input
                            type="text"
                            name="contact-first-name"
                            id="contactFirstName"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="group-input">
                          <input
                            type="text"
                            name="contact-last-name"
                            id="contactLastName"
                            placeholder="Last Name"
                          />
                        </div>
                        <div className="group-input">
                          <input
                            type="email"
                            name="contact-email"
                            id="contactEmail"
                            placeholder="Email"
                          />
                        </div>
                        <div className="group-input">
                          <input
                            type="Phone"
                            name="contact-phone"
                            id="contactPhone"
                            placeholder="Phone"
                          />
                        </div>
                        <div className="group-input">
                          <input
                            type="jobTitle"
                            name="contact-jobTitle"
                            id="jobTitle"
                            placeholder="Job Title"
                          />
                        </div>
                        <div className="group-input">
                          <input
                            type="company"
                            name="contact-company"
                            id="company"
                            placeholder="Company"
                          />
                        </div>
                        <div className="group-input drt">
                          <select className="subject mt-5 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option data-display="Country">Country</option>
                            <option value="af">Afghanistan</option>
                            <option value="al">Albania</option>
                            <option value="dz">Algeria</option>
                            <option value="as">American Samoa</option>
                            <option value="ad">Andorra</option>
                            <option value="ao">Angola</option>
                            <option value="ai">Anguilla</option>
                            <option value="ag">Antigua and Barbuda</option>
                            <option value="ar">Argentina</option>
                            <option value="am">Armenia</option>
                            <option value="aw">Aruba</option>
                            <option value="au">Australia</option>
                            <option value="at">Austria</option>
                            <option value="az">Azerbaijan</option>
                            <option value="bs">Bahamas</option>
                            <option value="bh">Bahrain</option>
                            <option value="bd">Bangladesh</option>
                            <option value="bb">Barbados</option>
                            <option value="by">Belarus</option>
                            <option value="be">Belgium</option>
                            <option value="bz">Belize</option>
                            <option value="bj">Benin</option>
                            <option value="bm">Bermuda</option>
                            <option value="bt">Bhutan</option>
                            <option value="bo">Bolivia</option>
                            <option value="ba">Bosnia and Herzegovina</option>
                            <option value="bw">Botswana</option>
                            <option value="br">Brazil</option>
                            <option value="bn">Brunei</option>
                            <option value="bg">Bulgaria</option>
                            <option value="bf">Burkina Faso</option>
                            <option value="bi">Burundi</option>
                            <option value="kh">Cambodia</option>
                            <option value="cm">Cameroon</option>
                            <option value="ca">Canada</option>
                            <option value="cv">Cape Verde</option>
                            <option value="ky">Cayman Islands</option>
                            <option value="cf">
                              Central African Re../../public
                            </option>
                            <option value="td">Chad</option>
                            <option value="cl">Chile</option>
                            <option value="cn">China</option>
                            <option value="co">Colombia</option>
                            <option value="km">Comoros</option>
                            <option value="cg">Congo - Brazzaville</option>
                            <option value="cd">Congo - Kinshasa</option>
                            <option value="cr">Costa Rica</option>
                            <option value="ci">Côte d’Ivoire</option>
                            <option value="hr">Croatia</option>
                            <option value="cu">Cuba</option>
                            <option value="cy">Cyprus</option>
                            <option value="cz">Czechia</option>
                            <option value="dk">Denmark</option>
                            <option value="dj">Djibouti</option>
                            <option value="dm">Dominica</option>
                            <option value="do">Dominican Re../../public</option>
                            <option value="ec">Ecuador</option>
                            <option value="eg">Egypt</option>
                            <option value="sv">El Salvador</option>
                            <option value="gq">Equatorial Guinea</option>
                            <option value="er">Eritrea</option>
                            <option value="ee">Estonia</option>
                            <option value="sz">Eswatini</option>
                            <option value="et">Ethiopia</option>
                            <option value="fj">Fiji</option>
                            <option value="fi">Finland</option>
                            <option value="fr">France</option>
                            <option value="ga">Gabon</option>
                            <option value="gm">Gambia</option>
                            <option value="ge">Georgia</option>
                            <option value="de">Germany</option>
                            <option value="gh">Ghana</option>
                            <option value="gr">Greece</option>
                            <option value="gd">Grenada</option>
                            <option value="gu">Guam</option>
                            <option value="gt">Guatemala</option>
                            <option value="gn">Guinea</option>
                            <option value="gw">Guinea-Bissau</option>
                            <option value="gy">Guyana</option>
                            <option value="ht">Haiti</option>
                            <option value="hn">Honduras</option>
                            <option value="hk">Hong Kong SAR</option>
                            <option value="hu">Hungary</option>
                            <option value="is">Iceland</option>
                            <option value="in">India</option>
                            <option value="id">Indonesia</option>
                            <option value="ir">Iran</option>
                            <option value="iq">Iraq</option>
                            <option value="ie">Ireland</option>
                            <option value="il">Israel</option>
                            <option value="it">Italy</option>
                            <option value="jm">Jamaica</option>
                            <option value="jp">Japan</option>
                            <option value="jo">Jordan</option>
                            <option value="kz">Kazakhstan</option>
                            <option value="ke">Kenya</option>
                            <option value="ki">Kiribati</option>
                            <option value="kw">Kuwait</option>
                            <option value="kg">Kyrgyzstan</option>
                            <option value="la">Laos</option>
                            <option value="lv">Latvia</option>
                            <option value="lb">Lebanon</option>
                            <option value="ls">Lesotho</option>
                            <option value="lr">Liberia</option>
                            <option value="ly">Libya</option>
                            <option value="li">Liechtenstein</option>
                            <option value="lt">Lithuania</option>
                            <option value="lu">Luxembourg</option>
                            <option value="mo">Macau SAR</option>
                            <option value="mg">Madagascar</option>
                            <option value="mw">Malawi</option>
                            <option value="my">Malaysia</option>
                            <option value="mv">Maldives</option>
                            <option value="ml">Mali</option>
                            <option value="mt">Malta</option>
                            <option value="mh">Marshall Islands</option>
                            <option value="mr">Mauritania</option>
                            <option value="mu">Mauritius</option>
                            <option value="mx">Mexico</option>
                            <option value="fm">Micronesia</option>
                            <option value="md">Moldova</option>
                            <option value="mc">Monaco</option>
                            <option value="mn">Mongolia</option>
                            <option value="me">Montenegro</option>
                            <option value="ma">Morocco</option>
                            <option value="mz">Mozambique</option>
                            <option value="mm">Myanmar</option>
                            <option value="na">Namibia</option>
                            <option value="nr">Nauru</option>
                            <option value="np">Nepal</option>
                            <option value="nl">Netherlands</option>
                            <option value="nc">New Caledonia</option>
                            <option value="nz">New Zealand</option>
                            <option value="ni">Nicaragua</option>
                            <option value="ne">Niger</option>
                            <option value="ng">Nigeria</option>
                            <option value="kp">North Korea</option>
                            <option value="mk">North Macedonia</option>
                            <option value="no">Norway</option>
                            <option value="om">Oman</option>
                            <option value="pk">Pakistan</option>
                            <option value="pw">Palau</option>
                            <option value="ps">Palestine</option>
                            <option value="pa">Panama</option>
                            <option value="pg">Papua New Guinea</option>
                            <option value="py">Paraguay</option>
                            <option value="pe">Peru</option>
                            <option value="ph">Philippines</option>
                            <option value="pl">Poland</option>
                            <option value="pt">Portugal</option>
                            <option value="pr">Puerto Rico</option>
                            <option value="qa">Qatar</option>
                            <option value="ro">Romania</option>
                            <option value="ru">Russia</option>
                            <option value="rw">Rwanda</option>
                            <option value="ws">Samoa</option>
                            <option value="sm">San Marino</option>
                            <option value="sa">Saudi Arabia</option>
                            <option value="sn">Senegal</option>
                            <option value="rs">Serbia</option>
                            <option value="sc">Seychelles</option>
                            <option value="sl">Sierra Leone</option>
                            <option value="sg">Singapore</option>
                            <option value="sk">Slovakia</option>
                            <option value="si">Slovenia</option>
                            <option value="sb">Solomon Islands</option>
                            <option value="so">Somalia</option>
                            <option value="za">South Africa</option>
                            <option value="kr">South Korea</option>
                            <option value="ss">South Sudan</option>
                            <option value="es">Spain</option>
                            <option value="lk">Sri Lanka</option>
                            <option value="sd">Sudan</option>
                            <option value="sr">Suriname</option>
                            <option value="se">Sweden</option>
                            <option value="ch">Switzerland</option>
                            <option value="sy">Syria</option>
                            <option value="tw">Taiwan</option>
                            <option value="tj">Tajikistan</option>
                            <option value="tz">Tanzania</option>
                            <option value="th">Thailand</option>
                            <option value="tl">Timor-Leste</option>
                            <option value="tg">Togo</option>
                            <option value="tk">Tokelau</option>
                            <option value="to">Tonga</option>
                            <option value="tt">Trinidad and Tobago</option>
                            <option value="tn">Tunisia</option>
                            <option value="tr">Turkey</option>
                            <option value="tm">Turkmenistan</option>
                            <option value="tv">Tuvalu</option>
                            <option value="ug">Uganda</option>
                            <option value="ua">Ukraine</option>
                            <option value="ae">United Arab Emirates</option>
                            <option value="gb">United Kingdom</option>
                            <option value="us">United States</option>
                            <option value="uy">Uruguay</option>
                            <option value="uz">Uzbekistan</option>
                            <option value="vu">Vanuatu</option>
                            <option value="va">Vatican City</option>
                            <option value="ve">Venezuela</option>
                            <option value="vn">Vietnam</option>
                            <option value="ye">Yemen</option>
                            <option value="zm">Zambia</option>
                            <option value="zw">Zimbabwe</option>
                          </select>
                        </div>
                      </div>
                      <div className="group-input">
                        <textarea
                          name="contact-message"
                          id="contactMessage"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="form-cta justify-content-start">
                        <button type="submit" className="btn btn--primary">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
