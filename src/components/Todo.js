import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Todo extends Component {
  render() {
    return (
      <div className="App">
        <Link to={'/'}>Back</Link>
        <br />
        Simple Todo View
      </div>
    );
  }
}

export default Todo;
