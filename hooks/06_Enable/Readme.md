# 06 Enable

Let's continue with the update name sample, this time we want to disable the
"update" button when the input is empty or when the value hasn't changed.

We will take as startup point sample _05 Refactor_

## Summary steps:

- Add a condition to disable the button when the editingName is empty.

- Think about how to disable the button when the editingName is not equal
  the final name.

## Steps to build it

- Copy the content from _05 Refactor_.

- Let's install the packages.

```bash
npm install
```

- Let's start by adding a condition to disable the field whenever is empty.

_./src/nameEdit.tsx_

```diff
  return (
    <>
      <label>Update name:</label>
      <input value={props.editingName} onChange={onChange} />
-      <button onClick={onNameSubmit}>Change</button>
+      <button onClick={onNameSubmit}
+         disabled={props.editingName === ''}
+      >Change</button>

    </>
  );
```

- That was nice, let's go one step further, now we want to disable the button when
  the editingName is empty and when the editing name is the same as the finalname, how
  could we do that? We can choose between two options here:

  - [Excercise] Add to the disabled option one more condition and cover the case where
    the editingName is equal to the initialName.

  - Create a generic disable property on the NameEditComponent and let the parent control
    decide in which cases it should be disabled (thanks to [Victor Borrego](https://github.com/v-borrego) to point out this great solution).

We will follow the second approach since is the one that can provide more flexibility to the
control (in a real project, choosing between one approach or the other depends on specification details).

We will expose a _disabled_ property in the _NameEdit_ component.

_./src/nameEdit.tsx_

```diff
interface Props {
  initialUserName: string;
  editingName: string;
  onNameUpdated: () => any;
  onEditingNameUpdated: (newEditingName: string) => any;
+ disabled : boolean;
}
```

_./src/nameEdit.tsx_

```diff
  <button
    onClick={onNameSubmit}
-    disabled={props.editingName === ''}
+    disabled={props.disabled}
  >Change</button>
```

- Now in the _app_ component we will define the condition to enable/disable the component.

```diff
      <NameEditComponent
        initialUserName={name}
        editingName={editingName}
        onNameUpdated={setUsernameState}
        onEditingNameUpdated={setEditingName}
+        disabled={editingName === '' || editingName === name}
      />
```

- Let's give a try

```
npm start
```

# Excercise

Ideas to further implement this, let's convert our NameEdit component to a password
strength component:

- Extract the disabled condition to function.
- Add one more validation, text should contain at least a number, one letter upper case,
  and one special character (.,@,\_).
- Display in a label the condition that is not passing.
- Display in a label all the conditions that are not passing.
- Create a password strenght indicator (you can do it just showing plain text
  in future samples we will teach you how to interact with CSS and you will
  be able to display a color bar indicating password strength).

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend

