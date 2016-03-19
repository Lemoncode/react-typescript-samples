import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/app.tsx';
import aboutPage from './components/about/aboutPage';
import membersPage from './components/members/membersPage';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route  path="/" component={App} >
      <IndexRoute component={aboutPage}/>
      <Route path="/about" component={aboutPage} />
      <Route path="/members"  component={membersPage} />
    </Route>
  </Router>

  , document.getElementById('root'));
