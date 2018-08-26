import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
    <div className="App">
      <div className="App-title">The Final Countdown</div>
      <div>
        <div className="clock-days">14 Days, </div>
        <div className="clock-hours">30 Hours, </div>
        <div className="clock-minutes">15 Minutes, </div>
        <div className="clock-seconds">20 Seconds</div>
      </div>
      <div className="App-subtitle">
        <input placeholder="New Date" />
        <button>Submit</button>
      </div>
    </div>
    )
  }
}

export default App;