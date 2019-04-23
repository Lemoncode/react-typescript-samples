# 05 Refactor

In the previous example we set an initial username value. What happens if we expect this value to come from e.g. an AJAX request or if it could change in time? The current approach doesn't work.

# Steps

- We will start from sample 04, let's copy the content and install the packages.

```bash
npm start
```

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
    e.g. if the user has already started typing the name then ignore the ajax call.

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

The first approach was fine if we come from a Java / C# mindset, but it has it drawbacks
what would happen if we want the editingName to be preserved if it has changed (async call
would have no effect then)? When there is a conflict updating the state between parent and child
a valid solution is to lift up that part of the state to the parent component, if we follow
this approach we can end up having the core state isolated in container components (prior step
to build redux on top of it).

Let's see how can we lift up this state:

_./src/app.tsx_

```diff
export const App = () => {
  const [name, setName] = React.useState("defaultUserName");
+ const [editingName, setEditingName] = React.useState("defaultUserName");

  const loadUsername = () => {
    setTimeout(() => {
      setName("name from async call");
+     setEditingName("name from async call");
    }, 500);
  };

  React.useEffect(() => {
    loadUsername();
  },
  []);

-  const setUsernameState = (newName: string) => {
+  const setUsernameState = () => {
-    setName(newName);
+    setName(editingName);
  };

  return (
    <>
      <HelloComponent userName={name} />
      <NameEditComponent
        initialUserName={name}
+       editingName={editingName}
        onNameUpdated={setUsernameState}
+       onEditingNameUpdated={setEditingName}
      />
    </>
  );
};
```

- Now let's jump into _NameEditComponent_ and update the contract and
  implementation:

```diff
interface Props {
  initialUserName: string;
+   editingName: string;
-  onNameUpdated: (newName: string) => any;
+  onNameUpdated: () => any;
+   onEditingNameUpdated: (newEditingName: string) => any;
}
```

```diff
export const NameEditComponent = (props: Props) => {
-  const [editingName, setEditingName] = React.useState(props.initialUserName);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
-    setEditingName(e.target.value);
+    props.onEditingNameUpdated(e.target.value);
  };

  const onNameSubmit = (event: any): any => {
-    props.onNameUpdated(editingName);
+   props.onNameUpdated();
  };

- if(props.initialUserName !== lastInitialName) {
-    setLastInitialName(props.initialUserName);
-    setEditingName(props.initialUserName);
- }


  return (
    <>
      <label>Update name:</label>
-      <input value={editingName} onChange={onChange} />
+      <input value={props.editingName} onChange={onChange} />
      <button onClick={onNameSubmit}>Change</button>
    </>
  );
};
```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
