import React, { Component } from 'react';
import './App.css';
import Todos from './todos';
import AddTodo from './addForm';

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

  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
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
        <AddTodo addTodo ={this.addTodo} />
      </div>
    );
  }
}

export default App;
