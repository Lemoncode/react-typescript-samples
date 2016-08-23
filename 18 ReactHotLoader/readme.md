# React Hot Loader + Redux dev tool support

React Hot loader allows us to introduce changes in the application
source code meanwhile we are running our web server and get the changes into our page without having to reload the browser and not loosing the application
state.

Redux dev tool is a chrome add-on that allows us to browse the state, replay actions, inject actions, export / import state...

# Steps to configure hot Loader

You don't need to update the source code of the app, all we have to do is install a list of npm packages, add some babel configuration, and then set a web server + updates on the webpack.config.

Packages to install (dev dependencies):

 - babel-core
 - babel-loader
 - babel-preset-es2015
 - babel-preset-react
 - babel-preset-stage-0
 - react-hot-loader
 - webpack-hot-middleware

```
npm install babel-core babel-loader
babel-preset-es2015 babel-preset-react
babel-preset-stage-0
react-hot-loader
webpack-hot-middleware --save-dev
```

.babelrc file content to be added:

```json
{
  "presets": ["es2015", "stage-0", "react"]
}
```

webpack config updates:

```javascript
//(...)
module.exports = {

  // TODO: remove hot loading entry points in production
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.tsx',
    './css/site.css',
    '../node_modules/toastr/build/toastr.css',
    '../node_modules/bootstrap/dist/css/bootstrap.css'
  ],

  // (...)

  module: {
		loaders: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel','ts-loader']
      },
      // (..)
	},

  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    // (...)
  ]
}
```

We ned to add a new devServer.js file (we could try to setup a call to webpack-dev-server directly).

```javascript
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
	noInfo: true,
  historyApiFallback: true
}).listen(8080, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:8080/');
});
````

Then update the "start" script on the package.json file:

```json
"scripts": {
  // (...)
  "start": "node devserver.js",
  //(...)
},
```

# Steps to configure Redux dev tool

First we have to download the app from the chrome store.

Then we have to add a line of code to the create store to check
wether is enabled the dev tool (app.tsx).

````javascript
let store = createStore(
  reducers,
   compose(
     applyMiddleware(ReduxThunk)
     ,nonTypedWindow.devToolsExtension ? nonTypedWindow.devToolsExtension() : f => f
   )
);
````
