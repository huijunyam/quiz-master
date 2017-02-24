import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/question_actions';
import Right from './right';

const mapStateToProps = (state, ownProps) => {
  const quizId = parseInt(ownProps.params.quizId);
  const questions = Object.keys(state.questions).map(id => state.questions[id]);
  return {
    quizId, questions
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Right);
