import { connect } from 'react-redux';
import UpdateQuestion from './update_question';
import { fetchQuestion, deleteQuestion, updateQuestion, clearError, sendError } from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => ({
  quizId: parseInt(ownProps.params.quizId),
  errors: state.errors,
  questionDetail: state.questionDetail
});

const mapDispatchToProps = dispatch => ({
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  updateQuestion: (question) => dispatch(updateQuestion(question)),
  clearError: () => dispatch(clearError()),
  sendError: (error) => dispatch(sendError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateQuestion);
