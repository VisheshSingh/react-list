import React, { Component } from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

    render() {
        const todoItems = this.props.todos.map(todo => {
            return <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo} />
        })
        return (
            <div>
                {todoItems}
            </div>
        )
    }
}

// PROPTYPES
Todos.proptypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default Todos
