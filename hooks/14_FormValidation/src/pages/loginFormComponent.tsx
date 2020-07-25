import * as React from "react";
import { LoginEntity } from "../model/login";
import { TextFieldForm } from "../common";
import { Form } from "formik";
import createStyles from "@material-ui/styles/createStyles";
import makeStyles from "@material-ui/styles/makeStyles";
import Button from "@material-ui/core/Button";

interface PropsForm {
  onLogin: () => void;
  onUpdateField: (string, any) => void;
  loginInfo: LoginEntity;
}

// https://material-ui.com/styles/api/#makestyles-styles-options-hook
const useFormStyles = makeStyles((theme) =>
  createStyles({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  })
);

export const LoginForm: React.FC<PropsForm> = (props) => {
  const classes = useFormStyles();
  const { onLogin, onUpdateField, loginInfo } = props;

  // TODO: Enhacement move this outside the stateless component discuss why is a good idea
  const onTexFieldChange = (fieldID) => (e) => {
    onUpdateField(fieldID, e.target.value);
  };

  return (
    <Form>
      <div className={classes.formContainer}>
        <TextFieldForm
          label="Name"
          name="login"
          value={loginInfo.login}
          onChange={onTexFieldChange("login")}
        />
        <TextFieldForm
          label="Password"
          type="password"
          name="password"
          value={loginInfo.password}
          onChange={onTexFieldChange("password")}
        />
        <Button variant="contained" color="primary" onClick={onLogin}>
          Login
        </Button>
      </div>
    </Form>
  );
};
