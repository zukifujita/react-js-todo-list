import React from 'react';
import TodoInput from './TodoInput';
import Todos from './Todos';

class TodoWrapper extends React.Component {
    state = { todos: [] };

    addNewTodo = newTodo => {
        this.state.todos.push({ content: newTodo, status: false })
        this.setState({ todos: this.state.todos })
    };

    render() {
        return (
            <div>
                <TodoInput onAddNewTodo={ this.addNewTodo } />
                <Todos todos={ this.state.todos } />
            </div>
        )
    }
}

export default TodoWrapper;