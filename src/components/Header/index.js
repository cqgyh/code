import React, {Component} from 'react';
import {nanoid} from 'nanoid'

class Header extends Component {


    handleNewTodo = (e) => {
        //按enter键且输入内容不为空才进行添加操作
        if (e.keyCode !==13)return;
        if (e.target.value.trim() ==='')return;
        //生成新的todo
        const newTodo = {id:nanoid(),name:e.target.value.trim(),done:false};
        //增加新的todo
        this.props.addTodo(newTodo)
        //将输入框清空
        e.target.value='';


    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" id="newTodo" placeholder="请输入您的任务，回车确认" onKeyUp={this.handleNewTodo}/>
            </div>
        );
    }
}

export default Header;
