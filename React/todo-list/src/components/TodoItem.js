import React, {Component} from 'react';
import './TodoItem.css';
import classNames from 'classnames';
import checkImg from '../img/check.png';
import checkCom from '../img/check-complete.png';

class TodoItem extends Component{

    // constructor(props){
    //     super(props);
    //     this.onItemClick = this.onItemClick.bind(this);
    // }
    // onItemClick(){
    //     this.props.item.isComplete = ! this.props.item.isComplete;
    // }


    render(){
        const {item, onClick} = this.props;
        let url = checkImg;
        if(item.isComplete){
            url = checkCom;
        }
        return  (
            <div  className={classNames('TodoItem', {'TodoItem-complete' : item.isComplete})}>
                <img onClick={onClick} src={url} className="icon"></img>
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItem;