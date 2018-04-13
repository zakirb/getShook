import React, { Component } from 'react';
import auth from '../auth';
import { Navbar, NavItem, Icon, Dropdown, Button, Row, Col, Input } from "react-materialize";


class SignUp extends Component {
  constructor(props) {
    super()
    this.state = {
      first_name:"",
      last_name:"",
      username: "",
      email: "",
      password: ""
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
      e.preventDefault()
      const { first_name, last_name, username, email, password } = this.state
      const request = { first_name, last_name, username, email, password }
      auth.signUp(request, (response) => {
        if (response.authenticated) {
          this.setState({
            first_name:"",
            last_name:"",
            username: "",
            email: "",
            password: ""
          })
          this.props.history.replace('/')
        } else {
          console.log('NOT AUTHENTICATED')
        }
      })
  }

  render() {
    const { username, email, password, first_name, last_name } = this.state;
    return (
    <Row >
      <div className="col s12 m8 offset-m2 formContainer">
        <form onSubmit={this.handleSubmit}>
          <input className="col s12" type="text" name='first_name' placeholder="first_name" value={first_name} onChange={this.handleChange}/>
          <input className="col s12" type="text" name='last_name' placeholder="last_name" value={last_name} onChange={this.handleChange}/>
          <input className="col s12" type="text" name='username' placeholder="username" value={username} onChange={this.handleChange}/>
          <input className="col s12" type="email" name='email' placeholder="email" value={email} onChange={this.handleChange}/>
          <input className="col s12" type="password" name='password' placeholder="password" value={password} onChange={this.handleChange}/>
          <div className='col s12 center-butt center'>
            <input className="btn" waves="light" type="submit" value='SIGNUP' />
          </div>
        </form>
      </div>
    </Row>
    )
  }
}
export default SignUp;
