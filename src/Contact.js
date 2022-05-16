import React from 'react';
import "./index.css";
class Contact extends React.Component{
  constructor(){
    super();
      this.state = {subject:"" , body:""};

    }

    validateForm = event =>{
      var subject = document.getElementById("subject").value;
      var body = document.getElementById("body").value;
      window.location.href ="mailto : trichysheikabdulla@gmail.com?subject="+subject+"&body="+body;
      event.preventDefault();
      return false;
    }
      render(){
        return(
            <div class="heading">
          <h1 style={{textAlign:"center" , color:"red"}}> Mail Form</h1>
          <div class="container" id="Mailme">
          <div class="row">
          <div class="col-sm-8 offset-md-2">
            <form class="justify-content-center" onSubmit={this.validateForm} target ="_black" method="GET">
                <div class="form-group from-group-lg">
                <lable class="skills" for="subject">
                <b><storng style={{color:"blue"}}>Name</storng></b>
                </lable>
                <input type="text" id="subject" class="form-control" required />
                </div>

                <div class="form-group from-group-lg">
                <lable class="skills" for="body">
                <b><storng style ={{color:"blue"}}>Feedback</storng></b>
                </lable>
                <textarea id="body" class="form-control" row="5" required />
                </div>
                <input type="submit" value="send" id="navigation" class="btn btn-primary"/>

            </form>
          </div>
          </div>
          </div>
          </div>
        );

      }
  }
export default Contact;
