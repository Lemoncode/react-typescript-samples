import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/app.tsx';
import AboutPage from './components/about/aboutPage';
import MembersPage from './components/members/membersPage';
import MemberPage from './components/member/memberPage';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route  path="/" component={App} >
      <IndexRoute component={AboutPage}/>
      <Route path="/about" component={AboutPage} />
      <Route path="/members" component={MembersPage} />
      <Route path="/member" component={MemberPage} />
      <Route path="/memberEdit/:id"  component={MemberPage} />
    </Route>
  </Router>

  , document.getElementById('root'));
