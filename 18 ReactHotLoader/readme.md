# React Hot Loader + Redux dev tool support

React Hot loader allows us to introduce changes in the application
source code meanwhile we are running our web server and get the changes into our page without having to reload the browser and not loosing the application
state.

Redux dev tool is a chrome add-on that allows us to browse the state, replay actions, inject actions, export / import state...

# Steps to configure hot Loader

You don't need to update the source code of the app, all we have to do is install a list of npm packages, add some babel configuration, and then set a web server + updates on the webpack.config.

Packages to install (dev dependencies):

 - react-hot-loader 

```
npm install react-hot-loader --save-dev
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

  devServer: {
      contentBase: './dist', //Content base
      inline: true, //Enable watch and live reload
      host: 'localhost',
      port: 8080,
      noInfo: true,
      hot: true,
      historyApiFallback: true
  },


  // (...)

  module: {
		loaders: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'ts']
      },
      // (..)
	},

  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // (...)
  ]
}
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
