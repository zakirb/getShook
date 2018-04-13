import React, { Component } from 'react';
import auth from '../auth';
import { Navbar, NavItem, Icon, Dropdown, Button, Row, Col, Input } from "react-materialize";


class Login extends Component {
  constructor(props) {
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
      e.preventDefault()
      auth.login(this.state.username, this.state.password, (loggedIn) => {
          if (loggedIn) {
              this.props.history.replace('/profile/')
              console.log('LOGGED IN, history is above')
          }
      })
  }

  render() {
    const { username, password } = this.state;
    return (
      <Row>
        <div className="col s12 m8 offset-m2 formContainer">
          <form onSubmit={this.handleSubmit}>
              <input className="col s12" type="text" name='username' placeholder="username" value={username} onChange={this.handleChange}/>
              <input className="col s12" type="password" name='password' placeholder="password" value={password} onChange={this.handleChange}/>
              <div className='col s12 center-butt center'>
                <input className="btn" waves="light" type="submit" value='LOGIN'/>
              </div>
          </form>
        </div>
      </Row>
    )
  }
}
export default Login;
