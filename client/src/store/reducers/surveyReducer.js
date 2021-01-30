import { FETCH_SURVEYS } from '../../actions/types';

const initialState = {
  surveys: [],
};

const surveyReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_SURVEYS:
      return {
        ...state,
        surveys: payload,
      };

    default:
      return state;
  }
};

export default surveyReducer;
