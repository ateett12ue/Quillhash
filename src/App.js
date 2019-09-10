import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./pages/Todo";
import Login from "./components/Login";
class App extends Component {
  render() {
    return (
      <>
        <Login />
        <Todo />
      </>
    );
  }
}

export default App;
