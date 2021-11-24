
import { Helmet } from "react-helmet";
import "../all/css/jquery.bxslider.css";
import "../all/css/style.css";
import in1 from "../all/images/img-slide01.jpg";
import in2 from "../all/images/bg_slider-mask.png";
export default function SignIn(props) {


  return (
    <div id="wrapper" class="homepage">
      <div class="wrapper-holder">
        <header id="header">
          <div class="left-part"></div>
          <a id="logo" href="index.html">
            Python for Kids
          </a>
          <div class="bar-holder">
            <a class="menu_trigger" href="#">
              menu
            </a>
            <nav id="nav">
              <ul>
                <li>
                  <a href="login.html">Log In</a>
                </li>
                <li>
                  <a href="register.html">Sign Up</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <section class="promo">
          <div class="slider-wrap">
            <ul class="slider">
              <li>
                <img class="slide" src={in1} alt="" />
                <img
                  class="slide-mask"
                  src={in2}
                  alt=""
                />
                <div class="slide-info">
                  <div class="col_wrap">
                    <div class="col">
                      <h1>Sign In</h1>
                      <form
                        action="signin.php"
                        method="post"
                        class="form-newsletter"
                      >
                        <fieldset>
                          <input
                            type="email"
                            placeholder="Email"
                            name="email"
                          />
                          <input
                            type="password"
                            placeholder="Password"
                            name="password"
                          />
                          <input
                            class="btn white"
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
      <div class="top-blue-border"></div>
      <footer id="footer">
        <div class="footer-holder">
          <div class="footer-frame">
            <div class="footer-content">
              <div class="col-holder">
                <div class="col_wrap">
                  <div class="col">
                    <h3>Our address</h3>
                    <address class="map">
                      North South Univercity, Dhaka 1229
                    </address>
                    <address class="mail">
                      <a href="mailto:contact@pythonforkids.com">
                        contact@kidschool.com
                      </a>
                    </address>
                    <address class="phone">000 111 999 666</address>
                  </div>
                </div>
                <div class="col_wrap">
                  <div class="col"></div>
                </div>
                <div class="col_wrap">
                  <div class="col">
                    <h3>Follow us</h3>
                    <ul class="social">
                      <li>
                        <a class="facebook" href="https://www.facebook.com/">
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a class="twitter" href="https://www.twitter.com/">
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a class="pinterest" href="https://www.pinterest.com/">
                          Pinterest
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-bottom">
              <div class="holder">
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
