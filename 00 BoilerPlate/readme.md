# 00 Boilerplate

In this sample we are going to setup the basic plumbing to "build" our project and launch it in a dev server.

We won't install anything related about React, just some basic plumbing. In sample 01 we will start by importing
React and ReactDOM.

We will setup an initial <abbr title="Node.js package manager, a package manager for the JavaScript runtime environment Node.js">npm</abbr> project, give support to TypeScript, and install React.<br />
Then we will create a **index.ts** sample.

Summary steps:

- Prerequisites: Install Node.js
- Initialize **package.json** (with `npm init`)
- Install:
    - Webpack and webpack-dev-server.
    - TypeScript.
    - Bootstrap.
- Setup **webpack.config.js**
- Create a test ts file.
- Create a simple HTML file.

# Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.9.1) if they are not already installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Create and navigate to the folder where you are going to create the empty project.

- Execute `npm init`, you will be prompted to answer some information request
about the project (e.g. set name to _reactboilerplate_ and description to _Sample working with React,TypeScript and Webpack_).
Once you have successfully fullfilled them a **package.json** file we will generated.

 ```
 npm init
 ```

- Install **webpack** as a development dependency.

 ```
 npm install webpack --save-dev
 ```
- Install **webpack-dev-server** locally, as a development dependency (the reason to install it locally and not globally is to be easy to setup, e.g. can be launched on a clean machine without having to install anything globally but nodejs).

 ```
 npm install webpack-dev-server --save-dev
 ```

- Let's install a list of plugins and loaders that will add powers to
our webpack configuration (handling <abbr title="Cascading Style Sheets">CSS</abbr>, TypeScript...).

 ```
 npm install awesome-typescript-loader css-loader file-loader html-webpack-plugin style-loader url-loader --save-dev
 ```

- In order to launch `webpack-dev-server`, modify the **package.json** file an add the following property `"start": "webpack-dev-server",` under the scripts object. It allows us to launch webpack from the command line through npm typing `npm start`.

### ./package.json
```diff
{
  "name": "reactboilerplate",
  "version": "1.0.0",
  "description": "Sample working with React,TypeScript and Webpack",
  "scripts": {
+   "start": "webpack-dev-server"
  },
  ...
}

```

- Let's install locally TypeScript (version 2.0 or newer):

 ```
 npm install typescript --save-dev
 ```

- We need as well to drop a **tsconfig.json** file in the root folder of our project

### ./tsconfig.json
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

 ```
 npm install babel-core babel-preset-env --save-dev
 ```

- And add config file:

### ./.babelrc
```javascript
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

- Let's install bootstrap (and jquery as Bootstrap's dependency):

 ```
 npm install bootstrap jquery --save
 ```

- Now, our **package.json** file should looks something like:

### ./package.json
 ```json
{
  "name": "reactboilerplate",
  "version": "1.0.0",
  "description": "Sample working with React,TypeScript and Webpack",
  "scripts": {
    "start": "webpack-dev-server",
    "build": "webpack"
  },
  "author": "Lemoncode",
  "license": "MIT",
  "dependencies": {
    "bootstrap": "^3.3.7",
    "jquery": "^3.2.1"
  },
  "devDependencies": {
    "awesome-typescript-loader": "^3.1.3",
    "babel-core": "^6.25.0",
    "babel-preset-env": "^1.5.2",
    "css-loader": "^0.28.4",
    "file-loader": "^0.11.2",
    "html-webpack-plugin": "^2.28.0",
    "style-loader": "^0.18.2",
    "typescript": "^2.3.4",
    "url-loader": "^0.5.9",
    "webpack": "^2.6.1",
    "webpack-dev-server": "^2.4.5"
  }
}

 ```

- Let's create a basic **src/index.ts** file:

### ./src/index.ts
 ```javascript
console.log('Hello from ts');

 ```

- Let's create a basic **index.html** file (under **src** folder):

### ./src/index.html
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

- Let's create a basic `site.css`file:

### ./src/css/site.css
```css
/* entry point css */

```

- Now it's time to create a basic **webpack.config.js** file, this configuration will
 include plumbing for:
 - Launching a web dev server.
 - Transpiling from TypeScript to JavaScript.
 - Setup Twitter Bootstrap (including fonts, etc...).
 - Generating the build under a **dist** folder.

### ./webpack.config.js
 ```javascript
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: ['.js', '.ts']
  },
  entry: {
    app: './index.ts',
    appStyles: './css/site.css',
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
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
      // Using here url-loader and file-loader
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
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
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      hash: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
  ],
};

 ```

- Run webpack with:

 ```
 npm start
 ```

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us. 
