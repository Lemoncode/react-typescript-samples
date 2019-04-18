# 00 Boilerplate

In this sample we are going to setup the basic plumbing to "build" our project and launch it in a dev server.

We won't install anything related about React, just some basic plumbing. In sample 01 we will start by importing
React and ReactDOM.

We will setup an initial <abbr title="Node.js package manager, a package manager for the JavaScript runtime environment Node.js">npm</abbr> project, give support to TypeScript, and install React.<br />
Then we will create a **index.ts** sample.

Summary steps:

- Prerequisites: Install Node.js
- Initialize **[./package.json](./package.json)** (with `npm init`)
- Initialize **package.json** (with `npm init`)
- Install:
    - Webpack, webpack-cli and webpack-dev-server.
    - TypeScript.
    - Babel.
    - Bootstrap.
- Setup **[./webpack.config.js](./webpack.config.js)**
- Create a test ts file.
- Create a simple HTML file.

# Prerequisites

Install at least [Node.js and npm](https://nodejs.org/en/) (v8.9.4) if they are not already installed on your computer.

> Verify that you are running at least node v8.x.x and npm 5.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Create and navigate to the folder where you are going to create the empty project.

- Execute `npm init`, you will be prompted to answer some information request
about the project (e.g. set name to _reactboilerplate_ and description to _Sample working with React,TypeScript and Webpack_).
Once you have successfully fullfilled them a **package.json** file we will generated.

 ```bash
 npm init
 ```

- Install **webpack** locally, as a development dependency.

 ```bash
 npm install webpack webpack-cli --save-dev
 ```
- Install **webpack-dev-server** locally, as a development dependency (the reason to install it locally and not globally is to be easy to setup, e.g. can be launched on a clean machine without having to install anything globally but nodejs).

 ```bash
 npm install webpack-dev-server --save-dev
 ```

- Let's install a list of plugins and loaders that will add powers to our webpack configuration (handling <abbr title="Cascading Style Sheets">CSS</abbr>, TypeScript...).

 ```bash
 npm install awesome-typescript-loader css-loader file-loader html-webpack-plugin style-loader url-loader mini-css-extract-plugin --save-dev
 ```

- In order to launch `webpack-dev-server`, modify the **[./package.json](./package.json)** file an add the following lines under the scripts object:
  - `"start": "webpack-dev-server --mode development --inline --hot --open",` It allows us to launch webpack from the command line through npm typing `npm start`. 
  - `"build": "webpack --mode development"`

_[./package.json](./package.json)_
```diff
{
  "name": "reactboilerplate",
  "version": "1.0.0",
  "description": "Sample working with React,TypeScript and Webpack",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
+    "start": "webpack-dev-server  --mode development --inline --hot --open",
+    "build": "webpack  --mode development"
  },
  ...
}

```

- Let's install locally TypeScript (version 2.0 or newer):

 ```bash
 npm install typescript --save-dev
 ```

- We need as well to create a **[./tsconfig.json](./tsconfig.json)** file in the root folder of our project

_[./tsconfig.json](./tsconfig.json)_
 ```json
 {
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "moduleResolution": "node",
    "declaration": false,
    "noImplicitAny": false,
    "sourceMap": true,
    "jsx": "react",
    "noLib": false,
    "suppressImplicitAnyIndexErrors": true
  },
  "compileOnSave": false,
  "exclude": [
    "node_modules"
  ]
}

 ```

- Cause we are working with `es6`, we are going to install `babel` to transpile to `es5`:

 ```bash
 npm install babel-core babel-preset-env --save-dev
 ```

- Babel needs to be configured for works. We will create one file **[./.babelrc](./.babelrc)** in root and later we will see how to put it in **[./webpack.config.js](./webpack.config.js)**. In this example, we will add a config file with this configuration:

_[./.babelrc](./.babelrc)_
```json
{
  "presets": [
    [
      "env",
      {
        "modules": false
      }
    ]
  ]
}

```

- Let's install bootstrap:

 ```bash
 npm install bootstrap --save
 ```

- Now, our **[./package.json](./package.json)** file should looks something like:

_[./package.json](./package.json)_
 ```json
{
  "name": "reactboilerplate",
  "version": "1.0.0",
  "description": "sample working with React, Typescript and Webpack",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server  --mode development --inline --hot --open",
    "build": "webpack  --mode development"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "awesome-typescript-loader": "^5.0.0",
    "babel-core": "^6.26.3",
    "babel-preset-env": "^1.7.0",
    "css-loader": "^0.28.11",
    "file-loader": "^1.1.11",
    "html-webpack-plugin": "^3.2.0",
    "mini-css-extract-plugin": "^0.4.0",
    "style-loader": "^0.21.0",
    "typescript": "^2.8.3",
    "url-loader": "^1.0.1",
    "webpack": "^4.8.1",
    "webpack-cli": "^2.1.3",
    "webpack-dev-server": "^3.1.4"
  },
  "dependencies": {
    "bootstrap": "^4.1.1"
  }
}

 ```

- Let's create a subfolder called **src**. Inside this folder, let´s create a basic **index.ts** file:

**[index.ts](./src/index.ts)**
 ```javascript
document.write('Hello from index.ts!');

 ```

- Let's create a basic **[index.html](./src/index.html)** file (under **src** folder):

_[./src/index.html](./src/index.html)_
 ```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div class="well">
      <h1>Sample app</h1>
    </div>
  </body>
</html>

 ```

- Now it's time to create a basic **[./webpack.config.js](./webpack.config.js)** file, this configuration will include plumbing for:
 - Launching a web dev server.
 - Transpiling from TypeScript to JavaScript.
 - Setup Twitter Bootstrap (including fonts, etc...).
 - Generating the build under a **dist** folder.

_[./webpack.config.js](./webpack.config.js)_
 ```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: ['.js', '.ts'],
  },
  entry: {
    app: './index.ts',
    vendorStyles: [
      '../node_modules/bootstrap/dist/css/bootstrap.css',
    ],
  },
  output: {
    path: path.join(basePath, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]?[hash]',
        },
      },
    ],
  },
  // For development https://webpack.js.org/configuration/devtool/#for-development
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    noInfo: true,
  },
  plugins: [
    // Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', // Name of file in ./dist/
      template: 'index.html', // Name of template in ./src
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};

 ```

- Run webpack with:

 ```
 npm start
 ```
 ## Note: If you have problems when running the app  you should update webpack-cli to : "webpack-cli": "3.2.3"

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us. 
