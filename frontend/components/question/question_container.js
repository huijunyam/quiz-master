import { connect } from 'react-redux';
import { fetchQuestion, fetchQuestions, clearQuestion } from '../../actions/question_actions';
import Question from './question';

const mapStateToProps = (state, ownProps) => {
  const quizId = parseInt(ownProps.params.quizId);
  const question = state.questionDetail;
  const answers = state.questionDetail.answers.map((word) => word.toLowerCase());
  const questions = Object.keys(state.questions).map(id => state.questions[id]);
  // debugger
  return {
    quizId, question, answers, questions
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  fetchQuestions: () => dispatch(fetchQuestions()),
  clearQuestion: () => dispatch(clearQuestion())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
