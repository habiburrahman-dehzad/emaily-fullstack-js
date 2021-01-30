import React from 'react';
import { MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';
import SurveyList from './surveyList/SurveyList';

const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <MDBNav
        color='orange'
        className='position-fixed top-100 start-100'
        style={{ bottom: '45px', left: 'unset', right: '40px' }}
      >
        <MDBNavItem>
          <MDBNavLink to='/surveys/new' style={{ color: '#fff' }}>
            <i className='fas fa-plus'></i>
          </MDBNavLink>
        </MDBNavItem>
      </MDBNav>
    </div>
  );
};

export default Dashboard;
