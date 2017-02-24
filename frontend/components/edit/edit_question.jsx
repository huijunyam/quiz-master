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
      <div>
        <div>
          <ul>
            {this.props.questions.map(question => (<QuestionItem key={question.id}
              question={question} deleteQuestion={this.props.deleteQuestion} />))}
          </ul>
        </div>
      </div>
    );
  }
}

export default EditQuestion;
