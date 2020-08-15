# 09 Sidebar

In this example we are going to add a sidebar to our application, we will start with a specific
implementation, then we will make it generic.

# Steps

- We will take as starting point sample _08 ColorPickerRefactor_, let's copy the content
  from that file and execute _npm install_.

```bash
npm install
```

- Create a file called _src/components/sidebar.css_ and add the following styles (http://www.w3schools.com/howto/howto_js_sidenav.asp):

_./src/components/sidebar.css_

```css
/* The side navigation menu */
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #808080; /* Gray*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left 0.5s;
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
```

- We are going to use CSS Modules, so let's configure it.

_./webpack.config.js_

```diff
  module.exports = {
    context: path.join(basePath, "src"),
    resolve: {
-      extensions: ['.js', '.ts', '.tsx']
+      extensions: ['.js', '.ts', '.tsx', '.css']
    },
```

- We will only use CSS Modules for custom app stylesheets. We will not use CSS Modules for other CSS files, like Bootstrap (folder node_modules).

_./webpack.config.js_

```diff
  {
    test: /\.css$/,
+   include: /node_modules/,
    use: [MiniCssExtractPlugin.loader, "css-loader"]
  },
+  // Use CSS modules for custom stylesheets
+  {
+    test: /\.css$/,
+    exclude: /node_modules/,
+    use: [
+        MiniCssExtractPlugin.loader,
+        {
+          loader: 'css-loader',
+          options: {
+            modules: {
+              localIdentName: "[name]__[local]___[hash:base64:5]",
+            },
+            localsConvention: "camelCase",
+          },
+        },
+      ]
+  },
+  // Do not use CSS modules in node_modules folder

```

- We are going to create now a sidebar component, _src/components/sidebar.tsx_. Right now we will create just
  a rectangle and we will interact with the animation.

We need to install node typings, since we are going to make use of _require_ to import from
the _css_.

```bash
npm install @types/node --save-dev
```

_./src/components/sidebar.tsx_

```jsx
import * as React from "react";

const classNames = require("./sidebar.css");

export const SidebarComponent = () => (
  <div id="mySidenav" className={classNames.sidenav}>
    <span>Basic side bar, first steps</span>
  </div>
);
```

- Let's add this component to the _index_ barrel.

_./src/components/index.ts_

```diff
export * from "./hello";
export * from "./nameEdit";
export * from "./colorBrowser";
export * from "./colorPicker";
+ export * from "./sidebar";
```

- We are going to add a known id to the body section of _src/index.html_ page

_./src/index.html_

```diff
-  <body>
+  <body id="main">
```

- Let's place the component adding it into the `app.tsx`:

_./src/app.tsx_

```diff
import * as React from "react";
- import { HelloComponent, NameEditComponent, ColorBrowser, ColorPicker } from "./components";
+ import { HelloComponent, NameEditComponent, ColorBrowser, ColorPicker, SidebarComponent } from "./components";
import { Color } from "./model/color";
```

_./src/app.tsx_

```diff
  return (
    <>
+      <SidebarComponent />
      <ColorBrowser color={color} />
```

- Let's start with the interesting part of this implementation, let's add a flag to show/hide the
  sidebar _sidebar.tsx_.

_./src/components/sidebar.tsx_

```diff
import * as React from 'react';

const classNames = require('./sidebar.css');

+ interface Props {
+  isVisible: boolean;
+ }

- export const SidebarComponent = () =>
+ export const SidebarComponent = (props: Props) =>
    <div id="mySidenav" className={classNames.sidenav}>
        <span>Basic sidebar, first steps</span>
    </div>
```

- Now let's add some logic to show / hide the sidebar in case the flag gets updated

_./src/sidebar.tsx_

```diff
import * as React from 'react';

const classNames = require('./sidebar.css');

interface Props {
  isVisible: boolean;
};

+    const divStyle = (props: Props): React.CSSProperties => ({
+      width: (props.isVisible) ? '23rem' : '0rem'
+    });

export const SidebarComponent = (props: Props) =>
-    <div id="mySidenav" className={classNames.sidenav}>
+    <div id="mySidenav" className={classNames.sidenav}
+      style={divStyle(props)}
+    >
        <span>Basic sidebar, first steps</span>
    </div>
```

- Let's make a quick test, we will show always the side bar:

_./src/app.tsx_

```diff
 return (
    <>
-      <SidebarComponent />
+      <SidebarComponent isVisible={true}/>
      <ColorBrowser color={color} />
```

- If we start the project we should now see the sidebar that we have created (a gray rectangle).

```bash
npm start
```

_What if I cannot see the sidebar?_ Check that your styles and webpackconfig has been applied,
you may need to start and top webpack-dev-sever (relaunch _npm \_start_), check with dev tools
that you are loading the CSS styles.

- Now at app level we can remember the visible status and add a button to toggle the
  visibility of the sidebar.

_./src/app.tsx_

```diff
export const App = () => {
  const [name, setName] = React.useState("defaultUserName");
  const [editingName, setEditingName] = React.useState("defaultUserName");
  const [color, setColor] = React.useState<Color>({
    red: 20,
    green: 40,
    blue: 180
  });
+ const[isVisible, setVisible] = React.useState(false);
```

_./src/app.tsx_

```diff
  return (
    <>
-      <SidebarComponent isVisible={true} />
+      <SidebarComponent isVisible={isVisible} />
      <ColorBrowser color={color} />
      <ColorPicker color={color} onColorUpdated={setColor} />
      <HelloComponent userName={name} />
      <NameEditComponent
        initialUserName={name}
        editingName={editingName}
        onNameUpdated={setUsernameState}
        onEditingNameUpdated={setEditingName}
        disabled={editingName === "" || editingName === name}
      />
+       <div style={{float: 'right'}}>
+         <button
+           onClick={() => setVisible(!isVisible)}>
+           Toggle Sidebar
+         </button>
+       </div>
    </>
```

- Let's start the application to check how it behaves:

```bash
npm start
```

> Excercise: the inline call to the function in _onClick_ is not considered a
> good pratice (on each render the function will be recreated), let's refactor this in two
> steps:

- First we will extract this logic to a function, we will call it _toggleSidebarVisibility_.
- Then let's wrap visibility + toggleSidebarVisibility in a custom hook.

* So far so good, but what happens if we want to make this sidebar a reusable component? We could just show the frame but the content should be dynamic.

* Let's start by adding some content when instantiating the sidebar (_app.tsx_).

_./src/app.tsx_

```diff
    <>
-      <SidebarComponent isVisible={isVisible} />
+      <SidebarComponent isVisible={isVisible}>
+        <h1>Cool Scfi movies</h1>
+          <ul>
+            <li><a href="https://www.imdb.com/title/tt0816692/">Interstellar</a></li>
+            <li><a href="https://www.imdb.com/title/tt0083658/">Blade Runner</a></li>
+            <li><a href="https://www.imdb.com/title/tt0062622/">2001: a space odyssey</a></li>
+         </ul>
+      </SidebarComponent>
      <ColorBrowser color={color} />
```

> We got an error, _children_ is not defined, that's something we are going to fix in the
> next step...

- Now in the _sidebar.tsx_ let's dump this content by using {this.props.children}

_./src/components/sidebar.tsx_

```diff
- export const SidebarComponent = (props: Props) => (
+ export const SidebarComponent: React.StatelessComponent<Props> = (props)  => (

  <div id="mySidenav" className={classNames.sidenav} style={divStyle(props)}>
-    <span>Basic side bar, first steps</span>
+    {props.children}
  </div>
);
```

- Let's try the sample

```
npm start
```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
