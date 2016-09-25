import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/app.tsx';
import * as _AboutPage from "./components/about/aboutPage";
import * as _MemberPage from "./components/member/memberPage";
import * as _MembersPage from "./components/members/membersPage";

namespace Chunks {
  export const About = "AboutPage";
  export const Member = "MemberPages";
}

type LoadCallback = (error: any, component: React.ComponentClass<any>) => void;

function loadAboutPage(location: any, callback: LoadCallback) {
  loadModule<typeof _AboutPage>(
    "./components/about/aboutPage",
    Chunks.About,
    loadedModule => callback(null, loadedModule.default));
};

function loadMemberPage(location: any, callback: LoadCallback) {
  loadModule<typeof _MemberPage>(
    "./components/member/memberPage",
    Chunks.Member,
    loadedModule => callback(null, loadedModule.default));
}

function loadMembersPage(location: any, callback: LoadCallback) {
  loadModule<typeof _MembersPage>(
    "./components/member/membersPage",
    Chunks.Member,
    loadedModule => callback(null, loadedModule.default));
}

function loadModule<TModule>(moduleName: string, chunkName: string, callback: (module: TModule) => void): void {
  require.ensure([moduleName], (require) => callback(require(moduleName) as TModule), chunkName);
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route  path="/" component= {App} >
      <IndexRoute getComponent={ loadAboutPage } />
      <Route path="/about" getComponent={ loadAboutPage } />
      <Route path="/members" getComponent={ loadMembersPage } />
      <Route path="/member" getComponent={ loadMemberPage } />
      <Route path="/memberEdit/:id" getComponent={ loadMemberPage } />
    </Route>
  </Router>,
  document.getElementById('root'));
