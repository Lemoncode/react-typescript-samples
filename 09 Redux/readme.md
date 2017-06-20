# 09 Redux

In this sample we will add Redux, isolated state into Redux reducers, implement load, save, basic validation cycle. This sample uses the fake api, in following samples we will call async operations and fitting them into Redux architecture.

We will take a startup point sample _08 ParamNavigation_.

Summary steps:

- Update `About` component content.
- Install `redux`,`react-redux` and `redux-thunk`.
- Move to `actions`.
- Move to `reducers`.
- Configure `store`.
- Update `components`.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.6.0) if they are not already
installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v`
in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content of the `08 ParamNavigation` folder to an empty folder for the sample.

- Install the npm packages described in the `package.json` and verify that it works:

 ```bash
 $ npm install
 ```

- We update`About` content to show sample `09 Redux` highlights. You can see updates in `./src/components/about.tsx`.

- Install `redux` (it has its own typings), `react-redux` and typings, `redux-thunk` (it has its own typings):

 ```bash
 npm install redux react-redux redux-thunk --save
 npm install @types/react-redux --save-dev
 ```

- Update `webpack.config.js` vendors:

### ./webpack.config.js
```diff
  ...
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'toastr',
      'lc-form-validation',
+     'redux',
+     'react-redux',
+     'redux-thunk',
    ],
  ...
```



- Execute the example:

 ```bash
 $ npm start
 ```

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us. 
