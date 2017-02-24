import React from 'react';
import { Link } from 'react-router';
import QuestionItem from './question_item';

class EditQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
      <div className="align-footer">
        <div className="welcome-header">
          <Link to="/"><img className="logo" src={"https://res.cloudinary.com/dirtnmtpc/image/upload/v1487816777/logo_tbzjps.png"} alt="logomakr"/></Link>
          <ul className="question-list">
            {this.props.questions.map(question => (<QuestionItem key={question.id}
              question={question} deleteQuestion={this.props.deleteQuestion} />))}
          </ul>
        </div>
      </div>
    );
  }
}

export default EditQuestion;
