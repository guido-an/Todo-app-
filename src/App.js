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

  render(){
    return(
      <div>
        <h1>Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

export default App;
