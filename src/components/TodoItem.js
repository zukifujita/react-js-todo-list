import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: this.props.todo.status,
        };
    }

    changeValue = (e) => {
        e && e.preventDefault();
        this.props.onChange({...this.props.todo, status: !this.state.status})
        this.setState({status: !this.state.status})
    }

    render() {
        const {todo} = this.props;
        return (
            <div onClick={this.changeValue}>
                <label>
                    <input type="checkbox" checked={this.state.status} onChange={this.props.changeValue}/>
                </label>
                <label>
                    {todo.content}
                </label>
            </div>
        )
    }
}

export default TodoItem;