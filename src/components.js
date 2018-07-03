import React from 'react';
import ReactDOM from 'react-dom';

export class RBButton extends React.Component {
    render() {
      return (
        <button type="button" class="btn btn-primary">Primary</button>
      );
    }
  }

export class CollapsingCard extends React.Component{
    render(){
        var cardStyle = {
            padding: 0
        }
        return(
            <div class="card">
            <div class="card-header" >
                <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo">Primary</button>
            </div>
            <div class="card-body collapse" style={cardStyle} id="demo">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Some example text. Some example text.</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        );
    }
}

export class BigTextBox extends Component{
  render(props){
    return(
      <textarea className="form-control col-sm-6" id={this.props.id}  rows={this.props.rows} />
    );
  }
}

export class SingleSelect extends Component{
  constructor(props){
    super(props);
    this.state={
      "neededList":props.listNeeded
    }
  }
  render(props){
    let portfolioList = ['Verizon Enterprise Solutions','Verizon Consumer Markets','Verizon Wireless'];
    const neededList = this.state.neededList;
    console.log(neededList)
    if(neededList === 'Portfolios'){
      return(
          portfolioList.map((port) => <option value={port}>{port}</option>)
      );
    }
  }
}

export class TextLabel extends Component{
  render(props){
    return(
      <label className="col-sm-2 col-form-label" htmlFor={this.props.id}>{this.props.text}</label>
    );
  }
}

exportclass TextBox extends Component{
  render(props){
    return(
      <input type={this.props.type} className="col-sm-6 form-control" placeholder={this.props.hint} id={this.props.id} />
    );
  }
}
