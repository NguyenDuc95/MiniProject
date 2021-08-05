import './App.css';
import React, {Component} from 'react';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(){
    super();
    this.todoItems = [
      {title:'item1', isComplete:true},
      {title:'item2', isComplete:false},
      {title:'item3', isComplete:false}
    ];
  }
  
  render(){
    return ( 
      <div className="App">
        {
            this.todoItems.length>0 && this.todoItems.map(
            (it, index)=> <TodoItem key={index} item={it}/>)   
        }
        {this.todoItems.length == 0 && 'Nothing here'}
      </div>
    );
  }
}

export default App;
