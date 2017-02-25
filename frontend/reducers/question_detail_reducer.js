import { RECEIVE_QUESTION, CLEAR_QUESTION } from '../actions/question_actions';

const defaultState = {
  id: -1,
  question_text: "",
  answers: []
};

const QuestionDetailReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTION:
    // debugger
      return action.questionDetail;
    case CLEAR_QUESTION:
      return defaultState;
    default:
      return state;
  }
};

export default QuestionDetailReducer;
