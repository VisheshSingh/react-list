import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            padding: '10px',
            backgroundColor: '#eee',
            borderBottom: '1px dashed #000',
            textDecoration: this.props.todo.complete ? 'line-through' : 'none'
        }
    }
    render() {
        let { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={() => { this.props.markComplete(id) }} />
                <span>{title}</span>
            </div>
        )
    }
}

// PROPTYPES
TodoItem.proptypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
