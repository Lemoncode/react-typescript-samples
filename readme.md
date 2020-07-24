# React Typescript by sample

[🇪🇸 Versión Español](./readme_es.md)

The goal of this project is to provide a set of simple samples, providing and step by step guide to
start working with React and TypeScript.

We have incorporated a set of examples based on hooks.

Right now you got two main folders:

- [Hooks](./hooks): set of samples migrated to hooks (right now 15 samples migrated), if you are new to
  React, or you are going to start working on a new project, We recommend you going through these
  examples.

- [Old_class_components_samples](./old_class_components_samples): The old samples, just in case you need to work with older react
  versions or you need to maintain legacy code.

If you want to make a deeper dive on React Hooks you can check this repo [React Hooks By Example](https://github.com/Lemoncode/react-hooks-by-example)

Other guided repos available (react / redux + typescript):

- [Redux By Sample](https://github.com/Lemoncode/redux-by-sample)
- [From React to Redux](https://github.com/Lemoncode/from-react-to-redux-ts)
- [Redux Sagas](https://github.com/Lemoncode/redux-sagas-typescript-by-example)

# Examples

The goal of this project is to provide a set of simple samples, providing and step by step guide to
start working with React and Typescript. Characteristics:

- Bundling based on webpack.
- React + Typescript based.
- Simple navigation using react-router.
- Managing async calls and updates.
- Using Redux library (not available yet on hooks version, coming soon).
- Handling async calls via Redux-Thunk + Redux Saga (not available yet on hooks version, coming soon)
- Adding unit testing support (not available yet on hooks version, coming soon).
- Implementing Lazy Loading (not available yet on hooks version, coming soon).
- ...

## To get started:

1. Install [NodeJS](http://www.nodejs.org)
2. Download this repo
3. Open the command line of your choice and cd to a sample directory within this repo on your machine
4. `npm install` - Installs packages
5. `npm start` - Builds the project and launch a lite web server (webpack-dev-server).
6. Navigate to [http://localhost:8080/](http://localhost:8080/) if your browser doesn't open automatically.

# samples

## Hooks

### [00 Boiler plate](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/00_BoilerPlate)

Bundling + npm start based on webpack.

### [01 Hello React](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/01_HelloReact)

Display the text 'Hello React'.

Hello world, simples react render sample.

### [02 Properties](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/02_Properties)

Display the text 'Hello {name}' (where name is a prop
that contains a given name).

Introduce a basic React concept, handling properties.

### [03 State](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/03_State)

Starting from sample 02, let's the user change the name to be displayed.

Introduce a basic React concept, handling State using hooks.

### [04 Callback](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/04_Callback)

Starting from sample 03, let the user change the name only
when he hits a _change_ button.

Using callbacks.

### [05 Refactor](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/05_Refactor)

Refactor sample 04, cleanup and discussion on where to place the state.

Refactor the job done.

### [06 Enable](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/06_Enable)

Starting from sample 05, enable / disable the _change_ button
when the text is empty or same name as original name,.

Enable/disable components.

### [07 ColorPicker](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/07_ColorPicker)

Simple color picker demo (show how properties work).

### [08 ColorPicker Refactor](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/08_ColorPickerRefactor)

ColorPicker refactor.

### [09 Sidebar](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/09_Sidebar)

Implementation of a single sidebar.

### [10 Table Mock](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/10_TableMock)

Render a table and use a child component to render each row, using mock data.

### [11 Table Axios](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/11_TableAxios)

Starting from sample 10, remove mock data, hit a real REST API (Github api), use
axios to perform the fetch call.

### [12 React Router](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/12_ReactRouter)

Starting from sample 03,start using React-Router (SPA navigation).

### [13 Login Form](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/13_LoginForm)

Starting from sample 12, implement a basic login page, that will redirect the user to another page  whenever the login has completed successfully.

### [14 Form Validation](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/14_FormValidation)

Starting from sample 13, add validation support to login form.

### [15 Context](https://github.com/Lemoncode/react-typescript-samples/tree/master/hooks/15_Context)

Starting from sample 14, learn how React 16 context api works.

## Old Class folder

### 00 Boiler plate

Bundling + npm start based on webpack.

### 01 Hello React

Hello world, simples react render sample.

### 02 Components

Creating a common header and about page react components.

### 03 Navigation

Creating a "members" page, adding navigation using react-router.

### 04 Display data

Create a read only list component (table >> tr >> td), reading list of members
from a fake api and dumping it into component state.

### 05 Presentational Components

Breaking the list component into two: list and row compomenent, member row
entity passed via props.

### 06 Handling asynchronous calls

Members fake api replaced with async call to api github to retrieve list of
members of a given organization.

### 07 Forms

In this sample we will add a link in the members page that will navigate to a
"new member page". This new page will display a form where you have to enter
the avatar url, login and id of a new member (just supossing we can edit that info).

### 08 ParamNavigation + Validations

Edit a given member, here we learn how to add params to a navigation link and
how to obtain them from a component.

Validation performed so far:

- Login: required, must be a string (at least length 3).

### 09 Redux

Added Redux support, isolated state into Redux reducers, implement load, save,
basic validation cycle. This sample uses the fake api, in following samples
we will call async operations and fitting them into Redux architecture.

### 10 SpinnerAsync

Display a busy indicator while an ajax request is in progress.

To have a global count of promises gong on we are using
[react-promise-tracker](https://github.com/Lemoncode/react-promise-tracker)
and to display a cool spinner [react-spinner](https://github.com/davidhu2000/react-spinners)

### 11 Testing reducers

Sample updated using Jest.

### 12 Testing actions

Sample updated using Jest.

### 13 Testing components (Containers and Presentationals)

Pending update Jest + Enzyme

### 14 Replacing Redux Thunk with Redux Saga

Pending update

### 15 Lazy Loading and React-Router

Pending update

### 16 Add custom middlewares

Pending update

### 17 Add support for ReactHotloader and ReduxDev Tools.

Pending update

### 18 Hooks

Replace class components by stateless components using Hooks.

### 19 LoginForm

Add a login page using Material-UI.

# Contributors

Thank you very much to the contributors for keeping the project updated in all the examples.

- [Jehu Sagardoy](https://github.com/jsagardoy)
- [Luis del Amo](https://github.com/delamux)

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree,
more info: [http://lemoncode.net/master-frontend](http://lemoncode.net/master-frontend)
