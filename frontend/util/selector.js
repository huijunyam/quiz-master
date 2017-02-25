import { fetchQuestion } from '../actions/question_actions';

export const getQuestion = quizId => {
  return fetchQuestion(quizId);
};
