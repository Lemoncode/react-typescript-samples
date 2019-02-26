import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { PageA } from "./pages/pageA";
import { PageB } from "./pages/pageB";

export const App = () => {
  const [name, setName] = React.useState("defaultUserName");

  const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

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
