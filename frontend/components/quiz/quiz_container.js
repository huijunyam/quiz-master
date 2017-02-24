import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/question_actions';
import Quiz from './quiz';

const mapStateToProps = state => ({
  questions: Object.keys(state.questions).map(id => state.questions[id])
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
