import React from 'react';
import { Link } from 'react-router';
import numbersToWords from 'number-to-words';
import wordsToNumbers from 'words-to-numbers';

class UpdateQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { question_text: this.props.questionDetail.question_text,
    answer: this.props.questionDetail.answers[0] };
  }

  componentDidMount() {
    this.props.clearError();
    this.props.fetchQuestion(this.props.quizId);
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
      <div>Helloe</div>
    );
  }

}

export default UpdateQuestion;
