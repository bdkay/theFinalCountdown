import React, { Component } from 'react';
import './App.css';

class Clock extends Component  {
  constructor(props){
    super(props);
  }
  
  render(){
    <div>
      <div className="clock-days">14 Days, </div>
      <div className="clock-hours">30 Hours, </div>
      <div className="clock-minutes">15 Minutes, </div>
      <div className="clock-seconds">20 Seconds</div>
    </div>
  }
}

export default Clock;