import React, { Fragment } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBLink,
} from 'mdbreact';
import { Form } from 'react-final-form';
import SurveyInputField from './SurveyInputField';
import SurveyTextAreaField from './SurveyTextAreaField';
import validateEmail from '../../utils/validateEmails';
import { FORM_FIELDS } from './formFields';

const SurveyForm = ({ setShowReviewForm, setFormValues, formValues }) => {
  const onSubmit = (values) => {
    setFormValues(values);
    setShowReviewForm(true);
  };

  const validate = (values) => {
    const errors = {};

    errors.recipients = validateEmail(values.recipients || '');

    FORM_FIELDS.forEach(({ name }) => {
      if (!values[name]) {
        errors[name] = 'This field is required';
      }
    });

    return errors;
  };

  return (
    <MDBContainer className='mt-4'>
      <MDBRow>
        <MDBCol lg='6' md='8'>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            initialValues={formValues}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className='needs-validation'>
                <p className='h4 text-center mb-4'>Compose the Survey</p>
                {FORM_FIELDS.map(({ type, name, label }) =>
                  type === 'input' ? (
                    <Fragment key={name}>
                      <SurveyInputField name={name} label={label} />
                      <br />
                    </Fragment>
                  ) : (
                    <Fragment key={name}>
                      <SurveyTextAreaField name={name} label={label} rows='3' />
                      <br />
                    </Fragment>
                  )
                )}

                <MDBRow>
                  <MDBCol>
                    <MDBLink to='/surveys' className='btn btn-danger'>
                      Cancel
                      <MDBIcon icon='ban' className='ml-2' />
                    </MDBLink>
                  </MDBCol>

                  <MDBCol className='text-right'>
                    <MDBBtn color='teal' type='submit'>
                      Next
                      <MDBIcon icon='angle-right' className='ml-2' />
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </form>
            )}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SurveyForm;
