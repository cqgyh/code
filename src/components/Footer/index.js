import React, {Component} from 'react';

class Footer extends Component {
    getAllDidTodos = () => {
      return  this.props.todos.reduce((pre,curr) => pre+(curr.done ?1:0),0)
    }
    deleteAllDidTodo = () => {
        this.props.deleteAllDidTodo()
    }
    selectAllOrSelectNone = (e) => {
        // console.log(e.target.checked)
        this.props.selectAllOrSelectNone(e.target.checked)

    }
    isChecked = () => {
        return this.props.todos.every((todo) =>todo.done)&&this.props.todos.length>0;
        // console.log(this.props.todos.every((todo) => todo.done));
        // return this.props.todos.every((todo) =>todo.done);

        // return this.props.todos.filter((todosObj) => todosObj.done).length;
    }


    render() {
        const {todos}=this.props;

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" id="checkAll" checked={this.isChecked()}  onChange={this.selectAllOrSelectNone}/>
                </label>
                <span>
                    已完成 <span id="allComplateTodos">{this.getAllDidTodos()}</span>
                    /全部 <span id="allTodos">{todos.length}</span>
                </span>
                <button id="removeAllComplate" className="btn btn-danger" onClick={this.deleteAllDidTodo}>清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;
