import * as React from "react";
import { LoginEntity, createEmptyLogin } from "../model/login";
import { TextFieldComponent } from "../common";
import { Form } from "formik";
import createStyles from "@material-ui/styles/createStyles";
import makeStyles from "@material-ui/styles/makeStyles";
import Button from "@material-ui/core/Button";
import { loginFormValidation } from "./login.validation";
import { Formik } from "formik";

interface PropsForm {
  onLogin: (login: LoginEntity) => void;
}

// https://material-ui.com/styles/api/#makestyles-styles-options-hook
const useFormStyles = makeStyles((theme) =>
  createStyles({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    card: {
      maxWidth: 400,
      margin: "0 auto",
    },
  })
);

export const LoginComponent: React.FC<PropsForm> = (props) => {
  const classes = useFormStyles();
  const { onLogin } = props;

  return (
    <Formik
      onSubmit={onLogin}
      initialValues={createEmptyLogin()}
      validate={loginFormValidation.validateForm}
    >
      {() => (
        <Form>
          <div className={classes.formContainer}>
            <TextFieldComponent label="Name" name="login" />
            <TextFieldComponent
              label="Password"
              type="password"
              name="password"
            />
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
