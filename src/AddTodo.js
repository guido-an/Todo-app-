import React, { Component } from 'react'

class AddTodo extends Component {

  state = {
    content: ""
  }

   handleSubmit = (e) => {
     e.preventDefault()
     this.props.addTodo(this.state)  // this.state = todo in App.js (addTodo = (todo){})
     this.setState({
       content: ""    // reset the input after submit
     })
   }

   handleChange = (e) => {
     this.setState({
       content: e.target.value   
     })
    
   }

  render() {
    return (
      <div> 
        <form onSubmit={this.handleSubmit}>
          <label>Add to do</label>
          <input value={this.state.content}type="text" onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}


export default AddTodo