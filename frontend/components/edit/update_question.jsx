import React from 'react';
import { Link } from 'react-router';
import numbersToWords from 'number-to-words';
import wordsToNumbers from 'words-to-numbers';
import merge from 'lodash/merge';

class UpdateQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { question_text: this.props.question_text,
    answer: this.props.answer };
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.quizId);
    this.props.clearError();

  }

  componentWillUnmount() {
    this.props.clearQuestion();
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  checkAlphabet() {
    let containAlphabet = false;
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
                      "u", "v", "w", "x", "y", "z"];
    let answer = this.state.answer || this.props.answer;
    for (let i = 0; i < answer.length; i++) {
      if (alphabet.includes(answer[i].toLowerCase())) {
        containAlphabet = true;
        break;
      }
    }
    return containAlphabet;
  }

  updateAnswer() {
    let answers = [];
    let answer = this.state.answer || this.props.answer;
    answers.push(answer.toLowerCase());
    let containAlphabet = this.checkAlphabet();
    if (containAlphabet) {
      let number = wordsToNumbers(answers[0]);
      if (number === null) {
      } else {
        answers.push((number).toString());
      }
    } else {
      let word = numbersToWords.toWords(parseInt(answers[0]));
      answers.push(word);
      word = word.split("-").join(" ");
      answers.push(word);
    }
    return answers;
  }

  handleAnswer() {
    let question = { question_text: "", answers: [] };
    question["question_text"] = this.state.question_text || this.props.question_text;
    question["answers"] = this.updateAnswer();
    return question;
  }

  handleClick(e) {
    e.preventDefault();
    let answer = this.state.answer || this.props.answer;
    let question_text = this.state.question_text || this.props.question_text;
    if (answer.length === 0 && question_text.length === 0) {
      this.props.sendError(["Question and answer cannot be blank"]);
    } else if (answer.length === 0) {
      this.props.sendError(["Answer cannot be blank"]);
    } else {
      let question = this.handleAnswer();
      question = merge(this.props.questionDetail, question);
      this.props.updateQuestion(question).then(() => this.redirect());
    }
  }

  redirect() {
    this.props.router.push(`/edit`);
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul className="form-error">
          {
            this.props.errors.map((err, idx) => (
              <li className="error-form" key={`question-err-${idx}`}>{err}</li>
            ))
          }
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="align-footer">
        <div className="welcome-header">
          <Link to="/"><img className="logo" src={"https://res.cloudinary.com/dirtnmtpc/image/upload/v1487816777/logo_tbzjps.png"} alt="logomakr"/></Link>
          <h1 className="welcome-word">modify question</h1>
            <form className="create-form">
              {this.renderErrors()}
              <label>Question</label>
              <br />
              <input type="text"
                placeholder={this.props.question_text}
                value={this.state.question_text}
                onChange={this.update("question_text")}
                className="create-question-box"/>
              <br />
              <br />
              <label>Answer</label>
              <br />
              <input type="text"
                placeholder={this.props.answer}
                value={this.state.answer}
                onChange={this.update("answer")}
                className="create-answer-box" />
            </form>
            <div className="submit-button-div">
              <button className="start-button" onClick={this.handleClick}>Create</button>
            </div>
        </div>
      </div>
    );
  }

}

export default UpdateQuestion;
