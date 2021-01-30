import React, { Fragment } from 'react';
import { MDBJumbotron, MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';

const Landing = ({ auth }) => {
  return (
    <MDBJumbotron className='text-center'>
      <h1>Emaily</h1>
      <p className='lead'>Know your customers.</p>
      <p>
        Collect feedback from your customers with ease.
        {!auth && ' All you need is a Google account.'}
      </p>
      {!auth && (
        <Fragment>
          <p>Click Sign in With Google to begin.</p>
          <MDBBtn className='block' href='/auth/google'>
            Sign in With Google
          </MDBBtn>
        </Fragment>
      )}
    </MDBJumbotron>
  );
};

const mapPropsToState = (state) => ({
  auth: state.auth,
});

export default connect(mapPropsToState)(Landing);
