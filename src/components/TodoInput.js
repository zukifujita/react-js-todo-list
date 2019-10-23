import React from 'react';

class TodoInput extends React.Component {
    state = {
        inputValue: ''
    };

    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    addRecord = () => {
        this.props.onAddNewTodo(this.state.inputValue);
        this.setState({ inputValue: '' });
    }

    render () {
        return (
            <div>
                <input type="text" value={ this.state.inputValue } onChange={ this.handleInputChange } />
                <button onClick={ this.addRecord }>Add</button>
            </div>
        )
    }
}

export default TodoInput;