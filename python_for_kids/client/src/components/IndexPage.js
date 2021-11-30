import "../all/css/jquery.bxslider.css";
import "../all/css/style.css";
import im1 from "../all/images/img-slide01.jpg";
import im2 from "../all/images/bg_slider-mask.png";
import im3 from "../all/images/classroom-management-2.png";
import im4 from "../all/images/standards-checklist1.png";
import { Link } from "react-router-dom";
export default function IndexPage() {
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
                  <h1>
                    <Link to="/">Python for kids</Link>
                  </h1>
                  <p>
                    There are dozens of programming languages, and many of them
                    are good for a wide variety of projects. Python is unique in
                    that it’s easy to understand, even for kids with no
                    programming experience. We recommend Python for kids because
                    some languages use a perplexing combination of symbols and
                    abbreviations. Python doesn’t.
                  </p>
                  <Link class="btn red" to="/aboutus">
                    Learn more
                  </Link>
                </div>
              </li>
              <li>
                <Link style={{ margin: "auto", marginTop:"10px" }} class="btn red" to="signin/">
                  Get Stated
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section id="main">
          <div class="widget-boxes">
            <div class="box">
              <div class="box-info about">
                <h2>READY TO GO COURSES</h2>
                <p>
                  With pythonforkids and our support team, anyone can teach the
                  basics of computer science
                </p>
              </div>
            </div>
            <div class="box">
              <div class="box-info experience">
                <h2>REAL CODING LANGUAGES</h2>
                <p>
                  pythonforkids courses teach text-based coding so students
                  learn to program like a real develope
                </p>
              </div>
            </div>
            <div class="box">
              <div class="box-info fun">
                <h2>GAME-BASED LEARNING</h2>
                <p>
                  Kids learn coding in an engaging and rewarding environment
                  that utilizes gaming elements
                </p>
              </div>
            </div>
          </div>
          <div class="top-pink-border"></div>
          <div class="event-wrap">
            <div class="block-event">
              <div class="upcoming-event">
                <h2>CLASSROOM MANAGEMENT</h2>
                <div class="event-description">
                  <p>
                    Equipped with student solutions, automatic grading and
                    curriculum management,pythonforkids Dashboard allows you to
                    effortlessly manage your students. Fully-detailed coding
                    lessons will help you more easily conduct your classes
                    through engaging activities as well as a distinctive mode
                    for teaching versus playing.
                  </p>
                  <img class="slide" src={im3} alt="" />
                </div>
              </div>
              <div class="upcoming-event">
                <h2>STANDARDS ALIGNMENT</h2>
                <div class="event-description">
                  <p>
                    pythonforkids places a high emphasis on content that aligns
                    to today’s standards. With online challenges and unplugged
                    activities, students not only develop coding skills, but
                    also computational thinking, collaboration, reasoning and
                    logic.
                  </p>
                  <img class="slide" src={im4} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-pink-border"></div>
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
