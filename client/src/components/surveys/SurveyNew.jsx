import React from 'react';
import { useState } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

const SurveyNew = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [formValues, setFormValues] = useState({});

  return (
    <div>
      {showReviewForm ? (
        <SurveyFormReview
          setShowReviewForm={setShowReviewForm}
          formValues={formValues}
        />
      ) : (
        <SurveyForm
          setShowReviewForm={setShowReviewForm}
          setFormValues={setFormValues}
          formValues={formValues}
        />
      )}
    </div>
  );
};

export default SurveyNew;
