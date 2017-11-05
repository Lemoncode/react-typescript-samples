import * as React from 'react';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { App } from './app';
import { About, MembersPage } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <HashRouter>
      <App>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/members" component={MembersPage} />
      </App>
    </HashRouter>
  );
}
