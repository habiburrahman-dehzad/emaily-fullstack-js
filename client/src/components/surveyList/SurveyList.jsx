import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions/surveyActions';
import PropTypes from 'prop-types';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import SurveyListItem from './SurveyListItem';

const SurveyList = ({ fetchSurveys, surveys }) => {
  useEffect(() => {
    fetchSurveys();
  }, [fetchSurveys]);

  // It is used to reverse the array. Since the component will render twice
  // calling reverse will reverse the surveys array recieved as props.
  // a clone is used to discard the reversed array and reverse the new one.
  const surveysClone = [...surveys];

  return (
    <MDBContainer className='mt-4'>
      <MDBRow>
        <MDBCol lg='8' md='10'>
          {surveysClone.reverse().map((survey) => (
            <SurveyListItem key={survey._id} survey={survey} />
          ))}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

SurveyList.propTypes = {
  fetchSurveys: PropTypes.func.isRequired,
  surveys: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  surveys: state.survey.surveys,
});

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
