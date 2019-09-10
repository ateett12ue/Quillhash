import React, { Component } from "react";

export default class TodoItem extends Component {
  state = {
    completed: false
  };
  handleDone = () => {
    this.setState({
      completed: !this.state.completed
    });
  };
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6
          style={{
            textDecoration: this.state.completed ? "line-through" : "none",
            color: this.state.completed ? "grey" : "black"
          }}
        >
          {title}
        </h6>
        <div className="todo-icon">
          <span
            className={
              this.state.completed ? "mx-1 text-secondary" : "mx-1 text-warning"
            }
            onClick={this.handleDone}
            style={{ cursor: "pointer" }}
          >
            <i
              className={this.state.completed ? "fas fa-times" : "fas fa-check"}
            ></i>
          </span>
          <span
            className={
              this.state.completed ? "mx-1 text-secondary" : "mx-1 text-success"
            }
            style={{ cursor: "pointer" }}
            onClick={handleEdit}
          >
            <i className="fas fa-pen"></i>
          </span>
          <span
            className={
              this.state.completed ? "mx-1 text-secondary" : "mx-1 text-danger"
            }
            style={{ cursor: "pointer" }}
            onClick={handleDelete}
          >
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}
