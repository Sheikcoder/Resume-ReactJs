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
import "./index.js"

class Youtube extends React.Component{
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
             <span>Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
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
        <div class= "embed-responsive embed-responsive-16by9">
        <br />
        <iframe
        class="embed-responsive-item"
        src="https://www.youtube.com/embed/ZL9YoHHMYzk"
        frameborder="0"
        allow="accelerometer; autoplay ;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        />
        </div>
        </div>

        <div class="col-sm-4">
        <div class= "embed-responsive embed-responsive-16by9">
        <br />
        <iframe
        class="embed-responsive-item"
        src="https://www.youtube.com/embed/t15mstYGSaM"
        frameborder="0"
        allow="accelerometer; autoplay ;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        />
        </div>
        </div>

        <div class="col-sm-4">
        <div class= "embed-responsive embed-responsive-16by9">
        <br />
        <iframe
        class="embed-responsive-item"
        src="https://www.youtube.com/embed/hO6xeTsg1YQ"
        frameborder="0"
        allow="accelerometer; autoplay ;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        />
        </div>
        </div>

        <div class="col-sm-4">
        <div class= "embed-responsive embed-responsive-16by9">
        <br />
        <iframe
        class="embed-responsive-item"
        src="https://www.youtube.com/embed/T0WMgId9hrY"
        frameborder="0"
        allow="accelerometer; autoplay ;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        />
        </div>
        </div>

        <div class="col-sm-4">
        <div class= "embed-responsive embed-responsive-16by9">
        <br />
        <iframe
        class="embed-responsive-item"
        src="https://www.youtube.com/embed/mZVLdHdPtEE"
        frameborder="0"
        allow="accelerometer; autoplay ;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        />
        </div>
        </div>
  </div>
</div>







                                  <div class="jumbotron text-center" id="footer">
                                    <ul class="nav justify-content-center">
                                    <li class="nav-item">
                                      <a href="http://www.linkedin.com/"
                                      class="fa fa-linkedin nav-link"
                                      style={{color:"blue"}}
                                      />
                                    </li>
                                    <li class="nav-item">
                                      <a href="http://www.youtube.com/"
                                      class="fa fa-youtube nav-link"
                                      style={{color:"Red"}}
                                      />
                                    </li>
                                    <li class="nav-item">
                                      <a href="http://www.github.com/"
                                      class="fa fa-github nav-link"
                                      style={{color:"gray"}}
                                      />
                                    </li>
                                    <li class="nav-item">
                                      <a href="http://www.instagram.com/"
                                      class="fa fa-instagram nav-link"
                                      style={{color:"red"}}
                                      />
                                    </li>
                                    <li class="nav-item">
                                      <a href="http://www.facebook.com/"
                                      class="fa fa-facebook nav-link"
                                      style={{color:"blue"}}
                                      />
                                    </li>
                                    <li class="nav-item">
                                      <a href="http://www.twitter.com/"
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



export default Youtube;
