import React from 'react';
import { Field } from 'react-final-form';

const SurveyTextAreaField = ({ label, name, ...rest }) => {
  return (
    <Field
      name={name}
      render={({ input, meta: { touched, error } }) => (
        <div>
          <label htmlFor={name}>{label}</label>
          <textarea {...input} id={name} className='form-control' {...rest} />
          {touched && error && (
            <div
              style={{
                color: '#dc3545',
                marginTop: '0.25rem',
                fontSize: '80%',
              }}
            >
              {error}
            </div>
          )}
        </div>
      )}
    />
  );
};

export default SurveyTextAreaField;
