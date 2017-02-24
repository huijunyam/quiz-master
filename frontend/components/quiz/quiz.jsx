import React from 'react';
import { Link } from 'react-router';
import QuizContainer from './quiz_container';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.router.push(`/quiz/${this.props.questions[0].id}`);
  }

  render() {
    return (
      <div className="align-footer">
        <div className="welcome-header">
          <Link to="/"><img className="logo" src={"https://res.cloudinary.com/dirtnmtpc/image/upload/v1487816777/logo_tbzjps.png"} alt="logomakr"/></Link>
          <h1 className="welcome-word">Click the button below to start the quiz</h1>
          <h1 className="welcome-word">Good Luck!!!</h1>
          <div className="start-button-div">
            <button className="start-button" onClick={this.handleClick}>Start Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
