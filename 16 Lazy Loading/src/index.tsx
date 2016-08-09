import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/app.tsx';
import MemberPage from './components/member/memberPage';
//import AboutPage from './components/about/aboutPage';
//import MembersPage from './components/members/membersPage';

const isReactComponent = (obj) => Boolean(obj && obj.prototype && Boolean(obj.prototype.isReactComponent));

const lazyComponent = (component) => {
  return isReactComponent(component)
    ? {component}
    : {
      getComponent: (loc, cb)=> {
        require.ensure([], require => {
          cb(null, require('./components/' + component)["default"]);
        });
      }
    }
};

ReactDOM.render(
  <Router history={hashHistory}>
    <Route  path="/" component= {App} >
      <IndexRoute {...lazyComponent('about/aboutPage')} />
      <Route path="/about" {...lazyComponent('about/aboutPage')} />
      <Route path="/members" {...lazyComponent('members/membersPage')} />
      <Route path="/member" component={MemberPage} />
      <Route path="/memberEdit/:id" component={MemberPage} />
    </Route>
  </Router>

  , document.getElementById('root'));
