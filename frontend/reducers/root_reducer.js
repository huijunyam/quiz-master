import { combineReducers } from 'redux';
import QuestionReducer from './question_reducer';
import QuestionDetailReducer from './question_detail_reducer';

const RootReducer = combineReducers({
  questions : QuestionReducer,
  questionDetail: QuestionDetailReducer
});

export default RootReducer;
