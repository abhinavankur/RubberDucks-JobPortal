import React, { Component } from "react";

export class myLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    var widthStyle = {
      'width' : '50%'
    }
    return (
      <div className="container" style={ widthStyle }>
        <br />
        <form>
          <div className="form-group">
            <label HtmlFor="EmailId">Email address</label>
            <input type="email" className="form-control" id="EmailId" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">Well never share your email </small>
          </div>
          <div className="form-group">
            <label HtmlFor="password">Password</label>
            <input type="password" className="form-control" id="passowrd" placeholder="Password" />
          </div>
          <button type="submit" class="btn btn-primary">Log In</button>
        </form>
        <h3> Don't Have an account ? Create One!</h3>
        
      </div>
    );
  }
}
