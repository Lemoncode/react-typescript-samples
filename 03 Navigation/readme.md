# 03 Navigation

In this sample we will create a members page, adding navigation using react-router.

We will take a startup point sample _02 Components_.

Summary steps:

- Install react-router and typings.
- Create dummy `Members page`.
- Update `Header` component.
- Update `About` component content.
- Create `AppRouter` component.
- Update `App`.
- Update `index.tsx`.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.6.0) if they are not already
installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v`
in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content of the `02 Components` folder to an empty folder for the sample.

- Install the npm packages described in the `package.json` and verify that it works:

 ```bash
 $ npm install
 ```

- Install `react-router` version 3 and typings:

```bash
npm install react-router@3 --save
npm install @types/react-router@3 --save-dev
```

- Update `vendors`:

### ./webpack.config.js
```diff
...
entry: {
    app: './index.tsx',
    appStyles: './css/site.css',
    vendor: [
      'react',
      'react-dom',
+     'react-router',
    ],
    vendorStyles: [
      '../node_modules/bootstrap/dist/css/bootstrap.css',
    ],
  },
...
```

- Now, we can start adding a dummy `Members Page`:

### ./src/components/members/page.tsx
```javascript
import * as React from 'react';

export const MembersPage: React.StatelessComponent<{}> = () => {
  return (
    <div className="row">
      <h2> Members Page</h2>
    </div>
  );
}

```

- And its `index.ts` file:

### ./src/components/members/index.tsx
```javascript
export * from './page';

```

- Update `header` component to add links to navigate other pages:

### ./src/components/header.tsx
```diff
import * as React from 'react';
+ import { Link } from 'react-router';

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div className="row">
-     <h2>Application Header</h2>
+     <nav className="navbar navbar-default">
+       <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
+         <ul className="nav navbar-nav">
+           <li><Link to="/about">About</Link></li>
+           <li><Link to="/members">Members</Link></li>
+         </ul>
+       </div>
+     </nav>
    </div>
  );
}

```

- Update components `index.ts` file:

### ./src/components/members/index.tsx
```diff
export * from './header';
export * from './about';
+ export * from './members';

```

- We update`About` content to show sample `03 Navigation` highlights. You can see updates in `./src/components/about.tsx`.

- Now, we are going to create the `AppRouter` component when we define routes:

### ./src/router.tsx
```javascript
import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App } from './app';
import { About, MembersPage } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={About} />
        <Route path="/about" component={About} />
        <Route path="/members" component={MembersPage} />
      </Route>
    </Router>
  );
}

```

- Update `App`:

### ./src/app.tsx
```diff
import * as React from 'react';
- import { Header, About } from './components';
+ import { Header } from './components';

- export const App: React.StatelessComponent<{}> = () => {
+ export const App: React.StatelessComponent<{}> = (props) => {
  return (
    <div className="container-fluid">
      <Header />
-     <About />
+     {props.children}
    </div>
  );
}

```

- And finally, update main file:

### ./src/index.tsx
```diff
import * as React from 'react';
import * as ReactDOM from 'react-dom';
- import {App} from './app';
+ import { AppRouter } from './router';

ReactDOM.render(
- <App />
+ <AppRouter />
  , document.getElementById('root'));

```

- Execute the example:

 ```bash
 $ npm start
 ```

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us. 
