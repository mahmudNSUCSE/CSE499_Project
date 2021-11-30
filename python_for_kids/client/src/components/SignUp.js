import "../all/css/jquery.bxslider.css";
import "../all/css/style.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../api/ApiRequestHandler";
export default function SignIn(props) {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp(inputs)
      .then((respond) => {
        console.log(respond.data.token);
        if (respond.data.token) {
          window.localStorage.setItem("jwt-token", respond.data.token);
          navigate("/");
        } else {
          window.localStorage.removeItem("jwt-token");
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.response);
        if (!error.response.data.errors.contact) {
          alert(error.response.data.errors.email);
        } else if (!error.response.data.errors.email) {
          alert(error.response.data.errors.contact);
        } else {
          alert(
            error.response.data.errors.contact +
              "\n" +
              error.response.data.errors.email
          );
        }
      });
  };

  return (
    <div id="wrapper" className="homepage">
      <div className="wrapper-holder">
        <header id="header">
          <div className="left-part"></div>
          <Link id="logo" to="/">
            Python for Kids
          </Link>
          <div className="bar-holder">
            <Link className="menu_trigger" to="/">
              menu
            </Link>
            <nav id="nav">
              <ul>
                <li>
                  <Link to="/signin">Log In</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <section id="main">
          <div className="top-pink-border"></div>
          <div className="event-wrap">
            <div className="block-event">
              <div className="upcoming-event">
                <h2>Sign Up</h2>
                <form
                  onSubmit={handleSubmit}
                  method="post"
                  className="form-newsletter"
                >
                  <fieldset>
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      onChange={handleChange}
                    />
                    <br />
                    <label>Date of Birth:</label>
                    <input
                      type="date"
                      name="date_of_birth"
                      onChange={handleChange}
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="School Name"
                      name="school_name"
                      onChange={handleChange}
                    />
                    <input
                      type="number"
                      placeholder="className"
                      name="class"
                      onChange={handleChange}
                    />
                    <br />
                    <input
                      type="tel"
                      name="contact"
                      placeholder="Contact no. 01234-567890"
                      pattern="[0-9]{5}-[0-9]{6}"
                      onChange={handleChange}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                    />
                    <br />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      name="password_confirmation"
                      placeholder="Confirm Password"
                      onChange={handleChange}
                    />
                    <input className="btn white" type="submit" value="Submit" />
                    <Link to="/signin">Already have an account</Link>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          <div className="bottom-pink-border"></div>
        </section>
      </div>
      <div className="top-blue-border"></div>
      <footer id="footer">
        <div className="footer-holder">
          <div className="footer-frame">
            <div className="footer-content">
              <div className="col-holder">
                <div className="col_wrap">
                  <div className="col">
                    <h3>Our address</h3>
                    <address className="map">
                      North South Univercity, Dhaka 1229
                    </address>
                    <address className="mail">
                      <a href="mailto:contact@pythonforkids.com">
                        contact@kidschool.com
                      </a>
                    </address>
                    <address className="phone">000 111 999 666</address>
                  </div>
                </div>
                <div className="col_wrap">
                  <div className="col"></div>
                </div>
                <div className="col_wrap">
                  <div className="col">
                    <h3>Follow us</h3>
                    <ul className="social">
                      <li>
                        <a
                          className="facebook"
                          href="https://www.facebook.com/"
                        >
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="https://www.twitter.com/">
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a
                          className="pinterest"
                          href="https://www.pinterest.com/"
                        >
                          Pinterest
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="holder">
                <p>Copyright 2021 pythonforkids All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
