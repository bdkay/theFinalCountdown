import React, { Component } from 'react';
import Clock from './Clock';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 31st, 2099',
      newDeadline: ''
    }
  }
  
  changeDeadline(){
    this.setState({
      deadline: this.state.newDeadline
    });
    console.log('state: ', this.state);
  }
  
  render(){
    return (
      <div className="App">
        <div className="App-title">
          The Final Countdown
        </div>
        <div className="App-subtitle">
          {this.state.deadline}
        </div>
        
        <Clock />
        
        <div className="App-submit">
          <input
            placeholder="New Date"
            onChange={event => this.setState({ newDeadline: event.target.value })}
          />
          <button onClick={() => this.changeDeadline()}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default App;