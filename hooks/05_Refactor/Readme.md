# 05 Refactor

In the previous example we set an initial username value. What happens if we expect this value to come from e.g. an AJAX request or if it could change in time? The current approach doesn't work.

# Steps

- Let's simulate an asynchronous call (we will use setTimeout).

_./src/app.tsx_

```diff
import * as React from "react";
import { HelloComponent } from "./hello";
import { NameEditComponent } from "./nameEdit";


export const App = () => {
  const [name, setName] = React.useState("defaultUserName");

+  const loadUsername = () => {
+    setTimeout(() => {
+      setName("name from async call");
+    }, 500);
+  };
+
+  React.useEffect(() => {
+    loadUsername();
+  },
+  []);

  const setUsernameState = (newName : string) => {
    setName(newName);
  };

  return (
    <>
      <HelloComponent userName={name} />
      <NameEditComponent initialUserName={name} onNameUpdated={setUsernameState} />
    </>
  );
};
```

If we run the application we can check that the label showing the name is being updated, but not
the name edit input, why this behavior? NameEdit only reads the parent prop when the state is initialized.
We need a wait to get prop value to refresh the child component when it changes, we are facing a state governance
issue, who's your daddy? Parent and child components have the right to update that entry.

We can think about two possible solutions:

- If we come from the traditional component mindset, we can try to make this fit into the React model we could: Store the very first _initialName_ check if the parent prop got an update on the _initialName_, then update the editing name.

- The second solutions (recommended one) need you to change a bit your mindset, if we have two components fighting
  for an state update, why not lifting it up? Parent component will hold the editing name, child component will
  request an update via callback, by following this approach:

  - The child components remains as pure presentational.
  - You have only one place where the updates is being done, and you have control over it, you could easily change behavior
    e.g. if the user has alreay started typing then name then ignore the ajax call.

We will stick with the second approach in the rest of examples, but we encourage you to go through both approaches as
a learning excercise.

## First approach

If we were using class based components, the first approach to try is to keep the _editingName_
information in the state in the child component, we can reset this state if the parent property changes, we need to make some changes:

- In one hand we need to hold in the state the original _initialName_.
- In the other hand in the render phase check if _initialName_ from props is different
  to _initialName_ from state then update it (more info about this approach: https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-getderivedstatefromprops).

Let's go for it:

_./src/nameEdit.tsx_

```diff
interface Props {
  initialUserName: string;
  onNameUpdated: (newName: string) => any;
}

export const NameEditComponent = (props: Props) => {
  const [editingName, setEditingName] = React.useState(props.initialUserName);
+ const [lastInitialName, setLastInitialName] = React.useState(props.initialUserName);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingName(e.target.value);
  };

  const onNameSubmit = (event: any): any => {
    props.onNameUpdated(editingName);
  };

+ if(props.initialUserName !== lastInitialName) {
+    setLastInitialName(props.initialUserName);
+    setEditingName(props.initialUserName);
+ }

  return (
    <>
      <label>Update name:</label>
      <input value={editingName} onChange={onChange} />
      <button onClick={onNameSubmit}>Change</button>
    </>
  );
};
```

## Second approach

---

- The first idea that could come into our mind is to implement a mix: we receive via props the current name value, then we hold an state with the current editingvalue... what drawbacks could we encounter? We have to listen on the getDerivedStateFromProps (componentWillRecieveProps has been deprecated) for any change on the parent user name control and replace our state. With this approach We end up with a mixed governance.

> More info about getDerivedStateFromProps: https://medium.com/@baphemot/whats-new-in-react-16-3-d2c9b7b6193b

With this solution, the code looks like this (using the new static method getDerivedStateFromProps):

Props and interface:

_./src/nameEdit.tsx_

```diff
interface Props {
  initialUserName: string;
  onNameUpdated: (newName: string) => any;
}

interface State {
+  initialUserName : string,
  editingName: string;
}
```

Constructor update:

```diff
  constructor(props: Props) {
    super(props);
    // Watch out what would happen if we get this user name via an AJAX callback
    // you will find a different implementation on 05 sample
-    this.state = { initialUserName: this.props.initialUserName ,
- editingName: this.props.initialUserName };

+    this.state = { initialUserName: this.props.initialUserName ,
+                   editingName: this.props.initialUserName
+     };
  }
```

Inside the class component

```javascript
  static getDerivedStateFromProps(nextProps : Props, prevState : State) : Partial<State> {
    if(nextProps.initialUserName &&
        nextProps.initialUserName != prevState.initialUserName) {
      return {editingName: nextProps.initialUserName}
    } else {
      return null;
    }
  }
```

- The second idea is to setup two properties, the parent control will hold _userName_ and _editingUsername\_\_. Whenever the user clicks the button to replace the name, it will notify the parent control and it will replace the content of \_userName_ with the content from _editingUsername_. If _userName_ gets updated by any other third party (e.g. AJAX callback) it will update as well _editingUsername_.

We take as a starting point sample _04 Callback_:

## Summary steps:

- Update _nameEdit.tsx_ in order to request the new _editingUsername_, and remove it from the state.
- Update _app.tsx_ to hold the new editing property in the state, pass it to the children, control and perform the proper update on the callback event from the child control.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) if they are not already installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content from _04 Callback_ and execute `npm install`.

- Update _nameEdit.tsx_ in order to request the new _editingUsername_, and remove it from the state.

_nameEdit.tsx_

```diff
import * as React from 'react';

interface Props {
-  initialUserName: string;
-  onNameUpdated: (newName: string) => any;
+  editingUserName : string;
+  onEditingNameUpdated : (newEditingName : string) => void;
+  onNameUpdateRequest : () => void;
}

-interface State {
-  editingName: string;
-}

-export class NameEditComponent extends React.Component<Props, State> {
+ export class NameEditComponent extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

-    this.state = {editingName: this.props.initialUserName}
  }

-  onChange = (event) => {
-    this.setState({editingName: event.target.value});
-  }

-  onNameSubmit = (event) => {
-    this.props.onNameUpdated(this.state.editingName);
-  }

+  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
+    this.props.onEditingNameUpdated((e.target as HTMLInputElement).value);
+  }


  public render() {
    return (
      <div>
          <label>Update Name:</label>
-          <input value={this.state.editingName}
-                 onChange={this.onChange}
-           />
-          <button className="btn btn-default"
-                  onClick={this.onNameSubmit}
-           >
-             Change
-           </button>
+          <input value={this.props.editingUserName}
+                 onChange={this.onChange}
+           />
+          <button className="btn btn-default"
+                  onClick={this.props.onNameUpdateRequest}
+           >
+             Change
+           </button>
      </div>
    )
  }
}
```

- Update _app.tsx_ to hold the new editing property in the state, pass it to the children controls and perform the proper update on the callback event from the child control.

_./src/app.tsx_

```diff
import * as React from 'react';
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit'

interface Props {

}

interface State {
  userName : string;
+ editingUserName : string;
}

export class App extends React.Component<Props, State> {
  constructor(props : Props) {
    super(props);

-    this.state = {userName: 'defaultUserName'};
+      const defaultUserName = 'defaultUserName';
+      this.state = {userName: defaultUserName, editingUserName: defaultUserName};
  }

-  setUsernameState = (newName: string) => {
+  setUsernameState = () => {
-    this.setState({userName: newName});
+    this.setState({userName: this.state.editingUserName});
  }

+ updateEditingName = (editingName : string) : void => {
+   this.setState({editingUserName: editingName});
+ }

  public render() {
    return (
      <>
        <HelloComponent userName={this.state.userName}/>
-        <NameEditComponent
-           initialUserName={this.state.userName}
-           onNameUpdated={this.setUsernameState}
-         />
+          <NameEditComponent
+            editingUserName={this.state.editingUserName}
+            onEditingNameUpdated={this.updateEditingName}
+            onNameUpdateRequest={this.setUsernameState}
+           />
      </>
    );
  }
}
```

Finally we can check the example is working as in _04 Callback_ by executing from the command line `npm start` and opening [http://localhost:8080](http://localhost:8080).
