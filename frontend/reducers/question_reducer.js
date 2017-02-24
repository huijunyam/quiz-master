import { RECEIVE_QUESTIONS, REMOVE_QUESTION } from '../actions/question_actions';
import merge from 'lodash/merge';

const QuestionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case REMOVE_QUESTION:
      const removedQuestion = merge({}, state);
      delete removedQuestion[action.eventId];
      return removedQuestion;
    default:
      return state;
  }
};

export default QuestionReducer;
