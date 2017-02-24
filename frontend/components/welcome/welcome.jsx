import React from 'react';
import { Link } from 'react-router';
import WelcomeContainer from './welcome_container';
import Footer from './footer';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.router.push("/questions");
  }

  render() {
    return (
      <div className="align-footer">
        <div className="welcome-header">
          <img className="logo" src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1487816777/logo_tbzjps.png"></img>
          <ul className="button-list">
            <li>
              <div>
                <img src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1487896122/Logomakr_0iOeCF_gi2dfu.png"/>
                <h1>Edit Questions</h1>
              </div>
            </li>
            <li>
              <div>
                <img src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1487896177/Logomakr_2LmUy8_pbrhf8.png" />
                <h1>Create New Question</h1>
              </div>
            </li>
            <li>
              <div>
                <img src="https://res.cloudinary.com/dirtnmtpc/image/upload/v1487896341/Logomakr_9ShTwP_qut0we.png" />
                <h1>Take Quiz</h1>
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
