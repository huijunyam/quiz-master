import { combineReducers } from 'redux';
import QuestionReducer from './question_reducer';

const RootReducer = combineReducers({
  questions : QuestionReducer
});

export default RootReducer;
