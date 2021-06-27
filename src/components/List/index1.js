import React, {Component} from 'react';

class List extends Component {


    checkUpdate = (id) => {
        // console.log(id);
        this.props.checkUpdate(id)
    }

    changeBgcOnMouseEnter = (e) => {
        e.target.style.backgroundColor = '#999';
        e.target.childNodes[1].style.display = 'block'
    }
    changeBgcOnMouseLeave = (e) => {
        e.target.style.backgroundColor = '#fff'
        e.target.childNodes[1].style.display = 'none'
    }

    render() {
        const {todos} = this.props;
        // const {id,name,done}=this.props.todos;
        return (
            <ul className="todo-main">
                {todos.map(todos =>
                    <li key={todos.id} className="todo-list"
                        onMouseEnter={this.changeBgcOnMouseEnter} onMouseLeave={this.changeBgcOnMouseLeave}
                    >
                        <label>
                            <input type="checkbox" defaultChecked={todos.done}
                                   onChange={() => this.checkUpdate(todos.id)}/>
                            <span>{todos.name}</span>
                        </label>
                        <button className="btn btn-danger">删除</button>
                    </li>
                )}

            </ul>
        );
    }
}

export default List;
