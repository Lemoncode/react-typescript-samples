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

_./common/textFieldForm.tsx_

```tsx
import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography/Typography";

interface Props {
  name: string;
  label: string;
  onChange: any;
  value: string;
  error?: string;
  type?: string;
}

const defaultProps: Partial<Props> = {
  type: "text"
};

const onTextFieldChange = (
  fieldId: string,
  onChange: (fieldId, value) => void
) => e => {
  onChange(fieldId, e.target.value);
};

export const TextFieldForm: React.StatelessComponent<Props> = props => {
  const { name, label, onChange, value, error, type } = props;
  return (
    <>
      <TextField
        label={label}
        margin="normal"
        value={value}
        type={type}
        onChange={onTextFieldChange(name, onChange)}
      />
      <Typography variant="caption" color="error" gutterBottom>
        {props.error}
      </Typography>
    </>
  );
};
```

- Let's add it to the common index file.

_./src/common/index.ts_

```diff
export * from './notification';
+ export * from './textFieldForm';
```

- Now let's define a basic validation for the form, we want to ensure both fields are informed.

_./src/pages/loginPage.validation.ts_

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

_./src/pages/loginPage.tsx_

```diff
import { isValidLogin } from "../api/login";
import { NotificationComponent } from "../common";
```

_./src/pages/loginPage.tsx_

```diff
const LoginPageInner = (props: Props) => {
  const [loginInfo, setLoginInfo] = React.useState<LoginEntity>(
    createEmptyLogin()
  );
+ const [loginFormErrors, setLoginFormErrors] = React.useState<LoginFormErrors>(createDefaultLoginFormErrors());
  const [showLoginFailedMsg, setShowLoginFailedMsg] = React.useState(false);
```

- Let's fire the validation on viewmodel update.

_./src/pages/loginPage.tsx_

```diff
+ import { loginFormValidation } from "./loginPage.validation";
```

_./src/pages/loginPage.tsx_

```diff
const onUpdateLoginField = (name, value) => {
    setLoginInfo({
      ...loginInfo,
      [name]: value
    });

+    loginFormValidation.validateField(loginInfo, name, value)
+    .then((fieldValidationResult) => {

+        setLoginFormErrors({
+          ...loginFormErrors,
+          [name]: fieldValidationResult,
+        });
+   });
  };
```

- We need to pass down dataFormErrors

_./src/pages/loginPage.tsx_

```diff
          <LoginForm
            onLogin={onLogin}
            onUpdateField={onUpdateLoginField}
            loginInfo={loginInfo}
+       loginFormErrors={loginFormErrors}
          />
```

_./src/pages/loginPage.tsx_

```diff
interface PropsForm {
  onLogin: () => void;
  onUpdateField: (string, any) => void;
  loginInfo: LoginEntity;
+ loginFormErrors : LoginFormErrors;
}
```

- Let's replace the _TextFieldForm_ entries with the wrapper we have created (includes
  displaying validation errors).

_./src/pages/loginPage.tsx_

```diff
+ import { TextFieldForm } from '../common';
```

_./src/pages/loginPage.tsx_

```diff
const LoginForm = (props: PropsForm) => {
-  const { onLogin, onUpdateField, loginInfo } = props;
+  const { onLogin, onUpdateField, loginInfo, loginFormErrors } = props;
```

```diff
-      <TextField
+      <TextFieldForm
        label="Name"
+        name="login"
-        margin="normal"
        value={loginInfo.login}
-        onChange={onTexFieldChange("login")}
+        onChange={onUpdateField}
+        error={loginFormErrors.login.errorMessage}
      />
-      <TextField
+      <TextFieldForm
        label="Password"
+        name="password"
        type="password"
-        margin="normal"
        value={loginInfo.password}
-        onChange={onTexFieldChange("password")}
+        onChange={onUpdateField}
+        error={loginFormErrors.password.errorMessage}
      />
```

- Let's give a try

```
npm start
```

- And let's add an alert (Excercise and a notification) when the user clicks and the form all the fields are valid.

_./src/pages/loginPage.tsx_

```diff
const onLogin = () => {
+  loginFormValidation.validateForm(loginInfo)
+    .then((formValidationResult) => {
+        if(formValidationResult.succeeded) {
            if (isValidLogin(loginInfo)) {
              props.history.push("/pageB");
            } else {
              setShowLoginFailedMsg(true);
            }
+        } else {
+            alert('error, review the fields');
+          const updatedLoginFormErrors = {
+             ...loginFormErrors,
+             ...formValidationResult.fieldErrors,
+          }
+          setLoginFormErrors(updatedLoginFormErrors);
+       }


+    });
};
```

> Excercise, refactor this method following single abstraction level principle and single responsibility principle.

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
