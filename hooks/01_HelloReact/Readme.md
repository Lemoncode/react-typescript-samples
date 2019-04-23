# 01 Hello React

In this sample we will create our first react component and connect it with the DOM via react-dom.

We will take a startup point sample _00 Boilerplate_.

Summary steps:

- Install react and react-dom libraries.
- Install react and react-dom typescript definitions.
- Update the index.html to create a placeholder for the react components.
- Create a simple react component.
- Wire up this component by using react-dom.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v8.9.4 or higher) if they are not already installed on your computer.

> Verify that you are running at least node v8.x.x and npm 5.x.x by running `node -v` and `npm -v`
> in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content of the `00 Boilerplate` folder to an empty folder for the sample.

- Install the npm packages described in the [./package.json](./package.json) and verify that it works:

```bash
npm install
```

- Install `react` and `react-dom` libraries as project dependencies.

```bash
npm install react react-dom --save
```

- Install also the typescript definitions for `react` and `react-dom`
  but as dev dependencies.

```bash
npm install @types/react @types/react-dom --save-dev
```

- Update the [./src/index.html](./src/index.html) to create a placeholder for the react components.

_[./src/index.html](./src/index.html)_

```diff
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
</head>
<body>
  <div class="well">
    <h1>Sample app</h1>
+   <div id="root"></div>
  </div>
</body>
</html>

```

- Create a simple react component (let's create it within a new file called `hello.tsx` in `src`folder).

_[./src/hello.tsx](./src/hello.tsx)_

```javascript
import * as React from "react";

export const HelloComponent = () => {
  return <h2>Hello component !</h2>;
};
```

- Wire up this component by using `react-dom` under [./src/index.tsx](./src/index.tsx) (we have to rename
  this file extension from `ts` to `tsx` and replace the content).

_[./src/index.tsx](./src/index.tsx)_

```diff
- document.write('Hello from index.ts!');

+ import * as React from 'react';
+ import * as ReactDOM from 'react-dom';

+ import { HelloComponent } from './hello';

+ ReactDOM.render(
+   <HelloComponent/>,
+   document.getElementById('root')
+ );
```

- Delete the file _main.ts_ we are not going to need it anymore.

- Modify the [./webpack.config.js](./webpack.config.js) file and change the entry point from `./main.ts`
  to `./index.tsx`.

_[./webpack.config.js](./webpack.config.js)_

```diff
...

module.exports = {
 context: path.join(basePath, 'src'),
 resolve: {
   extensions: ['.js', '.ts', '.tsx']
 },
 entry: ["@babel/polyfill", 
-  "./main.ts"],
+  "./index.tsx"],
  output: {
    path: path.join(basePath, "dist"),
    filename: "bundle.js"
  },
```

- Execute the example:

```bash
npm start
```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
