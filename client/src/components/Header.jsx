import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

const Header = ({ auth }) => {
  const renderButtons = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return <Button href='/auth/google'>Sign in With Google</Button>;
      default:
        return (
          <Fragment>
            <Payments />{' '}
            {auth.credits ? (
              <Fragment>
                <Button variant='info'>Credits: {auth.credits}</Button>{' '}
              </Fragment>
            ) : (
              <Fragment>
                <Button variant='info'>No Credits</Button>{' '}
              </Fragment>
            )}
            <Button href='/api/logout'>Logout</Button>
          </Fragment>
        );
    }
  };
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand as={Link} to={!auth ? '/' : '/surveys'}>
        Emaily
      </Navbar.Brand>
      <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text>{renderButtons()}</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Header);
