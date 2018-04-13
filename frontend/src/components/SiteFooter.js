import React from "react";
import { Col } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const SiteFooter = () => {

  return (
    <footer id='footer' className='page-footer white-text center'>
      <Col s={12}>
        <h5>Let's shake on it.</h5>
        <a className='footerlink white-text' href='https://github.com/zakirb/Shook'><i class="fab fa-github fa-2x"></i><br />
        Visit us on GitHub
        </a>
        <p>© Shook 2018. All Rights Reserved.</p>
      </Col>
    </footer>
  )
}

export default SiteFooter;
