import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBBadge,
} from 'mdbreact';
import React from 'react';
import PropTypes from 'prop-types';

const SurveyListItem = ({ survey }) => {
  return (
    <MDBCard color='teal' className='mb-2' narrow={true}>
      <MDBCardBody>
        <MDBCardTitle className='white-text'>{survey.title}</MDBCardTitle>
        <MDBCardText className='white-text' tag='div'>
          <h4>{survey.subject}</h4>
          <hr />
          <p>{survey.body}</p>
          <hr />
          <p>Sent on: {new Date(survey.dateSent).toLocaleDateString()}</p>
          <hr />
          <p>
            Yes:{' '}
            <MDBBadge color='dark' className='mr-2'>
              {survey.yes}
            </MDBBadge>
            No: <MDBBadge color='dark'>{survey.no}</MDBBadge>
          </p>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
};

SurveyListItem.propTypes = {
  survey: PropTypes.object.isRequired,
};

export default SurveyListItem;
