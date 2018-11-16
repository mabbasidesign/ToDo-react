import React, { Component } from 'react';
import './App.css';
import Todos from './todos';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario cart'},
      {id: 3, content: 'buy some milk'},
      {id: 4, content: 'play mario cart'}
    ]
  }

  deleteTodos = id => {
    console.log(id);
    const todos = this.state.todos.filter(t => t.id !== id);
    this.setState({ todos });
  }

  render() {
    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
        <Todos
        todos={this.state.todos}
        deleteTodos={this.deleteTodos}
        />
      </div>
    );
  }
}

export default App;
