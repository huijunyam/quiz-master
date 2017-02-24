import React from 'react';
import { Link } from 'react-router';
import numbersToWords from 'number-to-words';
import wordsToNumbers from 'words-to-numbers';

class CreateQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { question_text: "", answer: "" };
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearError();
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  checkAlphabet() {
    let containAlphabet = false;
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
                      "u", "v", "w", "x", "y", "z"];
    for (let i = 0; i < this.state.answer.length; i++) {
      if (alphabet.includes(this.state.answer[i].toLowerCase())) {
        containAlphabet = true;
        break;
      }
    }
    return containAlphabet;
  }

  updateAnswer() {
    let answers = [];
    answers.push(this.state.answer.toLowerCase());
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
    }
    return answers;
  }

  handleAnswer() {
    let question = { question_text: "", answers: [] };
    question["question_text"] = this.state.question_text;
    question["answers"] = this.updateAnswer();
    return question;
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.answer.length === 0 && this.state.question_text.length === 0) {
      this.props.sendError(["Question and answer cannot be blank"]);
    } else if (this.state.answer.length === 0) {
      this.props.sendError(["Answer cannot be blank"]);
    } else {
      const question = this.handleAnswer();
      this.props.createQuestion(question).then(() => this.redirect());
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
      <div>
        <h1>Create a new Question</h1>
        <form className="create-form">
          {this.renderErrors()}
          <input type="text"
            value={this.state.question_text}
            onChange={this.update("question_text")}
            className="create-question-box"/>
          <input type="text"
            value={this.state.answers}
            onChange={this.update("answer")}
            className="create-answer-box" />
        </form>
        <button className="submit-form" onClick={this.handleClick}>Create</button>
      </div>
    );
  }
}

export default CreateQuestion;
