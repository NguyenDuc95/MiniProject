import logo from './logo.svg';
import './App.css';
import TrafficLight from './component/TrafficLight';
import { Component } from 'react';
const RED = 0;
const ORANGE = 1;
const GREEN = 2;
class App extends Component {
  constructor(){
    super();
    this.state = {
        currentColor: GREEN
    }
    setInterval(()=>{
      console.log(this.state.currentColor);
      this.setState(
          {currentColor: this.getNextColor(this.state.currentColor)}
      );
    },1000);
  }
  render(){
    const {currentColor} = this.state;
    return (
      <div className="App">
        <TrafficLight currentColor= {currentColor}/>
      </div>
    );
    
  }
  getNextColor(color){
    switch(color){
        case RED:
            return ORANGE;
        case ORANGE:
            return GREEN;
        default:
            return RED;
    }
  }
}

export default App;
