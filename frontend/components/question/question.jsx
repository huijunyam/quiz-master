import React from 'react';
import { Link } from 'react-router';
import QuestionContainer from './question_container';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answer: "" };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestions();
    this.props.fetchQuestion(this.props.quizId);
  }

  componentWillUnMount() {
    this.props.clearQuestion();
  }

  questionNum() {
    for (let i = 0; i < this.props.questions.length; i++) {
      if (this.props.questions[i].id === this.props.quizId) {
        return i + 1;
      }
    }
  }

  // nextQuestionId() {
  //   let num = this.questionNum();
  //   return this.props.questions[num].id;
  // }

  handleClick(e) {
    e.preventDefault();
    if ((this.questionNum() === this.props.questions.length) &&
      (this.props.answers.indexOf(this.state.answer.toLowerCase()) !== -1)) {
      this.props.router.push("/success");
    }
    else if (this.props.answers.indexOf(this.state.answer.toLowerCase()) !== -1) {
      this.props.router.push(`/quiz/${this.props.quizId}/right`);
    }
    else {
      this.props.router.push(`/quiz/${this.props.quizId}/wrong`);
    }
  }

  handleChange(e) {
    this.setState({ answer: e.target.value });
  }

  render() {
    return (
      <div className="align-footer">
        <div className="welcome-header">
          <Link to="/"><img className="logo" src={"https://res.cloudinary.com/dirtnmtpc/image/upload/v1487816777/logo_tbzjps.png"} alt="logomakr"/></Link>
          <h1>Question {this.questionNum()}</h1>
          <h1>{this.props.question.question_text}</h1>
          <form className="answer-form">
            <input type="text"
              value={this.state.answer}
              onChange={this.handleChange}
              className="answer-box" />
          </form>
          <button onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Question;
