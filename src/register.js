import React, { Component } from "react";
import axios from 'axios';

export class RegisterForm extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: "",
          name: "",
          wexp:"",
          age: ""
        };
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

      handleClick = event => {
        event.preventDefault();
        axios.post('http://10.74.18.242:4000/graphql',{
          "query": "mutation  cc($candidateName : String, $candidateAge : Int, $workExperience : Int, $email : String, $password : String){ createCandidate(email : $email, password : $password, workExperience : $workExperience, candidateAge : $candidateAge, candidateName : $candidateName){ candidateId, email, role, isValid } }",
          "operationName": "cc",
          "variables": {
            "email" : this.state.email,
            "password" : btoa(this.state.password),
            "candidateName" : this.state.name,
            "candidateAge" : this.state.age,
            "workExperience" : this.state.wexp
          }
        }).then(function (response) {
            if(response.data.errors){
                alert('Cannot create user please change and try again')
            }else{
                alert('Account created Successfully. Click Ok to login');
                window.location.replace("/login")
            }
        });
      }

    render(){
        var widthStyle = {
            'width' : '50%'
        }
        return(
        <div className="container" style={ widthStyle }>
        <br />
        <form>
          <div className="form-group">
            <label HtmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={event => this.handleChange(event)}/>
            <small id="emailHelp" className="form-text text-muted">Well never share your email </small>
          </div>
          <div className="form-group">
            <label HtmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" onChange={event => this.handleChange(event)}/>
          </div>
        <div className="form-group">
            <label HtmlFor="name">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter Full Name" onChange={event => this.handleChange(event)}/>
        </div>
        <div className="form-group">
            <label HtmlFor="wexp">Work Experience (years) </label>
            <input type="number" className="form-control" id="wexp" onChange={event => this.handleChange(event)}/>
        </div>
        <div className="form-group">
            <label HtmlFor="age">Age (years) </label>
            <input type="number" className="form-control" id="age" onChange={event => this.handleChange(event)}/>
        </div>
        <br />   
        <button type="submit" class="btn btn-primary" onClick={event => this.handleClick(event)}>Sign Up</button>
        </form>     
      </div>
        );
    }
}