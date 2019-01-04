import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Buy Milk',
        complete: false
      },
      {
        id: 2,
        title: 'Play some Mario Kart',
        complete: false
      },
      {
        id: 3,
        title: 'Binge watch Netflix',
        complete: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.complete = !todo.complete
        }
        return todo;
      })
    })
  }

  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
