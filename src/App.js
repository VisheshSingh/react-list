import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About'
import uuid from 'uuid';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => {
      this.setState({ todos: res.data })
    })
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

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      complete: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos
                todos={this.state.todos}
                markComplete={this.markComplete}
                deleteTodo={this.deleteTodo} />
            </React.Fragment>
          )} />
          <Route eaxct path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
