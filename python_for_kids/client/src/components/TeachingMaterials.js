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
              <h1>PythonForKids is the Best Way for Kids to Learn Python</h1>
             
              <h2>Why kids need to learn Python?</h2>
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
                
                <h2>What is a Data type?</h2>
                <div class = "col">
                    <p>
                        <b>Let's start with data types.</b><br></br>

                        <b>We will learn what is a data type in Python and how they are assigned?</b><br></br><br></br> 
                        A data type is a classification of data that tells the compiler how to use a piece of data. It determines what values an object can have and the operations that can be performed on it   Most programming languages support basic data types such as numbers, characters, and booleans<br></br><br></br>
                        In Python programming<br></br>  
                        There are standard data types kids should be familiar with:<br></br> 
                        So, In below are the formats<br></br> 
           
                        <p>
                            For taking simple numbers, <b>Integer:</b> 20<br></br> 
                            For taking a complex number, <b>Float:</b> 20.5<br></br> 
                            For taking a text <b>String:</b> “CodeWizardsHQ”<br></br> 
                            For taking a list of objects, <b>List:</b> e.g, fruits = (“apple”, “banana”, “cherry”)<br></br> 
                            For storing multiple items in a single variable, <b>Tuple:</b> (“apple”, “banana”, “cherry”)<br></br> 
                            For storing data values in key:value pairs, <b>Dictionary:</b> (“name” : “John”, “age” : 36)<br></br> 
                        </p>                        


                    </p>
                </div>

                <h2>What are variables?</h2>
                <div class = "col">
                    <p>
                        <b>So Kids,</b><br></br><br></br> 

                        <b>We will learn what is a variable?</b><br></br><br></br>  

                        Let's take an apple, a pencil infront of you or a copy, each of this can be considered as a variable. The word variable in programming describes a place to store information such as numbers, text, lists of numbers and text, and so on. Another way of looking at
                        a variable is that it’s like a label for something.<br></br><br></br>

                        Let's say,<br> </br>
                        You have 10 apples with you, you need to assign a value,<br></br>

                        So,<br> </br>
                        <i>  apple = 10"</i><br></br>
                        This means that you have assigned a value "10" for apple. <br></br>
                    </p>
                    <p>
                        <b><i>Remember variable names cannot:</i></b><br></br>
                        -start with a number<br></br>
                        -contain spaces.<br></br>
                        - contain special characters except “_” (underscore)<br></br>
                        -have same name as another variable<br></br>
                    </p>
                </div>

                <h2>What is a Function?</h2>
                <div class = "col">
                    <p>
                        <b>So, what is a function in python?</b><br></br><br> </br>
                        A function is a block of code which performs an action when it is called. You can add arguments to pass data into a function. A function can return data as a result<br></br><br></br>

                        Let's say,<br> </br>
                        You want to perform a task of your choice, such as print anything inside or show a value.<br></br>
                        So, the code snippet below shows how to do it like this: <br></br> <br></br>
                        <img src="function.png" alt="Python Functions" width="800" height="200"/>
                        <br></br>So like this any functions can be processed!<br></br>

                      </p>
                </div>


                <h2>What are Loops?</h2>
                <div class = "col">
                    <p>
                        <b>Now we will understand about an interesting thing, which is called Loop.</b><br></br><br> </br>

                        Looping as like any other programming language, is a process of repeating anything.<br></br><br></br>

                        A loop is a block of code that runs over and over. In Python there are two types of loops: for loops and while loops. <br></br>

                        A for loop repeats a series of commands over a sequence of data, like a list.<br></br>The code Snippet below shows how it is done, for the "fruits" table list each elements needs to be printed.<br>

                        For example we take for loop input of the code as:<br></br><br></br>

                        <i>fruits = ["apple", "mango", "banana"]</i><br></br>
                        <i>for x in fruits: print(x)</i><br></br><br></br>

                        This will show the output like:<br></br>
                         apple<br></br>mango<br></br>banana<br></br><br></br>

                         A while loop repeats a series of commands as long as certain conditions are true. <br></br>
                         
                         <i>number = 1</i><br></br>
                         <i>while number< 6:</i><br></br>
                         <i>print(numbers)</i><br></br>
                         <i>number += 1</i><br></br><br></br>

                        This will show the output printing numbers from 1 to 5:<br></br>
                         1<br></br>2<br></br>3<br></br>4<br></br>5<br></br>
                         
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
                        North South University, Dhaka 1229
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
      </div>          <div class="footer-bottom">
                <div class="holder">
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
