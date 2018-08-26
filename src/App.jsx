import React, { Component } from 'react';
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
      <div>
        <div className="clock-days">14 Days, </div>
        <div className="clock-hours">30 Hours, </div>
        <div className="clock-minutes">15 Minutes, </div>
        <div className="clock-seconds">20 Seconds</div>
      </div>
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