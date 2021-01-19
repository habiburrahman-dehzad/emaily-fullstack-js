import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const Landing = () => {
  return (
    <Jumbotron className='text-center'>
      <h1>Eamily</h1>
      <p className='lead'>Know your customers.</p>
      <p>
        Collect feedback from your customers with ease. All you need is a Google
        account.
      </p>
      <p>Click Sign in With Google to begin.</p>
      <p>
        <Button variant='primary' href='/auth/google'>
          Sign in With Google
        </Button>
      </p>
    </Jumbotron>
  );
};

export default Landing;
