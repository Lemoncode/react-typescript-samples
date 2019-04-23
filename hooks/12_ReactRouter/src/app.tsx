import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { PageA } from "./pages/pageA";
import { PageB } from "./pages/pageB";

export const App = () => {

  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={PageA} />
          <Route path="/pageB" component={PageB} />
        </Switch>
      </HashRouter>
    </>
  );
};
