import React from "react";

const RegisterForm = () => {
  return (
    <section className="section contact-m fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="map-wrapper">
              <div className="row gaper">
                <div className="col-12 col-lg-6 mx-auto">
                  <div className="contact-main__form fade-top">
                    <h3>Register Now</h3>
                    <form
                      action="#"
                      method="post"
                      className="section__content-cta"
                    >
                      <div className="group-wrapper">
                        <div className="group-input">
                          <input
                            type="text"
                            name="contact-name"
                            id="contactName"
                            placeholder="Name"
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
                      </div>
                      <div className="group-wrapper">
                        <div className="group-input">
                          <input
                            type="text"
                            name="father-name"
                            id="fatherName"
                            placeholder="Father Name"
                          />
                        </div>

                        <div className="group-input">
                          <input
                            type="date"
                            name="dob"
                            id="dob"
                            placeholder="Date of Birth"
                          />
                        </div>
                      </div>
                      <div className="group-wrapper">
                        <div className="group-input">
                          <input
                            type="text"
                            name="cnic-bform"
                            id="cnicBForm"
                            placeholder="CNIC or B-Form Number"
                            required
                          />
                        </div>

                        <div className="group-input">
                          <input
                            type="text"
                            name="phone-number"
                            id="phoneNumber"
                            placeholder="Phone Number"
                            required
                          />
                        </div>
                      </div>
                      <div className="group-input">
                        <input
                          type="text"
                          name="city"
                          id="city"
                          placeholder="City"
                          required
                        />
                      </div>
                      {/* <div className="group-input">
                                                <label>Gender:</label>
                                                <div>
                                                    <input
                                                        type="radio"
                                                        name="gender"
                                                        id="genderMale"
                                                        value="Male"
                                                        required
                                                    />
                                                    <label htmlFor="genderMale">Male</label>
                                                </div>
                                                <div>
                                                    <input
                                                        type="radio"
                                                        name="gender"
                                                        id="genderFemale"
                                                        value="Female"
                                                        required
                                                    />
                                                    <label htmlFor="genderFemale">Female</label>
                                                </div>
                                            </div> */}
                      <div className="group-input drt">
                        <select className="subject">
                          <option data-display="Subject">
                            Highest Qualification
                          </option>
                          <option value="1">{`Undergraduate (Bachelor's)`}</option>
                          <option value="2">{`Graduate (Master's)`}</option>
                          <option value="3">Post-Graduate (PhD)</option>
                        </select>
                      </div>
                      <div className="group-input"></div>
                      <div className="form-cta justify-content-start">
                        <button type="submit" className="btn btn--primary">
                          Submit
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

export default RegisterForm;
