import "../all/css/jquery.bxslider.css";
import "../all/css/style.css";
import im1 from "../all/images/img-person01.jpg";
import im2 from "../all/images/img-person02.jpg";
import im3 from "../all/images/img-person03.jpg";
import { Link } from "react-router-dom";
export default function AboutUs() {
  return (
    <div id="wrapper" class="about">
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

        <div class="dvdr"></div>
        <div class="container">
          <section id="main">
            <h1>pythonforkids is the Best Way for Kids to Learn Python</h1>
            <h2>Why should Kids to Learn Python?</h2>
            <div class="about-txt">
              <div class="col">
                <p>
                  There are dozens of programming languages, and many of them
                  are good for a wide variety of projects. Python is unique in
                  that it’s easy to understand, even for kids with no
                  programming experience. We recommend Python for kids because
                  some languages use a perplexing combination of symbols and
                  abbreviations. Python doesn’t.
                </p>
              </div>
              <div class="col-dvdr">&nbsp;</div>
              <div class="col">
                <p>
                  A few programming languages designed for beginners are purely
                  graphical. These are called “block” languages. Scratch is an
                  example of a block programming language. Although Scratch is
                  good for elementary school children, it’s easy to outgrow.
                  That’s not the case with Python, which powers the world’s
                  second-largest search engine: YouTube. Scientists use Python
                  to work with large data sets. Software engineers build neural
                  networks and other forms of artificial intelligence with this
                  versatile language.
                </p>
              </div>
            </div>
            <div class="person">
              <div class="person-img">
                <img src={im1} alt="" />
                <div class="mask"></div>
              </div>
              <div class="person-description">
                <h2>Lamia Rahman</h2>
                <address>
                  0123456789
                  <a class="email" href="mailto:lamia@gmail.com">
                    dorothea@kidschool.com
                  </a>
                  <a class="facebook" href="https://www.facebook.com/">
                    Visit me at Facebook
                  </a>
                </address>
                <p>
                  pythonforkids offers educational resources for students of
                  different grades and experience levels. From pythonforkids,
                  students not only learn coding basics, but also how to code in
                  real programming languages. Through pythonforkids, kids will
                  develop the necessary skills for the future while having fun!{" "}
                </p>
              </div>
            </div>
            <div class="person">
              <div class="person-img">
                <img src={im2} alt="" />
                <div class="mask"></div>
              </div>
              <div class="person-description">
                <h2>Mahmud Ahmed</h2>
                <address>
                  0123456789
                  <a class="email" href="mailto:mahmud@.com">
                    patricia@kidschool.com
                  </a>
                  <a class="facebook" href="https://www.facebook.com/">
                    Visit me at Facebook
                  </a>
                </address>
                <p>
                  pythonforkids offers educational resources for students of
                  different grades and experience levels. From pythonforkids,
                  students not only learn coding basics, but also how to code in
                  real programming languages. Through pythonforkids, kids will
                  develop the necessary skills for the future while having fun!{" "}
                </p>
              </div>
            </div>
            <div class="person">
              <div class="person-img">
                <img src={im3} alt="" />
                <div class="mask"></div>
              </div>
              <div class="person-description">
                <h2>Tahmid Hassan Rocky</h2>
                <address>
                  0123456789
                  <a class="email" href="mailto:tahmid@gmail.com">
                    jessica@kidschool.com
                  </a>
                  <a class="facebook" href="https://www.facebook.com/">
                    Visit me at Facebook
                  </a>
                </address>
                <p>
                  pythonforkids offers educational resources for students of
                  different grades and experience levels. From pythonforkids,
                  students not only learn coding basics, but also how to code in
                  real programming languages. Through pythonforkids, kids will
                  develop the necessary skills for the future while having fun!{" "}
                </p>
              </div>
            </div>
          </section>
        </div>
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
