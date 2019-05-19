import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  
   state = {
     todos: [
       {id: 1, content: "buy some milk"},
       {id: 2, content: "buy some beer"},
       {id: 3, content: "do not forget the beer"}
     ]
   }

   deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
       return todo.id !== id
     })
     this.setState({
       todos: todos
     })
   }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }
  render(){
    return(
      <div>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;
