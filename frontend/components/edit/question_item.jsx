import React from 'react';
import { Link, hashHistory } from 'react-router';

class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();
    const url = `/quiz/${this.props.question.id}/update`;
    hashHistory.push(url);
  }

  redirect() {
    const url = "/";
    hashHistory.push(url);
  }

  handleDelete(e) {
    e.preventDefault();
    const id = this.props.question.id;
    this.props.deleteQuestion(id).then(() => this.redirect());
  }

  render() {
    const question = this.props.question;
    return (
      <li className="question">
        <div className="question-div">
          <h1 className="question-text">{question.question_text}</h1>
          <div className="button-div">
            <button className="question-list-button" onClick={this.handleEdit}><img className="question-list-img" src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1487975822/Logomakr_5of6gq_uzq6lf.png"/></button>
            <button className="question-list-button" onClick={this.handleDelete}><img className="question-list-img" src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1487975822/Logomakr_2CySPV_akwlqu.png"/></button>
          </div>
        </div>
      </li>
    );
  }
}

export default QuestionItem;
