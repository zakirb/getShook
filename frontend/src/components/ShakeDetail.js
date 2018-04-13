import React, { Component } from "react";
import { Navbar, NavItem, Icon, Dropdown, Button, Row, Col, Card } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import StatusEditForm from './StatusEditForm';
import auth from '../auth';
import ShakeItem from './ShakeItem';

class ShakeDetail extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      id: '',
      proposer: props.data.proposer,
      acceptor: props.data.acceptor,
      userId: '',
      username:''
    }
  }

  componentDidMount() {
    auth.getUser((res) => {
      console.log('SHAKE DETAIL USER', res)
      this.setState({
        userId: res.id,
        username: res.username

      })
      console.log("user id", this.state.userId)
    })

    if (this.props.data.proposer === this.state.userId) {
      this.setState({
        proposer: this.state.username
      })
    } else {
      auth.getOtherUser(this.props.data.proposer, (res) => {
        console.log('RETRIEVED OTHER USER', res)
        this.setState({
          proposer: res.data.username
        })
      })
    }

    if (this.props.data.acceptor === this.state.userId) {
      this.setState({
        acceptor: this.state.username
      })
    } else {
      auth.getOtherUser(this.props.data.acceptor, (res) => {
        this.setState({
          acceptor: res.data.username
        })
      })

  }
}


  // componentDidMount() {
  //   console.log('component mounted')
  //   axios({
  //     method: 'GET',
  //     url: '/api/shakes/'
  //     }).then( (res) => {
  //     console.log('SUCCESS GETTING DATA', res)
  //   })
  //   .catch( (err) => {
  //     console.log('ERROR', err)
  //   })
  // }
render () {
    return (
      <Row className="shakeDetails">
        <Col s={12}>
          <Row>
            <Col s={6}>
              <Card className='center'>
                <h3>{this.state.proposer}</h3>
                <p className='shakeproposal'>
                  {this.props.data.proposer_status}
                </p>
              </Card>
            </Col>
            <Col s={6}>
              <Card className='center'>
                <h3>{this.state.acceptor}</h3>
                <p>{this.props.data.acceptor_status}</p>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col s={2}></Col>
            <Col s={8}>
              <Card className='center'>
                <h4>Proposal</h4>
                <p className='shakeproposal'>
                  {this.props.data.proposal}
                </p>
                <h4>Description</h4>
                <p className='shakedescription'>
                  {this.props.data.description}
                </p>
                <Row>
                  <StatusEditForm data={this.props.data} userId={this.state.userId}/>
                </Row>

                {/*<Button waves='light'>Complete this Shake!</Button>
                <br />
                <Button waves='light'>Delete this Shake</Button>*/}
                <br />
                <Link to='/profile'>
                  <Button className='btn' waves="light"> Back to Profile </Button>
                </Link>
              </Card>
            </Col>
            <Col s={2}></Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default ShakeDetail;
