import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';

class Home extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <body>
        <div class="heading">
        <div class="jumbotron text-center" id="heading">
        <h1 class="myname">Sheik Abdulla</h1>
        <p class="myoccupation">React(frontend)-Sofware Developer</p>
        <ul class="nav nav-pills nav-justified" id="navigation">
          <li class="nav-item">
            <a class= "nav-link active" href="/">
            Home
            </a>
          </li>
          <li class="nav-item">
            <a class= "nav-link active" href="/youtube">
            Youtube
            </a>
          </li>
          <li class="nav-item">
            <a class= "nav-link active" href="/contact">
            Contact
            </a>
          </li>
        </ul>
        </div>
        <div class="container">
        <div class="row">
        <div class="col-sm-4">
        <div class= "rounded-circle">
            <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQFR0WnBQKCV9Q/profile-displayphoto-shrink_200_200/0/1622286298038?e=1653523200&v=beta&t=tl72veFQ2np59Hpbx4LN8LFEXSJlvfJvTTLdty9F_dM"
            class="rounded-circle mx auto d-block"
            alt="this my photo"
            width="130px"
            height="150px"
            />
            </div>
            <br />
            </div>
              <div class="col-sm-8">
              <h2 class="myskils"> Career Objective</h2>
              <br />
              <p class="Skills">
              To obtain a position where I can maximize my organizational and interpersonal skills and knowledge which will contribute my years of experience, that will allow me to grow personally and professionally.
              </p>
              </div>
              </div>
              </div>
              <br />
                          <div class="container">
                          <div class="row">
                          <div class="col-sm-6">
                          <h2 class="myskils"> Technical Skills</h2>
                          <br />
                          <ul class="skills">
                          <li>
                            Front end languages = HTML , CSS , JavaScript , React JS
                          </li>
                          <li>
                            Back end languages = Java , Python , Node JS
                          </li>
                          <li>
                            Database = MySQL , MongoDB
                          </li>
                          </ul>
                          </div>
                                    <div class="col-sm-6">
                                    <h2 class="myskils"> Internship and Certification </h2>
                                    <ul class="skills">
                                    <li>
                                      I done My Post Graduate Diploma in Computer Application (PGDCA) in TMC Computer center.
                                    </li>
                                    <li>
                                      I Also done My Diploma in Computer Application (DCA) in TMC Computer center.
                                    </li>
                                    </ul>
                                    </div>
                                    <br />
                                          <div class="col-sm-12">
                                          <h2 class="myskils"> My Project </h2>
                                          <br />
                                          <table class="table table-dark table-striped">
                                          <thead>
                                          <tr>
                                            <th>Course</th>
                                            <th>Name of the Institution</th>
                                            <th>Percentage</th>
                                            <th>Year of Passing</th>
                                          </tr>
                                          </thead>
                                              <tbody>
                                              <tr>
                                                <td>MSc(Computer Science)</td>
                                                <td>Jamal Mohamed College, Trichy </td>
                                                <td>
                                                    84%
                                                </td>
                                                <td>2019-2021 </td>
                                              </tr>
                                              <tr>
                                                <td>PGDCA</td>
                                                <td>TMC COMPUTER CENTRE </td>
                                                <td>
                                                    A+ Grade
                                                </td>
                                                <td>2019</td>
                                              </tr>
                                              <tr>
                                                <td>BCA (Computer Application)</td>
                                                <td>Jamal Mohamed College, Trichy</td>
                                                <td>
                                                    57%
                                                </td>
                                                  <td>2017-2019</td>
                                              </tr>
                                              <tr>
                                                <td>H.S.C</td>
                                                <td>National College Hr Sec School, Trichy</td>
                                                <td>
                                                    70%
                                                </td>
                                                  <td>2016</td>
                                              </tr>
                                              <tr>
                                                <td>S.S.L.C</td>
                                                <td>Bishop Heber Hr Sec School, Trichy</td>
                                                <td>
                                                    58%
                                                </td>
                                                  <td>2014</td>
                                              </tr>
                                              </tbody>
                                          </table>
                                          </div>

                                          <div class="col-sm-12">
                                          <h2 class="myskils"> My Project </h2>
                                          <br />
                                          <table class="table table-dark table-striped">
                                          <thead>
                                          <tr>
                                            <th>Project Domin</th>
                                            <th>Project Languages</th>
                                            <th>Project link</th>
                                          </tr>
                                          </thead>
                                              <tbody>
                                              <tr>
                                                <td>Star Matel Arts web Development</td>
                                                <td>Php , HTML , css , MySQL </td>
                                                <td>
                                                    <a href={"https://smartmetal.in/"}> Star Metal Web </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>Matharsh Covering Managment</td>
                                                <td>Php , HTML , css , MySQL </td>
                                                <td>
                                                    <a href={"https://www.chidambaramcovering.com/"}> Matharsh COvering Web</a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>My website</td>
                                                <td>React JS </td>
                                                <td>
                                                    <a href={"https://www.facebook.com/Trichy.Sheikabdulla"}> My Web</a>
                                                </td>
                                              </tr>
                                              </tbody>
                                          </table>
                                          </div>

                          </div>
                          </div>
                                  <div class="jumbotron text-center" id="footer">
                                    <ul class="nav justify-content-center">
                                    <li class="nav-item">
                                      <a href="http://https://www.linkedin.com/in/trichy-sheik-abdulla-a6601b182/"
                                      class="fa fa-linkedin nav-link"
                                      style={{color:"blue"}}
                                      />
                                    </li>
                                    <li class="nav-item">
                                      <a href="http://https://www.youtube.com/channel/UCR8puyYSfCGd2Wt60dhwEyA/"
                                      class="fa fa-youtube nav-link"
                                      style={{color:"Red"}}
                                      />
                                    </li>
                                    <li class="nav-item">
                                      <a href="https://github.com/Sheikcoder"
                                      class="fa fa-github nav-link"
                                      style={{color:"gray"}}
                                      />
                                    </li>
                                    <li class="nav-item">
                                      <a href="http://www.instagram.com/trichy_sheik_abdulla"
                                      class="fa fa-instagram nav-link"
                                      style={{color:"red"}}
                                      />
                                    </li>
                                    <li class="nav-item">
                                      <a href="https://www.facebook.com/media/set/?set=a.1382619682018223&type=3"
                                      class="fa fa-facebook nav-link"
                                      style={{color:"blue"}}
                                      />
                                    </li>
                                    <li class="nav-item">
                                      <a href="https://twitter.com/trichy_sheik"
                                      class="fa fa-twitter nav-link"
                                      style={{color:"Light-blue"}}
                                      />
                                    </li>
                                    </ul>
                                  </div>
        </div>
      </body>
    );
  }
}

export default Home;
