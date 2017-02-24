import { combineReducers } from 'redux';
import QuestionReducer from './question_reducer';
import QuestionDetailReducer from './question_detail_reducer';
import ErrorReducer from './error_reducer';

const RootReducer = combineReducers({
  questions : QuestionReducer,
  questionDetail: QuestionDetailReducer,
  errors: ErrorReducer
});

export default RootReducer;
