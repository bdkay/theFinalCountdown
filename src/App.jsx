import React, { Component } from 'react';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 31, 2099',
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
        
        <Clock
        deadline={this.state.deadline}
        />
        
        <Form inline className="App-submit">
          <FormControl
            placeholder="New Date"
            onChange={event => this.setState({ newDeadline: event.target.value })}
          />
          <Button onClick={() => this.changeDeadline()}>
           Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default App;