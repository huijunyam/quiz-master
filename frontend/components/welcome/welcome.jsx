import React from 'react';
import { Link } from 'react-router';
import WelcomeContainer from './welcome_container';
import Footer from './footer';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.redirectQuestionForm = this.redirectQuestionForm.bind(this);
    this.redirectEditQuestion = this.redirectEditQuestion.bind(this);
    this.redirectTakeQuiz = this.redirectTakeQuiz.bind(this);
  }

  redirectQuestionForm() {
    this.props.router.push("/create");
  }

  redirectEditQuestion() {
    this.props.router.push("/edit");
  }

  redirectTakeQuiz() {
    this.props.router.push("/quiz");
  }

  render() {
    return (
      <div className="align-footer">
        <div className="welcome-header">
          <img className="logo" src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1487816777/logo_tbzjps.png"></img>
          <h1 className="welcome-word">Welcome back, Guest</h1>
          <ul className="button-list">
            <li className="button-list-choice">
              <div onClick={this.redirectEditQuestion}>
                <img className="button-list-choice-img" src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1487896122/Logomakr_0iOeCF_gi2dfu.png"/>
                <h1 className="button-list-choice-description">Edit Questions</h1>
              </div>
            </li>
            <li className="button-list-choice">
              <div onClick={this.redirectQuestionForm}>
                <img className="button-list-choice-img" src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1487896177/Logomakr_2LmUy8_pbrhf8.png" />
                <h1 className="button-list-choice-description">New Question</h1>
              </div>
            </li>
            <li className="button-list-choice">
              <div onClick={this.redirectTakeQuiz}>
                <img className="button-list-choice-img" src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1487896341/Logomakr_9ShTwP_qut0we.png" />
                <h1 className="button-list-choice-description">Take Quiz</h1>
              </div>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }

}

export default Welcome;
