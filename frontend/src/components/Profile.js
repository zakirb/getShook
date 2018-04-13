import React, { Component } from "react";
import {Row, Col, Button, Icon} from "react-materialize";
import { Link } from 'react-router-dom';
import ShakeList from './ShakeList';
import UserBadge from './UserBadge';
import DataProvider from './DataProvider';
import auth from '../auth';
import StatusEditForm from './StatusEditForm';

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      userId: null,
      username: null,
    }
  }

  componentDidMount() {
    console.log('yoooooooo')
    auth.getUser((res) => {
      console.log('This is the USER ID', res.id)
      this.setState({
        userId: res.id,
        username: res.username
      })
      console.log('This is the state now', this.state)
    })
    console.log('after get user function')
  }

  render() {

    let all = { 'id': 'global'}
    let solo = { 'id': 'private'}

     return this.state.userId ? (
      <div>
        <Row className='center-align'>
          <DataProvider endpoint="/api/shakes/"
                          render={(data) => <UserBadge className='shake-list' data={data} user={this.state} title={all} />} />

          <DataProvider endpoint="/api/shakes/"
                          render={(data) => <ShakeList className='shake-list' data={data} user={this.state} title={all} />} />

          <DataProvider endpoint="/api/shakes/"
                          render={(data) => <ShakeList className='shake-list' data={data} user={this.state} title={solo}  />} />
        </Row>
        <Row>
          <Link  to='/proposeshake' >
            <Button floating fab='horizontal' icon='add_circle' className='blue-grey darken-2 new_shake' large >
            </Button>
          </Link>
        </Row>
      </div>
    ) : (
      <p>Loading...</p>
    )
  }
}

export default Profile;
