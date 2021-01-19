import { FETCH_USER } from '../../actions/types';

const authReducer = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USER:
      return payload || false;
    default:
      return state;
  }
};

export default authReducer;
