import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app.tsx'
import AboutPage from './components/presentationals/about/aboutPage';
import MembersPageContainer from './components/containers/members/membersPageContainer';
import MemberPageContainer from './components/containers/member/memberPageContainer';

import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory  } from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route  path="/" component={App} >
      <IndexRoute component={AboutPage}/>
      <Route path="/about" component={AboutPage} />
      <Route path="/members"  component={MembersPageContainer} />
      <Route path="/member"  component={MemberPageContainer} />
      <Route path="/memberEdit/:id"  component={MemberPageContainer} />
    </Route>
  </Router>

  , document.getElementById('root'));
