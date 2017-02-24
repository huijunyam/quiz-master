import { connect } from 'react-redux';
import Wrong from './wrong';

const mapStateToProps = (state, ownProps) => ({
  quizId: parseInt(ownProps.params.quizId)
});

export default connect(
  mapStateToProps,
  null
)(Wrong);
