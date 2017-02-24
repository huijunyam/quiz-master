import { combineReducers } from 'redux';
import QuestionReducer from './question_reducer';

const RootReducer = combineReducers({
  question : QuestionReducer
});

export default RootReducer;
