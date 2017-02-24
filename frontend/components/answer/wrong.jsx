import React from 'react';
import { Link } from 'react-router';

class Wrong extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.router.push(`/quiz/${this.props.quizId}`);
  }

  render() {
    return (
      <div className="align-footer">
        <div className="welcome-header">
          <Link to="/"><img className="logo" src={"https://res.cloudinary.com/dirtnmtpc/image/upload/v1487816777/logo_tbzjps.png"} alt="logomakr"/></Link>
          <h1 className="welcome-word">Please try again!!!</h1>
          <button onClick={this.handleClick}>Back</button>
        </div>
      </div>
    );
  }
}

export default Wrong;
