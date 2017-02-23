import * as QuestionAPIUtil from '../util/question_api_util';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const CLEAR_ERROR = "CLEAR_ERROR";
export const RECEIVE_ERROR = "RECEIVE_ERROR";

export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const receiveQuestion = questionDetail => ({
  type: RECEIVE_QUESTION,
  questionDetail
});

export const removeQuestion = question => ({
  type: REMOVE_QUESTION,
  question
});

export const clearError = () => ({
  type: CLEAR_ERROR
});

export const receiveError = error => ({
  type: RECEIVE_ERROR,
  error
});

export const fetchQuestions = () => dispatch => (
  QuestionAPIUtil.fetchQuestions().then(questions => dispatch(receiveQuestions(questions)))
);

export const fetchQuestion = questionId => dispatch => (
  QuestionAPIUtil.fetchQuestion(questionId).then(question => dispatch(receiveQuestion(question)))
);

export const createQuestion = question => dispatch => (
  QuestionAPIUtil.createQuestion(question)
    .then(question => dispatch(receiveQuestion(question)),
      err => dispatch(receiveError(err.responseJSON)))
);

export const updateQuestion = question => dispatch => (
  QuestionAPIUtil.updateQuestion(question).then(question => dispatch(receiveQuestion(question)))
);
