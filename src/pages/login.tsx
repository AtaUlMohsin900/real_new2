import React, { useState } from "react";
import { Regiter } from "../../src/models/Register";

interface IState {
  user: Regiter;
}

const Login: React.FC = () => {
  const [state, setState] = useState<IState>({
    user: {
      email: "",
      password: "",
    },
  });
  // handle change function
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };
  // form handling
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // submit your form here
    console.log(state.user);
    alert("Login success!");
  };
  return (
    <section className="section contact-m fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="map-wrapper">
              <div className="row gaper">
                <div className="col-12 col-lg-6 mx-auto">
                  <div className="contact-main__form fade-top">
                    <h3>Login Now</h3>
                    <form
                      action="#"
                      method="post"
                      className="section__content-cta"
                      onSubmit={handleSubmit}
                    >
                      <div className="group-input">
                        <input
                          type="email"
                          name="email"
                          value={state.user.email}
                          onChange={handleChange}
                          id="contactEmail"
                          placeholder="Email"
                        />
                      </div>

                      <div className="group-wrapper">
                        <div className="group-input">
                          <input
                            type="password"
                            name="password"
                            value={state.user.password}
                            onChange={handleChange}
                            id="fatherName"
                            placeholder="Password"
                          />
                        </div>
                      </div>

                      <div className="group-input"></div>
                      <div className="form-cta justify-content-start">
                        <button type="submit" className="btn btn--primary">
                          Login
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
      <div>
        <p>{JSON.stringify(state.user)}</p>
      </div>
    </section>
  );
};
export default Login;
