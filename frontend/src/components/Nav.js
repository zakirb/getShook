import React from "react";
import { Navbar, NavItem, Icon, Dropdown, Button } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import auth from '../auth';

const Nav = () => {

  let logo = <img src={'../../static/frontend/images/shook_logo.svg'} />

  let conditionalNav = (auth.loggedIn()) ? (
    <span>
      <Link id='propose-shake-link' className='navlinks' to='/proposeshake' onClick={() => {
        document.getElementById('propose-shake-link').style('display:none')
      }} >Make a Shake</Link>
      <Link id="logout-link" className='navlinks' onClick={() => {
        auth.logout()
        document.getElementById('logout-link').style('display:none')
      }} className="navlinks" to="/">Logout</Link>
    </span>
    ) : (
      <Link id="login-link" onClick={ () => {
        document.getElementById('login-link').style('display:none')
      }} className="navlinks" to="/login">Login</Link>
    )


  return (
    <div>
      <Navbar brand={logo} right id="navbar">
        <Link id="home-link" onClick={ () => {
          document.getElementById('home-link').style('display:none')
        }} className="navlinks" to="/">Home</Link>
        {conditionalNav}
      </Navbar>
    </div>
  )
}

export default Nav;
