import axios from 'axios';
import { FETCH_SURVEYS, FETCH_USER } from './types';

export const submitSurvey = (values, history) => async (dispatch) => {
  try {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    console.log('submitSurvey:', err);
  }
};

export const fetchSurveys = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/surveys');

    dispatch({ type: FETCH_SURVEYS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
