# React Typescript by sample

# New samples

We have created a new set of updated samples.

_Typescript_

React:

https://github.com/Lemoncode/react-by-sample

React + Redux:

https://github.com/Lemoncode/redux-by-sample

_ES6_

**Work in progress**

React:

https://github.com/Lemoncode/react-by-sample-es6

React + Redux:

https://github.com/Lemoncode/redux-by-sample-es6


# Old Project

The goal of this project is to provide a set of simple samples, providing and step by step guide to
start working with React and Typescript. Characteristics:

+ Bundling based on webpack.
+ React + Typescript based.
+ Simple navigation using react-router.
+ Managing async calls and updates.
+ Using Redux library.
+ Handling async calls via Redux-Thunk + Redux Saga.
+ Adding unit testing support.
+ Implementing Lazy Loading.

- Future enhancements:

 + Using Immutablejs.
 + Using React Hot Loader.

## Call for contributors:

Some months ago this project started as something internal... let's create some simple samples that cover react / redux / typescript scenarios that could serve as a guidance and reference in the future... now, we and other developers are using this repo as quick by sample guidance. We keep on adding more samples to it, but we have found that older samples need some updates / refactoring.

Are you interested in contributing into this project? If that's the case don't hesitate contacting us.: [call for contributors](https://github.com/Lemoncode/react-typescript-samples/issues/62).

## To get started:  
1. Install [NodeJS](http://www.nodejs.org)  
2. `npm install webpack -g` - Installs webpack
3. `npm install tsd -g` - Installs tsd
4. Download this repo
5. Open the command line of your choice and cd to the root directory of this repo on your machine  
6. `npm install` - Installs packages
7. `npm start` - Builds the project and launch a lite web server (webpack-devserver).
8. Navigate to [http://localhost:8080/](http://localhost:8080/) if your browser doesn't open automatically.

## IDE:
We have tested in:
 + [Atom](https://atom.io/).
 + [VS Code](https://code.visualstudio.com/).

# samples

## 00 Boiler plate

Bundling + npm start based on webpack.

## 01 Hello React

Hello world, simples react render sample.

## 02 Components

Creating a common header and about page react components.


## 03 Navigation

Creating a "members" page, adding navigation using react-router.


## 04 Display data

Create a read only list component (table >> tr >> td), reading list of members
from a fake api and dumping it into component state.

## 05 Presentational Components

Breaking the list component into two: list and row compomenent, member row
entity passed via props.

## 06 Handling asynchronous calls

Members fake api replaced with async call to api github to retrieve list of
members of a given team.

## 07 Forms + Validations

In this sample we will add a link in the members page that will navigate to a
"new member page". This new page will display a form where you have to enter
the avatar url, login and id of a new member (just supossing we can edit that info).

Validation performed so far:

* Login: required, must be a string (at least length 3).

TODO, add this validations:
* Id: required, must be a number.
* Avatar URL: optional, must be a valid url.

## 08 Edit member

Edit a given member, here we learn how to add params to a navigation link and
how to obtain them from a component.

## 09 Redux

Added Redux support, isolated state into Redux reducers, implement load, save,
basic validation cycle. This sample uses the fake api, in following samples
we will call async operations and fitting them into Redux architecture.


## 10 Redux Thunk - Handling Asyhcronous calls

Members fake api replaced with async call to api github to retrieve list of
members of a given team.

Similar to sample 06, but this time we implement this functionallity fitting it
in Redux, Redux-Thunk middleware.


## 11 Spinner

Display a busy indicator when an ajax request is in progress.

We have created here:

* A component that will take care of showing / displaying the busy indicator (spinner).
* A reducer that will take care of dispatching http requests in progress / completed.
* A http helper that will wrap the request to trigger the proper messages (new request, request completed...), just to
have a single entry point for this.

We have updated MemberAPI to use the http helper / wrapper.

## 12 Testing reducers

Testing libraries:

* [Webpack + Karma](https://github.com/webpack/karma-webpack)
* [Mocha](https://github.com/mochajs/mocha)
* [Chai](http://chaijs.com/)
* [Deep Freeze](https://github.com/substack/deep-freeze)

We added a Karma configuration on Webpack, that runs every '.spec' inside src folder and subfolders.
This configuration allows debugging with Typescript.

With Mocha we can describe our tests and it adds support for async tests.

Chai is for assertions.

With Deep free we ensures that initial states in reducers are immutable.

## 13 Testing actions

Testing libraries, previous libraries and:

* [Sinon](http://sinonjs.org/)

Sinon join Mocha allow us async action tests.

## 14 Testing components (Containers and Presentationals)

Testing libraries, previous libraries and:

* [Enzyme](https://github.com/airbnb/enzyme)

Enzyme provide an easy way to isolate, manipulate, traverse and assert React Components.

## 15 Replacing Redux Thunk with Redux Saga

Redux Saga it's an interesting alternative for redux-thunk, worth to take a look:

* [Redux Saga](https://github.com/yelouafi/redux-saga)

## 16 Lazy Loading and React-Router

Use webpack require.ensure to load routes on demand.

* [Lazy Loading Webpack / React Router](http://blog.mxstbr.com/2016/01/react-apps-with-pages/)

## 17 Add custom middlewares

Create two custom middlewares uiNotificationMiddleware and navigationMiddleware

## 18 Add support for ReactHotloader and ReduxDev Tools.

React Hot loader allows us to introduce changes in the application source code meanwhile we are running our web server and get the changes into our page without having to reload the browser and not losing the application state.

Redux dev tool is a chrome add-on that allows us to browse the state, replay actions, inject actions, export / import state...

* [React Hot Loader](https://github.com/gaearon/react-hot-loader)
* [Redux Dev Tool](https://github.com/gaearon/redux-devtools)

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us. 
