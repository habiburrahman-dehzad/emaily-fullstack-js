import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import { MDBContainer } from 'mdbreact';
import { fetchUser } from '../actions/authActions';
import { connect } from 'react-redux';
import Payments from './Payments';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  });

  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <MDBContainer>
          <Route exact path='/' component={Landing} />
          <Route exact path='/surveys' component={Dashboard} />
          <Route path='/surveys/new' component={SurveyNew} />
          <Route path='/payments' component={Payments} />
        </MDBContainer>
      </Fragment>
    </BrowserRouter>
  );
};

export default connect(null, { fetchUser })(App);
