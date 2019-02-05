# 19 LoginForm

In this sample we are going to add a login page using Material-UI, a widely used set of UI components for React.

We will take as startup point sample _18 Hooks_.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) if they are not already installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v`
in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content of `18 Hooks` folder to an empty folder for the sample.

- To ensure that we use exactly React version 16.7.0-alpha-0, let's set it like that in package.json:
```diff
- "react": "^16.7.0-alpha.0",
- "react-dom": "^16.7.0-alpha.0",
+ "react": "16.7.0-alpha.0",
+ "react-dom": "16.7.0-alpha.0",
```

- Install dependencies:
```
npm install
```

- Then, we need to install Material-UI:
```
npm install @material-ui/core @material-ui/icons --save-dev
```

- We are going to add a new component to show a login form. So, firstly, let's create a new folder under _./src/components_, named _login_. Secondly, we will add there a new file, _loginForm.tsx_, which will contain a form with two text fields and a button from Material-UI.

- In order to perform the login in the parent component when the button is clicked, we add a callback as a property in _Props_ interface.

_./src/components/login/loginForm.tsx_
```
import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface Props {
  onLogin: () => void;
}

export const LoginForm: React.StatelessComponent<Props> = (props: Props) => {

  return (
    <div className="login-form">
      <TextField 
        label="name"
        margin="normal"
      />
      <TextField
        label="password"
        type="password"
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={props.onLogin}>
        Login
      </Button>
    </div>
  );
}
```

- Now, let's create the page component, named _LoginPage_, that will contain our recently created _LoginForm_. We will include the form in a _Card_ from Material-UI. Also, we need to add a function to perform the action related to the _onLogin_ event. In this case, we are going to show the _About_ page, which was the home page in previous samples.

_./src/components/login/loginPage.tsx_

```
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { LoginForm } from './loginForm';

interface Props extends RouteComponentProps<any> {
}

export class Login extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  private onLogin = () => {
    this.props.history.push('/about');
  }

  public render() {
    return (
      <Card className="login-card">
        <CardHeader title="Login" />
        <CardContent>
          <LoginForm
            onLogin={this.onLogin}
          />
        </CardContent>
      </Card>
    );
  }
}
```

- Also, we are going to add barrels for the login component:

_./src/components/login/index.ts_
```
export { Login } from './loginPage';
```

_./src/components/index.ts_
```diff
+ export * from './login';
```

- In order to show the new page properly styled, we will add some styles to site.css file:

_./src/css/site.css_
```diff
+ .login-form {
+     display: flex;
+     flex-direction: column;
+     justify-content: center;
+ }
+
+ .login-card {
+     max-width: 400px;
+     margin: 0 auto;
+ }
```

- Now, let's change the home route in _AppRouter_ component. We have to replace the about page by the login page:

_./src/router.tsx_
```diff
- import { About, MembersPage, MemberPageContainer } from './components';
+ import { About, MembersPage, MemberPageContainer, Login } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Route component={App} />
        <Switch>
-         <Route exact path="/" component={About} />
+         <Route exact path="/" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/members" component={MembersPage} />
          <Route exact path="/member" component={MemberPageContainer} />
          <Route path="/member/:id" component={MemberPageContainer} />
        </Switch>
      </div>
    </Router>
  );
}
```

- The next step is to modify the _App_ component because we are not going to show the _Header_ in the _LoginPage_. Therefore, we need to remove it from the _App_ component and add it to _About_ and _Members_ pages because they are the only ones where _Header_ will be shown. 

_./src/app.tsx_

```diff
import * as React from 'react';
- import { Header } from './components';

export const App: React.StatelessComponent<{}> = (props) => {
  return (
-   <div className="container-fluid">
+   <div>
-     <Header />
      {props.children}
    </div>
  );
}
```

_/.src/components/members/page.tsx_

```diff
//...
+ import { Header } from '../header';

//...
  return (
+   <div>
+     <Header />
      <div className="row">
        <h2> Members Page</h2>
        <Link to="/member">New Member</Link>
        <table className="table">
          <thead>
            <MemberHeader />
          </thead>
          <tbody>
            {
              members.map((member) =>
                <MemberRow
                  key={member.id}
                  member={member}
                />
              )
            }
          </tbody>
        </table>
      </div>
+   </div>
  );
}
```

_./src/components/about.tsx_
```diff
+ import { Header } from './header';

export const About: React.StatelessComponent<{}> = () => {
  return (
+   <div>
+     <Header />
      <div className="row about-page col-12">
-       <h1 className="jumbotron col-2">18 Hooks</h1>
+       <h1 className="jumbotron col-2">19 LoginForm</h1>

        <div className="col-10" id="header-title">
          <h1>
-           <small>This sample takes as starting point sample "08 ParamNavigation".</small>
+           <small>This sample takes as starting point sample "18 Hooks".</small>
          </h1>
          <div className="col-10">
            <h3>
-             <small>We are replacing class components by stateless components using Hooks.</small>
+             <small>We are adding a login form using Material-UI.</small>
            </h3>
          </div>
        </div>

        <div className="col-2 top-buffer">
          <h3>Highlights</h3>
          <hr />
          <h3>
            <small>The most interesting parts worth to take a look</small>
          </h3>
        </div>

        <div className="col-10">
          <ul>
            <li className="top-buffer">
              <h4><b>Components:</b></h4>
              <ul className="top-buffer">
                <li>
                  <h4>
-                   components/members/page.tsx: <small>Stateless component using Hooks.</small>
+                   components/login: <small>New login page.</small>
                  </h4>
                </li>
                <li>
                  <h4>
-                   components/member/pageContainer.tsx: <small>Stateless component using Hooks.</small>
+                   common/components/notification: <small>New common component to show a notification.</small>
                  </h4>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>     
+   </div>
  );
}
```

- At this point, we have the structure and design of the login page working. Now, it is time to add the logic to perfom the login event, so that it only shows the _About_ page if the credentials are correct.

- Firstly, we are going to create a new _LoginEntity_ in our model.

_./src/model/login.ts_
```
export interface LoginEntity {
  login: string;
  password: string;
}

export const createEmptyLogin = (): LoginEntity => ({
  login: '',
  password: '',
});
```

_./src/model/index.ts_
```diff
+ export * from './login';
```

- Secondly, we will modify _LoginForm_ to add a property with the currently typed credentials, named _loginInfo_, and a function to update the credentials when the user types into the login or password text fields. We are going to use them in _value_ and _onChange_ properties of the _TextField_ component. 

_./src/components/login/loginForm.tsx_
```diff
import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
+ import { LoginEntity } from '../../model';

interface Props {
  onLogin: () => void;
+ onUpdateLoginField: (name: string, value: any) => void;
+ loginInfo: LoginEntity;
}

export const LoginForm: React.StatelessComponent<Props> = (props: Props) => {

+ const onTextFieldChange = (fieldId) => (e) => {
+   props.onUpdateLoginField(fieldId, e.target.value);
+ }

  return (
    <div className="login-form">
      <TextField 
        label="name"
        margin="normal"
+       value={props.loginInfo.login}
+       onChange={onTextFieldChange('login')}
      />
      <TextField
        label="password"
        type="password"
        margin="normal"
+       value={props.loginInfo.password}
+       onChange={onTextFieldChange('password')}
      />
      <Button variant="contained" color="primary" onClick={props.onLogin}>
        Login
      </Button>
    </div>
  );
}
```

- Thirdly, let's review _LoginPage_ component. We need to add _loginInfo_ to the state and update it accordingly. Also, it is necessary to check whether the credentials are correct or not. To do that, we will add a function named _isValidLogin_ to our fake API.

_./src/components/login/loginPage.tsx_

```diff
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { LoginForm } from './loginForm';
+ import { isValidLogin } from '../../api/login';
+ import { LoginEntity, createEmptyLogin } from '../../model';

interface Props extends RouteComponentProps<any> {
}

+ interface State {
+   loginInfo: LoginEntity;
+ }

- export class Login extends React.Component<Props, {}> {
+ export class Login extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

+   this.state = {
+     loginInfo: createEmptyLogin(),
+   };
  }

  private onLogin = () => {
+   if (isValidLogin(this.state.loginInfo)) {
      this.props.history.push('/about');
+   } 
  }

+ private onUpdateLoginField = (name, value) => {
+   this.setState({
+     loginInfo: {
+       ...this.state.loginInfo,
+       [name]: value,
+     },
+   });
+ }

  public render() {
    return (
      <Card className="login-card">
        <CardHeader title="Login" />
        <CardContent>
          <LoginForm
            onLogin={this.onLogin}
+           onUpdateLoginField={this.onUpdateLoginField}
+           loginInfo={this.state.loginInfo}
          />
        </CardContent>
      </Card>
    );
  }
}
```

- The new function to check if a login is valid in our API:

_./src/api/login/login.ts_
```
import { LoginEntity } from "../../model";

export const isValidLogin = (loginInfo: LoginEntity): boolean => 
  (loginInfo.login === 'admin' && loginInfo.password === 'test');
```

- And its corresponding barrel:

_./src/api/login/index.ts_
```
export { isValidLogin } from './login';
```

- Finally, let's add a notification to show the user when the credentials are incorrect. To do that, we are going to create a common notification component using Material-UI:

_./src/common/components/notification/notification.tsx_
```
import * as React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from "@material-ui/core";

interface Props {
  classes?: any;
  message: string;
  show: boolean;
  onClose: () => void;
}

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

const NotificationComponentInner: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={props.show}
      autoHideDuration={3000}
      onClose={props.onClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">{props.message}</span>}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={props.classes.close}
          onClick={props.onClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  );
}

export const NotificationComponent = withStyles(styles)(NotificationComponentInner);
```

- Let's add the barrel:

_./src/common/components/notification/index.ts_
```
export { NotificationComponent } from './notification';
```

- Now, let's use our recently created _NotificationComponent_ in _LoginPage_.

_./src/components/login/loginPage.tsx_
```diff
//...
+ import { NotificationComponent } from '../../common/components/notification';

interface Props extends RouteComponentProps<any> {
}

interface State {
  loginInfo: LoginEntity;
+ showLoginFailedMsg: boolean;
}

export class Login extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      loginInfo: createEmptyLogin(),
+     showLoginFailedMsg: false,
    };
  }

  private onLogin = () => {
    if (isValidLogin(this.state.loginInfo)) {
      this.props.history.push('/about');
+   } else {
+     this.setState({
+       ...this.state,
+       showLoginFailedMsg: true,
+     });
    }
  }

  private onUpdateLoginField = (name, value) => {
    this.setState({
      loginInfo: {
        ...this.state.loginInfo,
        [name]: value,
      },
    });
  }

  public render() {
    return (
+     <div>
+       <NotificationComponent
+         message="Invalid login or password, please type again"
+         show={this.state.showLoginFailedMsg}
+         onClose={() => this.setState({ showLoginFailedMsg: false })}
+       />
        <Card className="login-card">
          <CardHeader title="Login" />
          <CardContent>
            <LoginForm
              onLogin={this.onLogin}
              onUpdateLoginField={this.onUpdateLoginField}
              loginInfo={this.state.loginInfo}
            />
          </CardContent>
        </Card>
+     </div>
    );
  }
}
```

- It is time to see our sample running. Run the command `npm start` and open the browser at http://localhost:8080

- More info about Material-UI:

  https://material-ui.com/

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us. 
