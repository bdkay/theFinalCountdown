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
    };
  }
  
  getTimeUntil(deadline){
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log(time);
    console.log(deadline);
  }
  
  render() {
    this.getTimeUntil(this.props.deadline);
    return (
      <div>
        <div className="clock-days">{this.state.days} Days</div>
        <div className="clock-hours">{this.state.hours} Hours</div>
        <div className="clock-minutes">{this.state.minutes} Minutes</div>
        <div className="clock-seconds">{this.state.seconds} Seconds</div>
      </div>
    )
  }
}

export default Clock;