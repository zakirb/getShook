import React, { Component } from "react";
import {Row, Col, Button, Icon, Collapsible, Collection, CollectionItem} from "react-materialize";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ShakeItem from './ShakeItem';
import ShakeItemGlobal from './ShakeItemGlobal';

const ShakeList = (data) => {


  let globalShakes = data.data.map( (item, index) => {
    if (item.proposer !== data.user.userId && item.acceptor !== data.user.userId) {
      return (<ShakeItemGlobal data={item} key={index} user={data.user}/>)
    }
  })

  let globalShakesClean = globalShakes.filter( item => item !== undefined)

  // console.log(globalShakes)

  let personalShakes = data.data.map( (item, index) => {
    if (item.proposer === data.user.userId || item.acceptor === data.user.userId) {
      return (<ShakeItem data={item} key={index} user={data.user}/>)
    }
  })



  // console.log(personalShakes)

  return (data.title.id === 'global') ?
  (
    <Col className="center-align column shake-list" m={4} s={12}>
      <Collection>
        {globalShakesClean}
      </Collection>
    </Col>
  ) : (
    <Col className="center-align column shake-list" m={4} s={12}>
      <Collapsible >
        {personalShakes}
      </Collapsible>
    </Col>
  )


}

export default ShakeList;
