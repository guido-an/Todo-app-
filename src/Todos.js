import React from "react";

const Todos = ({todos, deleteTodo}) => {
  const todosList = todos.length ? (
    todos.map(todo => {
      return <div key={todo.id}>
        <p>{todo.content} <span style={{color: "red"}} onClick={() => deleteTodo(todo.id)}>X</span></p>
      </div>
    })
  ) : (
    <p>Todos completed, yay!</p>
  )
   
  return (
    <div>
     {todosList}
    </div>
  );
};

export default Todos;
