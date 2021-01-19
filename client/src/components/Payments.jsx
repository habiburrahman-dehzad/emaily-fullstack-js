import React from 'react';
import Button from 'react-bootstrap/esm/Button';
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
      <Button variant='success'>Add Credit</Button>
    </StripeCheckout>
  );
};

export default connect(null, { handleToken })(Payments);
