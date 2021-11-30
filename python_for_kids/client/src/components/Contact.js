import "../all/css/jquery.bxslider.css";
import "../all/css/style.css";
import im1 from "../all/images/img-slide01.jpg";
import im2 from "../all/images/bg_slider-mask.png";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <div id="wrapper" class="homepage">
      <div class="wrapper-holder">
        <header id="header">
          <div class="left-part"></div>
          <Link id="logo" to="/">
            Python for Kids
          </Link>
          <div class="bar-holder">
            <Link class="menu_trigger" to="/">
              menu
            </Link>
            <nav id="nav">
              <ul>
                <li>
                  <Link to="/aboutus">About us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <section class="promo">
          <div class="slider-wrap">
            <ul class="slider">
              <li>
                <img class="slide" src={im1} alt="" />
                <img class="slide-mask" src={im2} alt="" />
                <div class="slide-info">
                  <div class="col_wrap">
                    <div class="col">
                      <h3>Anyting You Would Like to Know?</h3>
                      <p class="form-newsletter">White us about your enquiry</p>
                      <form action="#" class="form-newsletter">
                        <fieldset>
                          <input type="email" placeholder="white here..." />
                          <input class="btn white" type="submit" value="Send" />
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
    </div>
  );
}
