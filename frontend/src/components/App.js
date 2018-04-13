import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Home from "./Home";
import Nav from "./Nav";
import Profile from "./Profile";
import auth from '../auth';
import Login from './Login';
import SignUp from './SignUp';
import ShakeList from './ShakeList';
import ProposalForm from './ProposalForm';
import StatusEditForm from './StatusEditForm';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import ShakeDetail from './ShakeDetail';



const App = () => (
    <Router history={Router.browserHistory}>
      <div>
      <Nav />
      <Route path = "/login" component={Login} />
      <Route path = '/signup' component={SignUp} />
      <Route path='/proposeshake' component={ProposalForm} />
      <Route path='/shakes/:id' component={(params) => (
        <DataProvider endpoint="/api/shakes/" params={params} render={
                      (data) => (<ShakeDetail data={data}/>)
                    } /> ) }/>
      <Route exact path="/" render={() => (
        (auth.loggedIn()) ? (
          <Redirect to="/profile"/>
        ) : (
          <Home/>
        ))} />
      <Route path = "/profile" component={Profile} />
      </div>
    </Router>
);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
