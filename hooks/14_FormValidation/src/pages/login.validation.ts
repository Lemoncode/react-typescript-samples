import {
  createFormValidation,
  ValidationSchema,
  Validators,
} from "@lemoncode/fonk";

const validationSchema: ValidationSchema = {
  field: {
    login: [Validators.required],
    password: [Validators.required],
  },
};

export const loginFormValidation = createFormValidation(validationSchema);
