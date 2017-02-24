import { RECEIVE_QUESTION } from '../actions/question_actions';

const QuestionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTION:
      return action.questionDetail;
    default:
      return state;
  }
};

export default QuestionReducer;
