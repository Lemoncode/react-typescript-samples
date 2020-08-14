# 14 Form Validation

Let's add validation support to this form.

For this we will use formik, fonk and fonk-formik library

Summary steps:

- Install formik, fonk, fonk-formik library.
- Refactor input component to a common component and include error validation info.
- Let's define the validation for the form.
- Let's hook it.

## Steps

- Copy the content from _13 LoginForm_ and execute `npm install`.

```bash
npm install
```

- Let's install the _formik, @lemoncode/fonk, @lemoncode/fonk-formik _.

```bash
npm install formik @lemoncode/fonk @lemoncode/fonk-formik --save
```

- To avoid having too much repeated code let's move to common an input component, including it's
  label plus validation text.

_./common/textField.component.tsx_

```tsx
import * as React from "react";
import { useField } from "formik";
import MuiTextField, { TextFieldProps } from "@material-ui/core/TextField";

export const TextFieldComponent: React.FC<TextFieldProps> = (props) => {
  const [field, meta] = useField(props.name);
  const textFieldProps = Boolean(field) ? field : props;
  const hasError = Boolean(meta && meta.touched && meta.error);

  return (
    <>
      <MuiTextField
        {...props}
        name={textFieldProps.name}
        onChange={textFieldProps.onChange}
        onBlur={textFieldProps.onBlur}
        value={textFieldProps.value}
        error={hasError}
        helperText={hasError ? meta.error : ""}
        fullWidth={true}
        margin="normal"
      />
    </>
  );
};
```

- Let's add it to the common index file.

_./src/common/index.ts_

```diff
export * from './notification';
+ export * from './TextFieldComponent';
```

- Now let's define a basic validation for the form, we want to ensure both fields are informed.

_./src/pages/login.validation.ts_

```typescript
import { ValidationSchema, Validators } from "@lemoncode/fonk";
import { createFormikValidation } from "@lemoncode/fonk-formik";

const validationSchema: ValidationSchema = {
  field: {
    login: [Validators.required],
    password: [Validators.required],
  },
};

export const loginFormValidation = createFormikValidation(validationSchema);
```

- Now let's go for the component side.

- First let's add the dataFormErrors to the state of the component.

_./src/pages/login.container.tsx_

```diff
import { isValidLogin } from "../api/login";
import { NotificationComponent } from "../common";
```


- Let's fire the validation on viewmodel update and replace the _TextFieldForm_ entries with the wrapper we have created (includes
  displaying validation errors).

_./src/pages/login.component.tsx_

```diff
+ import { loginFormValidation } from "./login.validation";
+ import { TextFieldComponent } from '../common';

+<Formik
+      onSubmit={onLogin}
+      initialValues={createEmptyLogin()}
+      validate={loginFormValidation.validateForm}
+    >
+      {() => (
+        <Form>
+          <div className={classes.formContainer}>
-             <TextField
+             <TextFieldComponent
               label="Name"
+               name="login"
-               margin="normal"
-               value={loginInfo.login}
-               onChange={onTexFieldChange("login")}
               />
-             <TextField
+             <TextFieldComponent
               label="Password"
+               name="password"
               type="password"
-               margin="normal"
-               value={loginInfo.password}
-               onChange={onTexFieldChange("password")}
+          />
+      </div>
+    </Form>
+  )}
+</Formik>
```

- Let's give a try

```bash
npm start
```

- And let's add an alert (Excercise and a notification) when the user clicks and the form all the fields are valid.

> Excercise, refactor this method following single abstraction level principle and single responsibility principle.

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
