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
