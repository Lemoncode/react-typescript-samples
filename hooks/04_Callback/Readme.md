# 04 Callback + State

In this example we will refactor the previous **03 State** example.

We will update the name property only when the user clicks a _change_ button, and we will simplify the prop callback signature.

Obviously, we take the example **03 State** as a starting point.

## Summary steps:

- Add a button to the `EditName` component and a handler function for this.
- Submit the name only when the user clicks that button.
- Update the `app` component to handle the new simplified event.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.6.0 or higher) if they are not already installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content of the `03 State` folder to an empty folder for this example and make this your current folder.

- Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
```

- Now we will start by keeping the temporary name being edited in state and notify the parent about the new name just
  when the user clicks on the _Change_ button. Initially we will store this temporary value in the _nameEdit_ component
  later on we will check that in some scenarios this is not an ideal solution, we will rollback and refactor.

_./src/nameEdit.tsx_

```diff
import * as React from "react";

interface Props {
-  userName: string;
-  onChange: (e : React.ChangeEvent<HTMLInputElement>) => void;
+  initialUserName: string;
+  onNameUpdated: (newName: string) => any;
}

- export const NameEditComponent = (props: Props) => (
+ export const NameEditComponent = (props: Props) => {
+  const [editingName, setEditingName] = React.useState(props.initialUserName);
+
+  const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
+    setEditingName(e.target.value);
+  }
+
+ const onNameSubmit = (event: any): any => {
+   props.onNameUpdated(editingName);
+ }
+
+ return (
    <>
      <label>Update name:</label>
-      <input value={props.userName} onChange={props.onChange} />
+      <input value={editingName} onChange={onChange} />
+      <button onClick={onNameSubmit}>Change</button>
    </>
+ )
- );
+ }
```

- Let's wire this up in the `app.tsx` file.

_./src/app.tsx_

```diff
import * as React from "react";
import { HelloComponent } from "./hello";
import { NameEditComponent } from "./nameEdit";

export const App = () => {
  const [name, setName] = React.useState("defaultUserName");

-  const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
-    setName(event.target.value);
-  };
+  const setUsernameState = (newName : string) => {
+    setName(newName);
+  };

  return (
    <>
      <HelloComponent userName={name} />
-      <NameEditComponent userName={name} onChange={setUsernameState} />
+      <NameEditComponent initialUserName={name} onNameUpdated={setUsernameState} />
    </>
  );
};
```

Now we've got a clear event, strongly typed and simplified (as it is more straightforward).

- Let's give it a try:

  ```bash
  npm start
  ```

- Then, load http://localhost:8080/ in a browser to see the result.

Now, the greetings message only changes when the user clicks the change button.

> What happens if we simulate an AJAX call? Let's place in the app's componentWillMount a timeout and set the name value in the timeout's callback.

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend

