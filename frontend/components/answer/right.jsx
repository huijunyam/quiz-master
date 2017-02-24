import React from 'react';
import { Link } from 'react-router';

class Right extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  nextQuestionNum() {
    for (let i = 0; i < this.props.questions.length; i++) {
      if (this.props.questions[i].id === this.props.quizId) {
        return i + 1;
      }
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.router.push(`/quiz/${this.props.questions[this.nextQuestionNum()].id}`);
  }

  render() {
    return (
      <div className="align-footer">
        <div className="welcome-header">
          <Link to="/"><img className="logo" src={"https://res.cloudinary.com/dirtnmtpc/image/upload/v1487816777/logo_tbzjps.png"} alt="logomakr"/></Link>
          <div className="correct-container">
            <h1 className="correct-message">You got it right!!!</h1>
            <button className="next-button" onClick={this.handleClick}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Right;
