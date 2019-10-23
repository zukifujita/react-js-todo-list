import React from 'react';
import './Todos.css';
import TodoItem from './TodoItem';

class Todos extends React.Component {

    changeStatus = (todoItem) => {
        console.log("todoItem == ", todoItem)
    };

    render() {
        const {todos} = this.props;
        return (
            <div className={"Todos"}>
                <ul>
                    {todos.map((todo, i) =>
                        <li key={i}>
                            <TodoItem
                                todo={todo}
                                onChange={this.changeStatus}/>
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}

export default Todos;