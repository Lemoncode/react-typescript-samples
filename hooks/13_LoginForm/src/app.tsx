import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { LoginContainer } from "./pages/login.container";
import { PageB } from "./pages/pageB";

export const App = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={LoginContainer} />
          <Route path="/pageB" component={PageB} />
        </Switch>
      </HashRouter>
    </>
  );
};
