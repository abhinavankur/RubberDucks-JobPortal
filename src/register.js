import React, { Component } from "react";

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
      // handleSubmit = event => {
      //       alert("triggered on submit bitches")
      //       alert({this.state.email})
      //       alert({this.state.password})
      //       alert({this.state.name})
      //       alert({this.state.wexp})
      //       alert({this.state.age})
      // }
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
        <button type="submit" class="btn btn-primary" onSubmit={event => this.handleSubmitr(event)}>Sign Up</button>
        </form>     
      </div>
        );
    }
}