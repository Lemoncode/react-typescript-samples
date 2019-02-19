# 13 Login Form

Let's add validation support to this form.

For this we will use lc-form-validation library

Summary steps:

- Install lc-form-validation library.
- Refactor input component to a common component and include error validation info.
- Let's define the validation for the form.
- Let's hook it.

## Steps

- Copy the content from _13 LoginForm_ and execute `npm install`.

```bash
npm install
```

- Let's install the _lc-form-validation-library_.

```bash
npm install lc-form-validation
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
import {
  createFormValidation,
  ValidationConstraints,
  Validators
} from "lc-form-validation";

const loginFormValidationConstraints: ValidationConstraints = {
  fields: {
    login: [{ validator: Validators.required }],
    password: [{ validator: Validators.required }]
  }
};

export const loginFormValidation = createFormValidation(
  loginFormValidationConstraints
);
```

- Let's create now a class to hold the dataFormErrors.

_./src/login/loginPage.viewmodel.ts_

```typescript
import { FieldValidationResult } from "lc-form-validation";

export interface LoginFormErrors {
  login: FieldValidationResult;
  password: FieldValidationResult;
}

export const createDefaultLoginFormErrors = (): LoginFormErrors => ({
  login: new FieldValidationResult(),
  password: new FieldValidationResult()
});
```

- Now let's go for the component side.

- First let's add the dataFormErrors to the state of the component.

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
