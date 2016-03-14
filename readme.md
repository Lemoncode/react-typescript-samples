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
