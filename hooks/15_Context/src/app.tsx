import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { PageB } from "./pages/pageB";
import { SessionProvider } from "./common";

export const App = () => {
  return (
    <>
      <SessionProvider>
        <HashRouter>
          <Switch>
            <Route exact={true} path="/" component={LoginPage} />
            <Route path="/pageB" component={PageB} />
          </Switch>
        </HashRouter>
      </SessionProvider>
    </>
  );
};
