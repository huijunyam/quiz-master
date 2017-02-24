import React from 'react';
import { Link } from 'react-router';

class Success extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.router.push("/");
  }

  render() {
    return (
      <div className="align-footer">
        <div className="welcome-header">
          <Link to="/"><img className="logo" src={"https://res.cloudinary.com/dirtnmtpc/image/upload/v1487816777/logo_tbzjps.png"} alt="logomakr"/></Link>
          <h1 className="success-word">Well done, you have successfully completed the quiz!!!</h1>
          <div className="start-button-div">
            <button className="start-button" onClick={this.handleClick}>Go Back</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
