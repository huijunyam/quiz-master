import { RECEIVE_QUESTIONS } from '../actions/question_actions';

const QuestionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    default:
      return state;
  }
};

export default QuestionReducer;
