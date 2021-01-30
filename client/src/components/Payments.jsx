import React from 'react';
import { MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { handleToken } from '../actions/billingActions';

const Payments = ({ handleToken }) => {
  return (
    <StripeCheckout
      name='Emaily'
      description='$5 for 5 email credits'
      amount={500}
      token={(token) => handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <MDBBtn>Add Credit</MDBBtn>
    </StripeCheckout>
  );
};

export default connect(null, { handleToken })(Payments);
