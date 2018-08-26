import React, { Component } from 'react';
import './App.css';

class Clock extends Component  {
  constructor(props){
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }
  
  render() {
    return (
      <div>
        <div className="clock-days">{this.state.days}</div>
        <div className="clock-hours">{this.state.hours}</div>
        <div className="clock-minutes">{this.state.minutes} </div>
        <div className="clock-seconds">{this.state.seconds}</div>
      </div>
    )
  }
}

export default Clock;