import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdbreact';
import React, { Fragment } from 'react';
import { FORM_FIELDS } from './formFields';
import { submitSurvey } from '../../actions/surveyActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const SurveyFormReview = ({ setShowReviewForm, formValues, submitSurvey }) => {
  const history = useHistory();
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol lg='6' md='8'>
          <p className='h4 mt-4'>Please confirm your entries</p>
          <hr />
          {FORM_FIELDS.map(({ type, name, label }) =>
            type === 'input' ? (
              <Fragment key={name}>
                <p className='font-weight-bold'>{label}</p>
                <p className='text-left'>{formValues[name]}</p>
              </Fragment>
            ) : (
              <Fragment key={name}>
                <p className='font-weight-bold'>{label}</p>
                {formValues[name].split('\n').map((line) => (
                  <p className='text-left'>{line}</p>
                ))}
              </Fragment>
            )
          )}

          <MDBRow className='mt-4'>
            <MDBCol>
              <MDBBtn onClick={() => setShowReviewForm(false)} color='primary'>
                <MDBIcon icon='angle-left' className='mr-2' />
                Back
              </MDBBtn>
            </MDBCol>

            <MDBCol className='text-right'>
              <MDBBtn
                onClick={() => submitSurvey(formValues, history)}
                color='teal'
              >
                Send Survey
                <MDBIcon far icon='paper-plane' className='ml-2' />
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

SurveyFormReview.propTypes = {
  submitSurvey: PropTypes.func.isRequired,
  setShowReviewForm: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
};

export default connect(null, { submitSurvey })(SurveyFormReview);
