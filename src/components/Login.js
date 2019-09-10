import React, { Component } from "react";

export default class Login extends Component {
  state = {
    login: "",
    pass: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    const { login, pass } = this.state;
    localStorage.setItem("login", login);
    localStorage.setItem("pass", pass);
  };
  render() {
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
                      className="form-control text-capitalize"
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
                      type="text"
                      className="form-control text-capitalize"
                      value={this.state.pass}
                      placeholder="Password"
                      required
                      onChange={e => this.setState({ pass: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="btn btn-block btn-info mt-3">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
