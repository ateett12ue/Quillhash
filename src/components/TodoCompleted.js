import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoCompleted extends Component {
  render() {
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo Completed</h3>
        <TodoItem />
        <button
          type="button"
          className="btn btn-secondary btn-block text-capitalize mt-4"
        >
          clear list
        </button>
      </ul>
    );
  }
}
