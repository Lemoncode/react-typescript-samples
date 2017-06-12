# 02 Components

In this sample we will create a common header and about page react components.

We will take a startup point sample _01 HelloReact_.

Summary steps:

- Remove `hello.tsx` component.
- Update `index.html`.
- Create `components`.
- Create a simple react component.
- Wire up this component by using react-dom.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.6.0) if they are not already
installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v`
in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content of the `01 HelloReact` folder to an empty folder for the sample.

- Install the npm packages described in the `package.json` and verify that it works:

 ```bash
 $ npm install
 ```

- Remove `./src/hello.tsx` file:

- Update `index.html`:

### ./src/index.html
```diff
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
</head>
<body>
+ <div id="root"></div>
- <div class="well">
-   <h1>Sample app</h1>
-   <div id="root"></div>
- </div>
</body>
</html>

```

- Execute the example:

 ```bash
 $ npm start
 ```

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us. 
