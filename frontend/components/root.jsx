import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';

import App from './app/app';
import WelcomeContainer from './welcome/welcome_container';
import EditQuestionContainer from './edit/edit_question_container';
import QuizContainer from './quiz/quiz_container';
import CreateQuestionFormContainer from './create/create_question_form_container';
import QuestionContainer from './question/question_container';

const Root = ({ store }) => {
  return(
    <Provider store={ store }>
      <Router history= { hashHistory }>
        <Route path="/" component= { App }>
          <IndexRoute component={WelcomeContainer} />
          <Route path="/create" component={CreateQuestionFormContainer} />
          <Route path="/edit" component={EditQuestionContainer} />
          <Route path="/quiz" component={QuizContainer}>
            <Route path="/quiz/:quizId" component={QuestionContainer} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
