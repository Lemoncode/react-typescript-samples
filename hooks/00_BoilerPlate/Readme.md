# 00 Boilerplate

In this sample we setup the basic plumbing to "build" our project and launch it in a dev server.

We won't install anything related to React, but some basic plumbing. React and ReactDOM are imported in sample 01.

We setup an initial <abbr title="Node.js package manager, a package manager for the JavaScript runtime environment Node.js">npm</abbr> project, give support to TypeScript, and install React.<br />
Then we create a **helloworld.ts** sample.

Summary steps:

- Prerequisites: Install Node.js
- Initialize **[./package.json](./package.json)** (with `npm init`)
- Install:
  - Webpack and webpack-dev-server.
  - TypeScript.
  - Babel.
  - Bootstrap.
- Setup **[./webpack.config.js](./webpack.config.js)**
- Create a test JS file.
- Create a simple HTML file.

# Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v8.9.1) if they are not already installed on your computer.

> Verify that you are running at least node v8.x.x and npm 5.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Create and navigate to the folder where you are going to create the empty project.

- Execute `npm init`. You are prompted to answer some questions about the project (e.g. set name to _samplereact_ and description to _Sample working with React, TypeScript and Webpack_).
  Once you have successfully answered them, a **[./package.json](./package.json)** file is generated.

```bash
npm init
```

- Install **webpack** as a development dependency.

```bash
npm install webpack webpack-cli --save-dev
```

- Install **webpack-dev-server** locally, as a development dependency (the reason to install it locally and not globally is to be easy to setup, e.g. can be launched on a clean machine without having to install anything globally but nodejs).

```bash
npm install webpack-dev-server --save-dev
```

- Let's install a list of plugins and loaders to add capabilities to our webpack configuration (handling <abbr title="Cascading Style Sheets">CSS</abbr>, TypeScript...).

```bash
npm install css-loader style-loader file-loader url-loader html-webpack-plugin awesome-typescript-loader mini-css-extract-plugin --save-dev
```

- Let's add two commands to our **[./package.json](./package.json)**: build and start.

_[./package.json](./package.json)_

```diff
  "scripts": {
-    "test": "echo \"Error: no test specified\" && exit 1",
+    "start": "webpack-dev-server  --mode development --inline --hot --open",
+    "build": "webpack  --mode development"
  },
```

- Let's install TypeScript locally:

```bash
npm install typescript --save-dev
```

- We need as well to drop a **[./tsconfig.json](./tsconfig.json)** file in the root folder of our project

_[./tsconfig.json](./tsconfig.json)_

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "moduleResolution": "node",
    "declaration": false,
    "noImplicitAny": false,
    "jsx": "react",
    "sourceMap": true,
    "noLib": false,
    "suppressImplicitAnyIndexErrors": true
  },
  "compileOnSave": false,
  "exclude": ["node_modules"]
}
```

- Now, we need to transpile ES6 to ES5. Let's install **@babel/cli**, **@babel/core**, **@babel/preset-env** and **@babel/polyfill**.

```bash
npm install @babel/cli @babel/core @babel/preset-env @babel/polyfill --save-dev
```

- Let's install webpack _babel_ loader.

```bash
npm install babel-loader --save-dev
```

- Babel needs to be configured for it to work. We create **[./.babelrc](./.babelrc)** in the root folder. Later we will see how to put it in **[./webpack.config.js](./webpack.config.js)**. In this example, we use this .babelrc:

_[./.babelrc](./.babelrc)_

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry"
      }
    ]
  ]
}
```

- Now, our **[./package.json](./package.json)** file should look something like:

_[./package.json](./package.json)_

```json
{
  "name": "reactbysample",
  "version": "1.0.0",
  "description": "In this sample we setup the basic plumbing to \"build\" our project and launch it in a dev server.",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server  --mode development --inline --hot --open",
    "build": "webpack  --mode development",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.1.2",
    "@babel/core": "^7.1.2",
    "@babel/polyfill": "^7.0.0",
    "@babel/preset-env": "^7.1.0",
    "awesome-typescript-loader": "^5.2.1",
    "babel-loader": "^8.0.4",
    "css-loader": "^1.0.0",
    "file-loader": "^2.0.0",
    "html-webpack-plugin": "^3.2.0",
    "mini-css-extract-plugin": "^0.4.3",
    "style-loader": "^0.23.1",
    "typescript": "^3.1.1",
    "url-loader": "^1.1.1",
    "webpack": "^4.20.2",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.9"
  }
}
```

- Let's create a subfolder called **src**.

```bash
mkdir src
```

- Let's create a basic **[main.ts](./src/main.ts)** file (under **src** folder):

_[./src/main.ts](./src/main.ts)_

```javascript
document.write("Hello from main.ts !");
```

- Let's create a basic **[index.html](./src/index.html)** file (under **src** folder):

_[./src/index.html](./src/index.html)_

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body>
    <div class="well">
      <h1>Sample app</h1>
    </div>
  </body>
</html>
```

- Now it's time to create a basic **[./webpack.config.js](./webpack.config.js)** file. This configuration includes plumbing for:
- Launching a web dev server.
- Transpiling from TypeScript to JavaScript.
- Setting up Twitter Bootstrap (including fonts, etc...).
- Generating the build under a **dist** folder.

_[./webpack.config.js](./webpack.config.js)_

```javascript
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var webpack = require("webpack");
var path = require("path");

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  entry: ["@babel/polyfill", "./main.ts"],
  output: {
    path: path.join(basePath, "dist"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist", // Content base
    inline: true, // Enable watch and live reload
    host: "localhost",
    port: 8080,
    stats: "errors-only"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          babelCore: "@babel/core" // needed for Babel v7
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]?[hash]"
        }
      }
    ]
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
```

- Run webpack:

```bash
npm start
```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
