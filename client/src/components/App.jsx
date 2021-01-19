import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Container from 'react-bootstrap/Container';
import { fetchUser } from '../actions/authActions';
import { connect } from 'react-redux';
import Payments from './Payments';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyForm = () => <h2>Survey Form</h2>;

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  });

  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Container>
          <Route exact path='/' component={Landing} />
          <Route exact path='/surveys' component={Dashboard} />
          <Route path='/surveys/new' component={SurveyForm} />
          <Route path='/payments' component={Payments} />
        </Container>
      </Fragment>
    </BrowserRouter>
  );
};

export default connect(null, { fetchUser })(App);
