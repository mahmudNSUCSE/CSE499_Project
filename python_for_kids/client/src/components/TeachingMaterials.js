import "../all/css/jquery.bxslider.css";
import "../all/css/style.css";
import { Link } from "react-router-dom";
export default function TeachingMaterials() {
  return (
    <div id="wrapper" className="about">
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
                  <Link to="/aboutus">About us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div id="wrapper" className="about">
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
                      <Link to="/aboutus">About us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>
            <div className="container">
              <section id="main">
                <h1>PythonForKids is the Best Way for Kids to Learn Python</h1>

                <h2>Why kids need to learn Python?</h2>
                <div className="about-txt">
                  <div className="col">
                    <p>
                      There are dozens of programming languages, and many of
                      them are good for a wide variety of projects. Python is
                      unique in that it’s easy to understand, even for kids with
                      no programming experience. We recommend Python for kids
                      because some languages use a perplexing combination of
                      symbols and abbreviations. Python doesn’t.
                    </p>
                  </div>
                  <div className="col-dvdr">&nbsp;</div>
                  <div className="col">
                    <p>
                      A few programming languages designed for beginners are
                      purely graphical. These are called “block” languages.
                      Scratch is an example of a block programming language.
                      Although Scratch is good for elementary school children,
                      it’s easy to outgrow. That’s not the case with Python,
                      which powers the world’s second-largest search engine:
                      YouTube. Scientists use Python to work with large data
                      sets. Software engineers build neural networks and other
                      forms of artificial intelligence with this versatile
                      language.
                    </p>
                  </div>

                  <h2>What is a Data type?</h2>
                  <div className="col">
                    <p>
                      <b>Let's start with data types.</b>
                      <b>
                        We will learn what is a data type in Python and how they
                        are assigned?
                      </b>
                      A data type is a classNameification of data that tells the
                      compiler how to use a piece of data. It determines what
                      values an object can have and the operations that can be
                      performed on it Most programming languages support basic
                      data types such as numbers, characters, and booleans In
                      Python programming There are standard data types kids
                      should be familiar with: So, In below are the formats
                      <p>
                        For taking simple numbers, <b>Integer:</b> 20 For taking
                        a complex number, <b>Float:</b> 20.5 For taking a text{" "}
                        <b>String:</b> “CodeWizardsHQ” For taking a list of
                        objects, <b>List:</b> e.g, fruits = (“apple”, “banana”,
                        “cherry”) For storing multiple items in a single
                        variable, <b>Tuple:</b> (“apple”, “banana”, “cherry”)
                        For storing data values in key:value pairs,{" "}
                        <b>Dictionary:</b> (“name” : “John”, “age” : 36)
                      </p>
                    </p>
                  </div>

                  <h2>What are variables?</h2>
                  <div className="col">
                    <p>
                      <b>So Kids,</b>
                      <b>We will learn what is a variable?</b>
                      Let's take an apple, a pencil infront of you or a copy,
                      each of this can be considered as a variable. The word
                      variable in programming describes a place to store
                      information such as numbers, text, lists of numbers and
                      text, and so on. Another way of looking at a variable is
                      that it’s like a label for something. Let's say,
                      You have 10 apples with you, you need to assign a value,
                      So,
                      <i> apple = 10"</i>
                      This means that you have assigned a value "10" for apple.
                    </p>
                    <p>
                      <b>
                        <i>Remember variable names cannot:</i>
                      </b>
                      -start with a number -contain spaces. - contain special
                      characters except “_” (underscore) -have same name as
                      another variable
                    </p>
                  </div>

                  <h2>What is a Function?</h2>
                  <div className="col">
                    <p>
                      <b>So, what is a function in python?</b>
                      A function is a block of code which performs an
                      action when it is called. You can add arguments to pass
                      data into a function. A function can return data as a
                      result Let's say,
                      You want to perform a task of your choice, such as print
                      anything inside or show a value. So, the code snippet
                      below shows how to do it like this:
                      <img
                        src="function.png"
                        alt="Python Functions"
                        width="800"
                        height="200"
                      />
                      So like this any functions can be processed!
                    </p>
                  </div>

                  <h2>What are Loops?</h2>
                  <div className="col">
                    <p>
                      <b>
                        'Now we will understand about an interesting thing,
                        which is called Loop.'
                      </b>
                      
                      'Looping as like any other programming language, is a
                      process of repeating anything.' A loop is a block of code
                      that runs over and over. In Python there are two types of
                      loops: for loops and while loops. A for loop repeats a
                      series of commands over a sequence of data, like a
                      list.The code Snippet below shows how it is done, for the
                      "fruits" table list each elements needs to be printed. For
                      example we take for loop input of the code as:
                      <i>'fruits = ["apple", "mango", "banana"]'</i>
                      <i>'for x in fruits: print(x)'</i>
                      'This will show the output like:' applemangobanana A while
                      loop repeats a series of commands as long as certain
                      conditions are true.
                      <i>number = 1</i>
                      <i>while number 6:</i>
                      <i>'print(numbers)'</i>
                      <i>number += 1</i>
                      'This will show the output printing numbers from 1 to 5:'
                      12345
                    </p>
                  </div>
                </div>
              </section>
            </div>
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
                          North South University, Dhaka 1229
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
                            <a
                              className="twitter"
                              href="https://www.twitter.com/"
                            >
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
      </div>
    </div>
  );
}
