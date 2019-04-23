# 12 React Router

In this sample we will start using React-Router (<acronym title="Single Page Application">SPA</acronym> navigation).

We take as a starting point the example _03 State_:

## Steps

- Copy the content from _03 State_ and execute `npm install`.

```bash
npm install
```

- Let's make some cleanup (remove _src/hello.tsx_ and _src/nameEdit.tsx_ files).

- Let's create a component called _PageA_ as _src/pages/pageA.tsx_:

_./src/pages/pageA.tsx_

```jsx
import * as React from "react"

export const PageA = () =>
    <div>
      <h2>Hello from page A</h2>
    </div>
```

- Let's create a component called _PageB_ as _src/pages/pageB.tsx_:

_./src/pages/pageB.tsx_

```jsx
import * as React from "react"

export const PageB = () =>
    <div>
      <h2>Hello from page B</h2>
    </div>
```

- Let's install the dependencies [`react-router-dom`](https://github.com/ReactTraining/react-router) and typescript definitions for this.

```bash
npm install react-router-dom --save
npm install @types/react-router-dom --save-dev
```

- Let's define the routing in _app.tsx_:

_./src/app.tsx_

```diff
import * as React from 'react';
import * as ReactDOM from 'react-dom';
- import { HelloComponent } from './hello';
- import { NameEditComponent } from './nameEdit';
+ import { HashRouter, Switch, Route } from 'react-router-dom';
+ import { PageA } from './pages/pageA';
+ import { PageB } from './pages/pageB';

export const App = () => {
- const [name, setName] = React.useState("initialName");

- const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
-    setName(event.target.value);
-  };
  return (
    <>
-     <HelloComponent userName={name} />
-     <NameEditComponent userName={name} onChange={setUsernameState} />
+     <HashRouter>
+       <Switch>
+         <Route exact={true} path="/" component={PageA} />
+         <Route path="/pageB" component={PageB} />
+       </Switch>
+     </HashRouter>,
    </>
);

```

- It's time to check that we are following the right track:

```bash
npm start
```

- Let's define a navigation from _[PageA.tsx](./src/pageA.tsx)_ to _[PageB.tsx](./src/pageB.tsx)_.

_./src/pages/pageA.tsx_

```diff
import * as React from "react"
+ import { Link } from 'react-router-dom';

export const PageA = () =>
    <div>
      <h2>Hello from page A</h2>
+     <br />
+     <Link to="/pageB">Navigate to Page B</Link>
    </div>
```

- Let's define a navigation from _[PageB.tsx](./src/pageB.tsx)_ to _[PageA.tsx](./src/pageA.tsx)_

_./src/pages/pageB.tsx_

```diff
import * as React from "react"
+ import { Link } from 'react-router-dom';

export const PageB = () =>
    <div>
      <h2>Hello from page B</h2>
+     <br />
+     <Link to="/">Navigate to Page A</Link>
    </div>
```


- Let's run the app and check that the navigation links are working

```bash
npm start
```


# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend

