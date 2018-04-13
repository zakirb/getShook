import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar, NavItem, Icon, Dropdown, Button, Input, Row } from "react-materialize";
import axios from 'axios';
import auth from '../auth';

class ProposalForm extends Component {
  constructor(props) {
    super()
    this.state = {
      proposer: "",
      acceptor: "",
      description: "",
      type: "",
      proposal: "",
      otherUsers:[]
    }
  }

  componentDidMount() {
    let token = localStorage.token
    auth.getUser( (res) => {
      this.setState({
        proposer:res.id
      })
    })
    axios({
      method:'GET',
      url:'/api/users',
      headers: {
        Authorization: "Token " + `${token}`
      }
    }).then( (res) => {
      console.log('RESPONSE', res)
      this.setState({
        otherUsers:res.data
      })
    })
    .catch((err) => {
      console.log('ERROR', err)
    })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  };

  handleSubmit = e => {
    let token = localStorage.token
    e.preventDefault();
    const { proposer, acceptor, description, type, proposal } = this.state;
    const Shake = { proposer, acceptor, description, type, proposal };
    const conf = {
      method: "post",
      url: '/api/shakes/',
      data: Shake,
      headers: {
        Authorization: "Token " + `${token}`
      }
    };
    axios(conf).then( (res) => {
      console.log('SUCCESS', res)
    })
    .catch( (err) => {
      console.log('ERROR', err)
    })

  };



  render() {
    const { proposer, acceptor, description, type, proposal, otherUsers } = this.state;

    let acceptorOptions = otherUsers.map((user) => {
      return (<option value={user.id}>{user.username}</option>)
    })

    return (
      <Row>
        <div className="col s12 m8 offset-m2 ProFormContainer">
          <form onSubmit={this.handleSubmit}>
            <input className="input" type="hidden" name="proposer" onChange={this.handleChange} value={proposer} required />

            <div className="field">
              <label className="label"></label>
              <div className="control">
                <Input type='select' name="acceptor" onChange={this.handleChange} defaultValue={'---'}>
                  <option value={'---'} disabled>---</option>
                  {acceptorOptions}
                </Input>
              </div>
            </div>


            <div className="field">

              <div className="control">
                <textarea className="textarea" type="text" name="proposal" onChange={this.handleChange} value={proposal} required />
              </div>
              <label className="label1">proposal</label>
            </div>

            <div className="field">

              <div className="control">
                <textarea className="textarea" type="text" name="type" onChange={this.handleChange} value={type} required />
              </div>
              <label className="label1">type</label>
            </div>

            <div className="field">

              <div className="control">
                <textarea className="textarea" type="text" name="description" onChange={this.handleChange} value={description} required />
              </div>
              <label className="label1">description</label>
            </div>

            <div className='col s12 center-butt center'>
              <button type="submit" className="btn" waves="light">Propose Shake</button>
            </div>

          </form>
        </div>
      </Row>
    );
  }
}
export default ProposalForm;
