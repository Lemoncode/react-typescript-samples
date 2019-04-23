# 02 Properties

In this example we introduce a basic React concept: handling properties.

We add a _username_ property and display it in the _hello_ component.

We take as startup point the example **01 Hello React**:

### Summary steps:

- _hello_ stateless component: create a property to hold the _username_ value.
- Let's provide a value from our parent control.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.6.0 or higher) if they are not already installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content from _01 HelloReact_ and execute:

  ```
  npm install
  ```

- Let's update _hello.tsx_ to add a new property (_userName_) and display it using interpolation (_{userName}_):

_./src/hello.tsx_

```diff
import * as React from 'react';

+ interface Props {
+  userName : string;
+ }

- export const HelloComponent = () => {
+ export const HelloComponent = (props: Props) => (
-  return (
-    <h2>Hello component !</h2>
+    <h2>Hello user: { props.userName } !</h2>
  );
- }
```

- Let's update _index.tsx_ and provide a value to the _userName_ property:

_./src/index.tsx_

```diff
  import * as React from 'react';
  import * as ReactDOM from 'react-dom';
  import { HelloComponent } from './hello';

  ReactDOM.render(
-    <HelloComponent />,
+    <HelloComponent userName="John" />,
    document.getElementById('root')
  );
```

- Let's test the sample:

```cmd
npm start
```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend

