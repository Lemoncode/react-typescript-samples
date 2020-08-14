# 15 Context

In this sample we are going to learn how React 16 context api works.

This will allow us to share information between components without having to go through props drilldown or having to add redux support to our project.

We will take a startup point sample 14 FormValidation:

## Steps

- We want to store just the _login_ field once the user logs in and display it in the page B (or in whatever page or component we need it), let's add a default value ('no user').

- Let's start by creating a context, we will call it _sessionContext_, and add the proper typing

_./src/common/sessionContext.tsx_

```javascript
import * as React from "react";

export interface SessionContextProps {
  login: string;
  updateLogin: (value: string) => void;
}

export const createDefaultUser = (): SessionContextProps => ({
  login: "no user",
  updateLogin: value => {
    console.warn(
      "if you are reading this, likely you forgot to add the provider on top of your app"
    );
  }
});

export const SessionContext =
  React.createContext < SessionContextProps > createDefaultUser();
```

- This session context will expose a _provider_ (it will serve us to set the login name in the context), and a _consumer_ (that will let us consume the login name from the context at any point of the application).
  We will create a component (we will name it _SessionProvider_) that on one hand will store in the state the login name and bind it to the _SessionContext_ and on the other hand it will act as a wrapper (usually it will sit on top of the application and wrap the application).

_./src/common/sessionContext.tsx_

Append this at the bottom of the file.

```typescript
export const SessionProvider: React.StatelessComponent = props => {
  const [login, setLogin] = React.useState<string>("");

  return (
    <SessionContext.Provider value={{ login, updateLogin: setLogin }}>
      {props.children}
    </SessionContext.Provider>
  );
};
```

- Let's import the _SessionProvider_ in the barrel _index_.

_./src/common/index.ts_

```diff
export * from "./notification";
export * from "./textFieldForm";
+ export * from "./sessionContext";
```

- Let's setup the _sessionProvider_ at the top of our application.

_./src/app.tsx_

```diff
import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { PageB } from "./pages/pageB";
+ import { SessionProvider } from "./common";

export const App = () => {
  return (
    <>
+      <SessionProvider>
        <HashRouter>
          <Switch>
            <Route exact={true} path="/" component={LoginPage} />
            <Route path="/pageB" component={PageB} />
          </Switch>
        </HashRouter>
+      </SessionProvider>
    </>
  );
};

```

- Let's access the context in PageB using the _useContext_.

_./src/pages/pageB.tsx_

```diff
import * as React from "react";
import { Link } from "react-router-dom";
+ import { SessionContext } from '../common';

- export const PageB = () => (
+ export const PageB = () => {
+
+ const loginContext = React.useContext(SessionContext);
+
+ return (
  <div>
    <h2>Hello from page B</h2>
+   <h3>User logged in: {loginContext.login}</h3>
    <br />
    <Link to="/">Navigate to Login</Link>
  </div>
+ )
+}
```

- Let's update the loginPage.

_./src/pages/login.container.tsx_

```diff
- import { TextFieldForm } from "../common";
+ import { TextFieldForm, SessionContext } from "../common";

```

_./src/pages/loginPage.tsx_

```diff
export const LoginContainer: React.FC<Props> = (props) => {
+  const loginContext = React.useContext(SessionContext);
  const history = useHistory();
  const [isShowAlert, setShowAlert] = React.useState(false);
  const classes = useFormStyles();

  const loginSucceeded = (isValid: boolean, login: LoginEntity) => {
    if (isValid) {
      history.push("/pageB");
+      loginContext.updateLogin(login.login);
    } else {
      setShowAlert(true);
    }
  };

  const handleLogin = (login: LoginEntity) => {
    isValidLogin(login).then((isValid) => loginSucceeded(isValid, login));
  };
};
```

- Let's give a try.

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
