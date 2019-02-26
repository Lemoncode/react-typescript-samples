# 02 Components

In this sample we will create a common header and about page react components.

We will take a startup point sample _01 HelloReact_.

Summary steps:

- Remove `hello.tsx` component.
- Update `index.html`.
- Create `components`.
- Update `index.tsx`.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.6.0or higher) if they are not already
installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v`
in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content of the `01 HelloReact` folder to an empty folder for the sample.

- Install the npm packages described in the `package.json` and verify that it works:

 ```bash
 $ npm install
 ```

- Remove `./src/hello.tsx` file:

- Update `index.html`:

### ./src/index.html
```diff
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
</head>
<body>
+ <div id="root"></div>
- <div class="well">
-   <h1>Sample app</h1>
-   <div id="root"></div>
- </div>
</body>
</html>

```

- Create `About` component:

### ./src/components/about.tsx
```javascript
import * as React from 'react';
import '../css/site.css';

export const About: React.StatelessComponent<{}> = () => {
  return (
    <div className="row about-page top-buffer">
      <h1 className="jumbotron">02 Components</h1>
      <div className="col-xs-12">
        <h1>
          <small>
            This sample takes the sample "01 Hello react" as starting point.
            </small>
        </h1>
        <div className="col-xs-12">
          <h3>
            <small>
              We are adding react components: a main component that consumes a <b>header</b> and an <b>about</b> component.
              </small>
          </h3>
        </div>
      </div>

      <div className="col-xs-12 top-buffer">
        <h3>Highlights</h3>
        <hr />
        <h3>
          <small>
            The most interesting parts which worth to take a look
            </small>
        </h3>
      </div>

      <div className="col-xs-12 top-buffer">
        <ul>
          <li className="top-buffer">
            <h4><b>Components:</b></h4>
            <ul className="top-buffer">
              <li>
                <h4>
                  app.tsx: <small>main component, instantiates header and common component.</small>
                </h4>
              </li>
              <li>
                <h4>
                  header.tsx: <small>simulate a header component (in next samples this will include a nav bar).</small>
                </h4>
              </li>
              <li>
                <h4>
                  aboutPage.tsx: <small>page like component.</small>
                </h4>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

```
- Create `Header` component:

### ./src/components/header.tsx
```javascript
import * as React from 'react';

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div className="row">
      <h2>Application Header</h2>
    </div>
  );
}

```

- Create `index.ts` to export all components:

### ./src/components/index.ts
```javascript
export * from './header';
export * from './about';

```

- Create `App` component:

### ./src/app.tsx
```javascript
import * as React from 'react';
import { Header, About } from './components';

export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="container-fluid">
      <Header />
      <About />
    </div>
  );
}

```

- Add styles used in `About` component:

### ./src/css/site.css
```diff
- /* entry point css */
+ .top-buffer {
+   margin-top: 20px;
+ }

+ .about-page {
+   position: relative;
+   top: -20px;
+ }

+ .about-page .jumbotron {
+   margin: 0;
+   background: rgba(9,69,95,0.8);
+   color: white;
+   border-radius: 0 !important;
+ }

+ /*React apply activeClassName to <a> element, but Bootstrap active class is over <li> element*/
+ .navbar .nav .active, .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {
+   background: #e7e7e7 !important;
+   color: #333 !important;
+ }

```

>Note: As an alternative to apply CSS to our components we can, in stead, of using it as an imported file, like we've done in _about.tsx_ or we can configure _webpack.config.js_. To do so, we need to make sure to apply the following configuration:
```diff
entry: {
    app: './index.tsx',
+    appStyles: './css/site.css',
    vendor: [
      'react',
      'react-dom',
    ],
    vendorStyles: [
      '../node_modules/bootstrap/dist/css/bootstrap.css',
    ],
  },
```
>Note that this will apply the provided CSS to every file

- Finally, we update `index.tsx`:

### ./src/index.tsx
```diff
import * as React from 'react';
import * as ReactDOM from 'react-dom';
- import { HelloComponent } from './hello';
+ import {App} from './app';

ReactDOM.render(
- <HelloComponent/>,
+ <App/>,
  document.getElementById('root')
);

```

- Execute the example:

 ```bash
 $ npm start
 ```

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us. 
