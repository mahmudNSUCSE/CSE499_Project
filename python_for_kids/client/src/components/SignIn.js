import { Helmet } from "react-helmet";
import "../all/css/jquery.bxslider.css";
import "../all/css/style.css";
import in1 from "../all/images/img-slide01.jpg";
import in2 from "../all/images/bg_slider-mask.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signIn } from "../api/ApiRequestHandler";
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
    signIn(inputs)
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
        alert(error.response.data.message);
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
        <section className="promo">
          <div className="slider-wrap">
            <ul className="slider">
              <li>
                <img className="slide" src={in1} alt="" />
                <img className="slide-mask" src={in2} alt="" />
                <div className="slide-info">
                  <div className="col_wrap">
                    <div className="col">
                      <h1>Sign In</h1>
                      <form
                        onSubmit={handleSubmit}
                        method="post"
                        className="form-newsletter"
                      >
                        <fieldset>
                          <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                          />
                          <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                          />
                          <input
                            className="btn white"
                            type="submit"
                            value="Submit"
                          />
                          <a href="#">Forgot your Password?</a>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
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
      <Helmet>
        <script
          src="../all/vendor/jquery/jquery.min.js"
          type="text/javascript"
        />
        <script
          src="../all/vendor/bootstrap/js/bootstrap.bundle.min.js"
          type="text/javascript"
        />
        <script src="../all/js/jquery.bxslider.min.js" type="text/javascript" />
        <script src="../all/js/jquery.placeholder.js" type="text/javascript" />
        <script src="../all/js/main.js" type="text/javascript" />
        <script
          src="http://code.jquery.com/jquery-1.11.1.min.js"
          type="text/javascript"
        />
      </Helmet>
    </div>
  );
}
