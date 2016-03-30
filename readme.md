# React Typescript by sample

The goal of this project is to provide a set of simple samples, providing and step by step guide to
start working with React and Typescript. Characteristics:

+ Bundling based on webpack.
+ React + Typescript based.
+ Simple navigation using react-router.
+ Managing async calls and updates.

- Future enhancements:

 + Form validation.
 + More advanced navigation scenarios.
 + Redux samples.

Contributors and reviewers are more than welcome.

##To get started:  
1. Install [NodeJS](http://www.nodejs.org)  
2. `npm install webpack -g` - Installs webpack
3. `npm install tsd -g` - Installs tsd
4. Download this repo
5. Open the command line of your choice and cd to the root directory of this repo on your machine  
6. `npm install` - Installs packages
7. `npm start` - Builds the project and launch a lite web server (webpack-devserver).
8. Navigate to [http://localhost:8080/](http://localhost:8080/) if your browser doesn't open automatically.

##IDE:
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
