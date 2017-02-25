import { connect } from 'react-redux';
import UpdateQuestion from './update_question';
import { fetchQuestion, updateQuestion, clearError, sendError, clearQuestion } from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
  const quizId = parseInt(ownProps.params.quizId);
  const errors = state.errors;
  const questionDetail = state.questionDetail;
  const question_text = questionDetail.question_text;
  const answer = questionDetail.answers[0];
  // debugger
  return ({
    quizId, errors, questionDetail, question_text, answer
  });
};

const mapDispatchToProps = dispatch => ({
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  updateQuestion: (question) => dispatch(updateQuestion(question)),
  clearError: () => dispatch(clearError()),
  sendError: (error) => dispatch(sendError(error)),
  clearQuestion: () => dispatch(clearQuestion())
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateQuestion);
