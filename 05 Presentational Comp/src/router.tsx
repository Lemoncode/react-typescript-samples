import * as React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { App } from './app';
import { About, MembersPage } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <App>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/members" component={MembersPage} />
      </App>
    </BrowserRouter>
  );
}
