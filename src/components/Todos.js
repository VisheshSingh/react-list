import React, { Component } from 'react'
import TodoItem from './TodoItem';

class Todos extends Component {
    render() {
        const todoItems = this.props.todos.map(todo => {
            return <TodoItem key={todo.id} todo={todo} />
        })
        return (
            <div>
                {todoItems}
            </div>
        )
    }
}

export default Todos
