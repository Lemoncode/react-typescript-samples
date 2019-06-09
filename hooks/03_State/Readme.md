# 03 State

In this example we introduce a basic React concept: handling State.

In this scenario we provide a default username and let the user update it.

We take as a starting point the example _02 Properties_:

## Summary steps:

- Create an _App_ component that holds the state. This state will contain the current
  username (with default value "defaultUserName").
  This _App_ component renders the _Hello_ component. At first we create a simple stateless
  _App_ component.
- Update _index.tsx_ file to include our _App_ component.
- Change _App_ component to a stateful class component to hold the _userName_ state.
- Create a _NameEdit_ component to let the user change the value of username. This changes the _App_ state
  using a function from _App_.
- Check everything works properly.

## Prerequisites

Install [Node.js and npm](https://nodejs.org) if they are not already installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content from _02 Properties_ and execute `npm install`.

- Let's create an _App_ component under a new file named _app.tsx_ (this component will display the _Hello_ component).

_./src/app.tsx_

```jsx
import * as React from "react";
import { HelloComponent } from "./hello";

export const App = () => {
  return <HelloComponent userName="John" />;
};
```

- Let's update _index.tsx_ just to use the _App_ component that we have just created.

_./src/index.tsx_

```diff
  import * as React from 'react';
  import * as ReactDOM from 'react-dom';
+ import { App } from './app';

- import { HelloComponent } from './hello';

  ReactDOM.render(
-    <HelloComponent userName="John" />,
+    <App />,
    document.getElementById('root')
  );
```

- Now we can check that things are still working as expected.

  ```
  npm start
  ```

- It's time to revisit _app.tsx_. We want to store the user's name and let the user updated it. We will use hooks to
  allow _App_ functional components to make use of state (this works in React 16.8.2 and above if you have to use
  older versions you have to use a class component, check the "old*classes_components" on the root of this repo for example).
  We will add \_userName* to the state.

Let's move this component to a class stateful component and define a state including _userName_, and pass this value to the _Hello_ component.

_./src/app.tsx_

```diff
import * as React from "react";

import { HelloComponent } from "./hello";

export const App = () => {
+ const [name, setName] = React.useState('defaultUserName');
-  return <HelloComponent userName="John" />;
+  return <HelloComponent userName={name} />;
};
```

- Again, we can do a quick check to test that everything works as expected.

```
npm start
```

- Now it's time to create an _NameEdit_ component. This component lets the user update his username and notifies with a callback to the parent control whenever the value of _userName_ gets updated.

_./src/nameEdit.tsx_

```jsx
import * as React from "react";

interface Props {
  userName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NameEditComponent = (props: Props) => (
  <>
    <label>Update name:</label>
    <input value={props.userName} onChange={props.onChange} />
  </>
);
```

Side note: What is this Fragment or <> stuff? A way to create component that has multiple root elements (not a single parent). Available from React 16.2. As an alternative you can type:

```jsx
  ...
  export const NameEditComponent = (props : Props) =>
    <React.Fragment>
      <label>Update name:</label>
      <input value={props.userName}
             onChange={props.onChange}
      />
    </React.Fragment>
}
```

- In the _app.tsx_ file, let's add a function to replace the state value of _userName_ with the new one.

_./src/app.tsx_

```diff
import * as React from "react";
import { HelloComponent } from "./hello";
import { NameEditComponent } from './nameEdit';


export const App = () => {
  const [name, setName] = React.useState("defaultUserName");

+    const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
+      setName(event.target.value);
+    }

- return <HelloComponent userName={name} />;
+      return (
+        <>
+          <HelloComponent userName={name} />
+          <NameEditComponent userName={name} onChange={setUsernameState} />
+        </>
+      );
};
```

- Finally let's test everything works once more.

  ```
  npm start
  ```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend

