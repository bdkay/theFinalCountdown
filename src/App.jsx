import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 31st, 2099'
    }
  }
  
  changeDeadline(){
    this.setState({
      deadline: 'November 25, 2099'
    })
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
      <div>
        <div className="clock-days">14 Days, </div>
        <div className="clock-hours">30 Hours, </div>
        <div className="clock-minutes">15 Minutes, </div>
        <div className="clock-seconds">20 Seconds</div>
      </div>
      <div className="App-submit">
        <input placeholder="New Date" />
        <button onClick={() => this.changeDeadline()}>
          Submit
        </button>
      </div>
    </div>
    )
  }
}

export default App;