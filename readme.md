# React Typescript by sample

The goal of this project is to provide a set of simple samples, providing and step by step guide to
start working with React and Typescript.

We have incorporated a set of examples based on hooks.

Right now you got two main folders:

- [Hooks](./hooks): set of samples migrated to hooks (right now 11 samples migrated), if you are new to
  React, or you are going to start working on a new project, I recommend you going through these
  examples.

- [Old_class_components_samples](./old_class_components_samples): The old samples, just in case you need to work with older react
  versions or you need to maintain legacy code.

You can check as well other repos (react / redux + typescript):

- [React By Sample](https://github.com/Lemoncode/react-by-sample)
- [Redux By Sample](https://github.com/Lemoncode/redux-by-sample)
- [From React to Redux](https://github.com/Lemoncode/from-react-to-redux-ts)
- [Redux Testing Typescript](https://github.com/Lemoncode/redux-testing-typescript)

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

### [00 Boiler plate](./hooks/00_BoilerPlate/readme.md)

Bundling + npm start based on webpack.

### [01 Hello React](./hooks/01_HelloReact/readme.md)

Display the text 'Hello React'.

Hello world, simples react render sample.

### [02 Properties](./hooks/02_Properties/readme.md)

Display the text 'Hello {name}' (where name is a prop
that contains a given name).

Introduce a basic React concept, handling properties.

### [03 State](./hooks/03_State/readme.md)

Starting from sample 02, Let's the user change the name to be displayed.

Introduce a basic React concept, handling State using hooks.

### [04 Callback](./hooks/04_Callback/readme.md)

Starting from sample 03, let the user change the name only
when he hits a _change_ button.

Using callbacks.

### [05 Refactor](./hooks/05_Refactor/readme.md)

Refactor sample 04, cleanup and discussion on where to place the state.

Refactor the job done.

### [06 Enable](./hooks/06_Enable/readme.md)

Starting from sample 05, enable / disable the _change_ button
when the text is empty or same name as original name,.

Enable/disable components.

### [07 ColorPicker](./hooks/07_Colorpicker/readme.md)

Simple color picker demo (show how properties work).

### [08 ColorPicker Refactor](./hooks/08_ColorPickerRefactor/readme.md)

ColorPicker refactor.

### [09 Sidebar](./hooks/10_Sidebar/readme.md)

Implementation of a single sidebar.

### [10 Table Mock](./hooks/11_TableMock/readme.md)

Render a table and use a child component to render each row, using mock data.

### [11 Table Axios](./hooks/12_TableAxios/readme.md)

Starting from sample 10, remove mock data, hit a real REST API (Github api), use
axios to perform the fetch call.

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
members of a given team.

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

Display a busy indicator when an ajax request is in progress.

To have a global count of promises gong on we are using [reat-promise-tracker](https://github.com/Lemoncode/react-promise-tracker) and to display a cool spinner [react-spinner](https://github.com/davidhu2000/react-spinners)

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

# Contributors

Special thanks to [Jehu Sagardoy](https://github.com/jsagardoy) for his contributions checking
and getting uptodate examples.

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
