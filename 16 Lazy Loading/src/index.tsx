import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/app.tsx';
import MemberPage from './components/member/memberPage';

const lazyLoadAboutComponent = () => {
  return {
      getComponent: (loc, cb)=> {
        require.ensure([], require => {
          cb(null, require('./components/about/aboutPage')["default"]);
        }, 'AboutPage');
      }
    }
};

const lazyLoadMembersComponent = () => {
  return {
      getComponent: (loc, cb)=> {
        require.ensure([], require => {
          cb(null, require('./components/members/membersPage')["default"]);
        }, 'MembersPage');
      }
    }
};

ReactDOM.render(
  <Router history={hashHistory}>
    <Route  path="/" component= {App} >
      <IndexRoute {...lazyLoadAboutComponent()} />
      <Route path="/about" {...lazyLoadAboutComponent()} />
      <Route path="/members" {...lazyLoadMembersComponent()} />
      <Route path="/member" component={MemberPage} />
      <Route path="/memberEdit/:id" component={MemberPage} />
    </Route>
  </Router>

  , document.getElementById('root'));
