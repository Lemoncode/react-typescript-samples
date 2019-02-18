import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { PageB } from "./pages/pageB";

export const App = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={LoginPage} />
          <Route path="/pageB" component={PageB} />
        </Switch>
      </HashRouter>
    </>
  );
};
