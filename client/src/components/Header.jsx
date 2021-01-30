import React, { Fragment } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';
import Payments from './Payments';

const Header = ({ auth }) => {
  const renderButtons = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return <MDBBtn href='/auth/google'>Sign in With Google</MDBBtn>;
      default:
        return (
          <Fragment>
            <Payments />
            {auth.credits ? (
              <MDBBtn active>Credits: {auth.credits}</MDBBtn>
            ) : (
              <MDBBtn active>No Credits</MDBBtn>
            )}
            <MDBBtn href='/api/logout'>Logout</MDBBtn>
          </Fragment>
        );
    }
  };
  return (
    <MDBNavbar color='default-color' dark expand='md'>
      <MDBNavbarBrand href={!auth ? '/' : '/surveys'}>Emaily</MDBNavbarBrand>
      <MDBNavbarNav right>{renderButtons()}</MDBNavbarNav>
    </MDBNavbar>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Header);
