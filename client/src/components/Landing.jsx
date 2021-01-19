import React, { Fragment } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

const Landing = ({ auth }) => {
  return (
    <Jumbotron className='text-center'>
      <h1>Emaily</h1>
      <p className='lead'>Know your customers.</p>
      <p>
        Collect feedback from your customers with ease.
        {!auth && ' All you need is a Google account'}.
      </p>
      {!auth && (
        <Fragment>
          <p>Click Sign in With Google to begin.</p>
          <p>
            <Button variant='primary' href='/auth/google'>
              Sign in With Google
            </Button>
          </p>
        </Fragment>
      )}
    </Jumbotron>
  );
};

const mapPropsToState = (state) => ({
  auth: state.auth,
});

export default connect(mapPropsToState)(Landing);
