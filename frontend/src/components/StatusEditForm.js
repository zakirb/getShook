import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import { Navbar, NavItem, Icon, Dropdown, Button, Row, Col, Input } from "react-materialize";

class StatusEditForm extends Component {
  constructor(props) {
    super()
    this.state = {
      proposer_status: props.data.proposer_status,
      acceptor_status: props.data.acceptor_status,
      id: props.data.id,
      userId: null
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    console.log('Get derived state from props nextProps', nextProps)
    console.log('Get derived state from props prevState', prevState)
    return {userId: nextProps.userId}

  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  };

  handleSubmit = e => {
    let token = localStorage.token
    e.preventDefault();
    const { proposer_status, acceptor_status, id } = this.state;
    const  shakeStatus = { 'proposer_status': proposer_status, 'acceptor_status': acceptor_status, 'id': id };
    console.log('this is the shake status', shakeStatus)
    const conf = {
      method: 'PUT',
      url: `/api/shakes/${id}/`,
      data: shakeStatus,
      headers: {
        Authorization: "Token " + `${token}`
      }
    };
    console.log('This is handling the submit', conf)
    axios(conf).then( (res) => {
      console.log('SUCCESS', res)
    })
    .catch( (err) => {
      console.log('ERROR', err)
    })
  };

  render() {
    const { proposer_status, acceptor_status, id, userId} = this.state;

    var inputName = (userId === this.props.data.proposer) ? "proposer_status" : "acceptor_status"

    // if (this.props.hidden === true) {
    //   inputName = "Status"
    //   return (
    //     <form>
    //       <Row>
    //         <Input s={12} type='select' name={inputName} defaultValue={this.props.data.status}>
    //           <option value={'---'} disabled>---</option>
    //           <option value={'proposed'}>Proposed</option>
    //           <option value={'accepted'}>Accepted</option>
    //           <option value={'completed'}>Completed</option>
    //         </Input>
    //       </Row>
    //     </form>
    //   )
    // }

    return (
      <form onSubmit={this.handleSubmit}>
        <Row>
          <Input s={12} type='select' name={inputName} onChange={this.handleChange} defaultValue={'---'}>
            <option value={'---'} disabled>---</option>
            <option value={'accepted'}>Accepted</option>
            <option value={'completed'}>Completed</option>
            <option value={'abandoned'}>Abandoned</option>
          </Input>
        </Row>
        <Row className="control">
          <div className='col s12 center-butt center'>
            <button type="submit" className="btn" waves="light">Edit Status</button>
          </div>
        </Row>

      </form>
    );

    {/*return (
      <form onSubmit={this.handleSubmit}>
        <Row>
          <Input s={12} type='select' label="Materialize Select" name="acceptor_value" onChange={this.handleChange} defaultValue='pending'>
            <option value={accept}>accept</option>
            <option value={complete}>complete</option>
            <option value={break}>break</option>
          </Input>
        </Row>
      </form>

    );*/}
  }
}
export default StatusEditForm;
