import React, {Component} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css'

class App extends Component {
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '打豆豆', done: false},
        ]
    }
    addTodo = (newTodo) => {
        this.setState({
           todos:[newTodo,...this.state.todos]
        })
    }

    checkUpdate = (id) => {
        // console.log(id);
        const newTodos =[...this.state.todos].map((item) => {
            if (item.id===id){item.done=!item.done;}
            return item;
        })
        // console.log(newTodos);
        this.setState({
            todos:newTodos
        })

    }
    deleteOneTodo = (id) => {
        const newTodos =[...this.state.todos].filter((item) => {
            return  item.id!==id;
        })
        // console.log(newTodos);
        this.setState({
            todos:newTodos
        })
    }
    deleteAllDidTodo = () => {
        const newTodos =[...this.state.todos].filter((item) => {
            return  !item.done;
        })
        // console.log(newTodos);
        this.setState({
            todos:newTodos
        })
    }


    selectAllOrSelectNone = (flag) => {
        const newTodos =[...this.state.todos].map((item) => {
             item.done=flag;
             return item;
        })
        // console.log(newTodos);
        this.setState({
            todos:newTodos
        })


    }

    render() {
        return (

                <div className="todo-container">
                    <Header addTodo={this.addTodo}/>
                    <List todos={this.state.todos} checkUpdate={this.checkUpdate} deleteOneTodo={this.deleteOneTodo}/>
                    <Footer todos={this.state.todos} deleteAllDidTodo={this.deleteAllDidTodo} selectAllOrSelectNone={this.selectAllOrSelectNone}/>
                </div>



        );
    }
}

export default App;
