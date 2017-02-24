import {
  RECEIVE_ERROR, CLEAR_ERROR
} from '../actions/question_actions';

const ErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERROR:
      return action.error;
    case CLEAR_ERROR:
      return null;
    default:
      return state;
  }
};

export default ErrorReducer;
