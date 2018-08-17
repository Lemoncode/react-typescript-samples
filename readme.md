# React Typescript by sample

Due to the popularity of this repo [Jehu Sagardoy](https://github.com/jsagardoy) is getting them up to date, right now migrated from 00 to 12.

You can check as well other repos (react / redux + typescript):
 - [React By Sample](https://github.com/Lemoncode/react-by-sample)
 - [Redux By Sample](https://github.com/Lemoncode/redux-by-sample)
 - [From React to Redux](https://github.com/Lemoncode/from-react-to-redux-ts)
 - [Redux Testing Typescript](https://github.com/Lemoncode/redux-testing-typescript)

# Samples

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
+ ...

## To get started:  
1. Install [NodeJS](http://www.nodejs.org)  
2. Download this repo
5. Open the command line of your choice and cd to the root directory of this repo on your machine  
6. `npm install` - Installs packages
7. `npm start` - Builds the project and launch a lite web server (webpack-dev-server).
8. Navigate to [http://localhost:8080/](http://localhost:8080/) if your browser doesn't open automatically.

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

## 07 Forms

In this sample we will add a link in the members page that will navigate to a
"new member page". This new page will display a form where you have to enter
the avatar url, login and id of a new member (just supossing we can edit that info).

## 08 ParamNavigation  + Validations

Edit a given member, here we learn how to add params to a navigation link and
how to obtain them from a component.

Validation performed so far:

* Login: required, must be a string (at least length 3).

## 09 Redux

Added Redux support, isolated state into Redux reducers, implement load, save,
basic validation cycle. This sample uses the fake api, in following samples
we will call async operations and fitting them into Redux architecture.

## 10 SpinnerAsync

Display a busy indicator when an ajax request is in progress.

To have a global count of promises gong on we are using [reat-promise-tracker](https://github.com/Lemoncode/react-promise-tracker) and to display a cool spinner [react-spinner](https://github.com/davidhu2000/react-spinners)

## 11 Testing reducers

Sample updated using Jest.


## 12 Testing actions

Sample updated using Jest.


## 13 Testing components (Containers and Presentationals)

Pending update Jest + Enzyme

## 14 Replacing Redux Thunk with Redux Saga

Pending update

## 15 Lazy Loading and React-Router

Pending update

## 16 Add custom middlewares

Pending update

## 17 Add support for ReactHotloader and ReduxDev Tools.

Pending update

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us. 

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
