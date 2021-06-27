import React, {Component} from 'react';

class List extends Component {


    checkUpdate = (id) => {
        // console.log(id);
        this.props.checkUpdate(id)

    }

    changeBgcOnMouseOver = (e) => {
        if (e.target.tagName === 'LI') {
            // console.dir(e);
            e.target.style.backgroundColor = '#999';
            e.target.childNodes[1].style.display = 'block'
        }

        if (e.target.tagName === 'BUTTON') {
            e.target.parentNode.style.backgroundColor = '#999';
            e.target.style.display = 'block'

        }


    }
    changeBgcOnMouseOut = (e) => {
        if (e.target.tagName === 'LI') {
            e.target.style.backgroundColor = '#fff'
            e.target.childNodes[1].style.display = 'none'
        }

        if (e.target.tagName === 'BUTTON') {
            e.target.parentNode.style.backgroundColor = '#fff';
            e.target.style.display = 'none'

        }

    }
    deleteOneTodo = (id) => {

        this.props.deleteOneTodo(id);

    }

    render() {
        const {todos} = this.props;
        // const {id,name,done}=this.props.todos;
        return (
            <ul className="todo-main" onMouseOver={this.changeBgcOnMouseOver} onMouseOut={this.changeBgcOnMouseOut}>
                {todos.map(todos =>
                    <li key={todos.id} className="todo-list">
                        <label>
                            <input type="checkbox" checked={todos.done}
                                   onChange={() => this.checkUpdate(todos.id)}/>
                            <span>{todos.name}</span>
                        </label>
                        <button className="btn btn-danger" onClick={() => this.deleteOneTodo(todos.id)}>删除</button>
                    </li>
                )}

            </ul>
        );
    }
}

export default List;
