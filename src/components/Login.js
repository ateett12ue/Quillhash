import React, { Component } from "react";
import data from "../json-server/data.json";
import Todo from "../pages/Todo";
export default class Login extends Component {
  state = {
    login: "",
    pass: "",
    viewTodo: false
  };
  //login component
  componentDidMount() {
    localStorage.clear();
    localStorage.setItem("users", JSON.stringify(data.users));
  }
  handleSubmit = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    let bol = users.some(user => {
      if (user.login == this.state.login) {
        console.log(user.login);
        const foundUser = user.pass == this.state.pass ? user : "Not Found";
        return foundUser;
      }
    });
    if (bol == true) {
      this.setState({
        viewTodo: true
      });
    } else {
      this.setState({
        viewTodo: false
      });
    }
  };
  render() {
    if (!this.state.viewTodo) {
      return (
        <>
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto col-md-8 mt-4">
                <h3 className="text-capitalize text-center">todo input</h3>
                <div className="card card-body my-3">
                  <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                          <i className="fas fa-address-card" />
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.login}
                        placeholder="Login Id"
                        onChange={e => this.setState({ login: e.target.value })}
                      />
                    </div>
                    <div className="input-group mt-4">
                      <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                          <i className="fas fa-key" />
                        </div>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        value={this.state.pass}
                        placeholder="Password"
                        required
                        onChange={e => this.setState({ pass: e.target.value })}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-block btn-info mt-3"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <Todo />;
    }
  }
}
