import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            padding: '10px',
            backgroundColor: '#eee',
            borderBottom: '1px dashed #000',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        let { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={() => { this.props.markComplete(id) }} />
                <span>{title}</span>
                <button style={btnStyle} onClick={() => { this.props.deleteTodo(id) }}>X</button>
            </div>
        )
    }
}
// BTN STYLE
const btnStyle = {
    backgroundColor: '#f00',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
// PROPTYPES
TodoItem.proptypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default TodoItem
