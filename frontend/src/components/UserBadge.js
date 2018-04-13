import React from "react";
import { Card, CardTitle, Col } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const UserBadge = data => {

  var count = []
  let number = data.data.map( i => {
    if (i.proposer === data.user.userId || i.acceptor === data.user.userId) {
      count.push(i)
    }
    return count
  })


  return (
    <Col m={4} s={12}>
      <Card className='small'
        header={<CardTitle image='../../static/frontend/images/handshake.jpg'>{data.user.username}</CardTitle>}
        >
        <div>
          <h4>{'# of Shakes: ' + count.length + ' '}</h4>
        </div>
      </Card>
    </Col>
  )
}

export default UserBadge;
