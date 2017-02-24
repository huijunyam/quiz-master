import { connect } from 'react-redux';
import EditQuestion from './edit_question';
import { fetchQuestions, deleteQuestion } from '../../actions/question_actions';

const mapStateToProps = state => ({
  errors: state.errors,
  questions: Object.keys(state.questions).map(id => state.questions[id])
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  deleteQuestion: (id) => dispatch(deleteQuestion(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestion);
