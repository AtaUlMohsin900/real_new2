import React, { useState } from "react";
import Image from "next/image";
import star from "../../../public/images/testimonial/star.png";
import axios from "axios";

const AboutCta = () => {
  const [email, setEmail] = useState(""); // State to manage email input
  const [status, setStatus] = useState(""); // State to manage status messages

  // Function to send email
  const sendEmail = async () => {
    if (!email) {
      setStatus("Please enter an email address.");
      return;
    }

    try {
      const API_URL = "http://localhost:3000"; // Node.js server URL
      const emailData = {
        to: email, // Using the email from the input field
        subject: "Test Email 2",
        text: "This is a test email",
        html: "<p>This is a test email from Ataul Mohsin</p>",
      };

      setStatus("Sending email...");
      const response = await axios.post(`${API_URL}/send-email`, emailData);
      setStatus("Email sent successfully!");

      return response.data;
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send email.");
    }
  };

  return (
    <section className="cta-s section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="cta__wrapper"
              data-background="assets/images/cta-bg.jpg"
            >
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-9">
                  <div className="section__header text-center shadow-2xl">
                    <h2 className="title">
                      Stay Ahead With Our Top Notch Digital Services
                    </h2>
                  </div>
                  <div className="footer__single-form">
                    <div className="input-email">
                      <input
                        type="email"
                        name="subscribe-news"
                        id="subscribeNews"
                        placeholder="Enter Your Email"
                        value={email} // Bind the input value to the state
                        onChange={(e) => setEmail(e.target.value)} // Update state on change
                        required
                      />
                      <button onClick={sendEmail} className="subscribe">
                        <i className="fa-sharp fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                    {status && <p>{status}</p>} {/* Show status message */}
                  </div>
                </div>
              </div>
              <Image src={star} alt="Image" className="star" />
              <Image src={star} alt="Image" className="star-two" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCta;
