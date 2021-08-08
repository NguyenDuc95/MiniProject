import './App.css';
import React, {Component} from 'react';
import TodoItem from './components/TodoItem';
import tick from './img/tick.svg';
class App extends Component {
  constructor(){
    super();
    this.state = {
      newItem: '',
      todoItems : [
        {title:'item1', isComplete:true},
        {title:'item2', isComplete:true},
        {title:'item3', isComplete:false}
      ]
    }

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }
  onItemClick(item){
    
    return ()=>{
      console.log(item);
      const isComplete = item.isComplete;
      const {todoItems}= this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems:[
         ...todoItems.slice(0,index),
        {
          ...item, 
          isComplete:!isComplete
        },
         ...todoItems.slice(index+1)
        ]
      });
    };
  }
  onKeyUp(event){
    let inputText = event.target.value;
    if((event.keyCode != '13')){
      return;
    }
    if(!inputText || inputText===''){
      return;
    }
    inputText = inputText.trim();
    if(!inputText) return;
    this.setState(
      {
        newItem: '',
        todoItems: [
          { title: inputText, isComplete:false },
          ...this.state.todoItems
        ]
      }
    );


  }
  onChangeInput(event ){
    this.setState({
      newItem: event.target.value
    })
  }

  render(){
    
    return ( 
      <div className="App">
        <div className="Header">
          <img src={tick} width={32} height={32}></img>
          <input type="text"
           placeholder="add new item" 
           onKeyUp={this.onKeyUp}
           value={this.state.newItem}
           onChange={this.onChangeInput}
           ></input>
        </div>

        {
            this.state.todoItems.length>0 && this.state.todoItems.map(
            (it, index)=> 
            <TodoItem key={index} 
            item={it} 
            onClick={this.onItemClick(it)}/>)   
        }
        
        {this.state.todoItems.length === 0 && 'Nothing here'}
        
      </div>
    );
  }
}

export default App;
