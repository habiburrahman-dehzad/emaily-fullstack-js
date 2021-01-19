import axios from 'axios';
import { FETCH_USER } from './types';

export const handleToken = (token) => async (dispatch) => {
  try {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
