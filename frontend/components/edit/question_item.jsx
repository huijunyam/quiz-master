import React from 'react';
import { Link } from 'react-router';

class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.router.push(`quiz/${this.props.question.id}/update`);
  }

  redirect() {
    this.props.router.push("/edit");
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteQuestion(this.props.question.id).then(() => this.redirect());
  }

  render() {
    const question = this.props.question;
    debugger
    return (
      <li>
        <div>
          <h1>{question.question_text}</h1>
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      </li>
    );
  }
}

export default QuestionItem;
