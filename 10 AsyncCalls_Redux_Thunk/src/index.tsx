import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app.tsx'
import aboutPage from './components/about/aboutPage';
import membersPage from './components/members/membersPage';
import memberPage from './components/member/memberPage';

import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory  } from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route  path="/" component={App} >
      <IndexRoute component={aboutPage}/>
      <Route path="/about" component={aboutPage} />
      <Route path="/members"  component={membersPage} />
      <Route path="/member"  component={memberPage} />
      <Route path="/memberEdit/:id"  component={memberPage} />
    </Route>
  </Router>

  , document.getElementById('root'));
