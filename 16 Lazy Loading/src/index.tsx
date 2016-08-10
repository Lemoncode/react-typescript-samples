import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/app.tsx';

//Loading single component in one chunk
const lazyLoadAboutComponent = () => {
  return {
      getComponent: (location, callback)=> {
        require.ensure([], require => {
          callback(null, require('./components/about/aboutPage')["default"]);
        }, 'AboutPage');
      }
    }
};

//Loading group of components in one chunk
const lazyLoadMemberComponent = () => {
  return {
      getComponent: (location, callback) => {
        require.ensure(['./components/member/memberPage', './components/members/membersPage'], require => {
          callback(null, require('./components/member/memberPage')["default"]);
        }, 'MemberComponents');
      }
    }
};

const lazyLoadMembersComponent = () => {
  return {
      getComponent: (location, callback) => {
        require.ensure(['./components/member/memberPage', './components/members/membersPage'], require => {
          callback(null, require('./components/members/membersPage')["default"]);
        }, 'MemberComponents');
      }
    }
};

ReactDOM.render(
  <Router history={hashHistory}>
    <Route  path="/" component= {App} >
      <IndexRoute {...lazyLoadAboutComponent()} />
      <Route path="/about" {...lazyLoadAboutComponent()} />
      <Route path="/members" {...lazyLoadMembersComponent()} />
      <Route path="/member" {...lazyLoadMemberComponent()} />
      <Route path="/memberEdit/:id" {...lazyLoadMemberComponent()} />
    </Route>
  </Router>

  , document.getElementById('root'));
