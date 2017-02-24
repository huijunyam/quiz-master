import { connect } from 'react-redux';
import EditQuestion from './edit_question';
import { createQuestion, clearError, sendError } from '../../actions/question_actions';

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createQuestion: (question) => dispatch(createQuestion(question)),
  clearError: () => dispatch(clearError()),
  sendError: (error) => dispatch(sendError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);
