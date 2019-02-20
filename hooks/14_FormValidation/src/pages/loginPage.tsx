import * as React from "react";
import { Link } from "react-router-dom";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FormHelperText } from "@material-ui/core";
import { LoginEntity, createEmptyLogin } from "../model/login";
import { isValidLogin } from "../api/login";
import { NotificationComponent } from "../common";
import {
  LoginFormErrors,
  createDefaultLoginFormErrors
} from "./loginPage.viewmodel";
import { loginFormValidation } from "./loginPage.validation";
import { TextFieldForm } from "../common";

// https://material-ui.com/guides/typescript/
const styles = theme =>
  createStyles({
    card: {
      maxWidth: 400,
      margin: "0 auto"
    }
  });

interface Props extends RouteComponentProps, WithStyles<typeof styles> {}

const LoginPageInner = (props: Props) => {
  const [loginInfo, setLoginInfo] = React.useState<LoginEntity>(
    createEmptyLogin()
  );
  const [loginFormErrors, setLoginFormErrors] = React.useState<LoginFormErrors>(
    createDefaultLoginFormErrors()
  );
  const [showLoginFailedMsg, setShowLoginFailedMsg] = React.useState(false);
  const { classes } = props;

  const onLogin = () => {
    if (isValidLogin(loginInfo)) {
      props.history.push("/pageB");
    } else {
      setShowLoginFailedMsg(true);
    }
  };

  const onUpdateLoginField = (name, value) => {
    setLoginInfo({
      ...loginInfo,
      [name]: value
    });

    loginFormValidation
      .validateField(loginInfo, name, value)
      .then(fieldValidationResult => {
        setLoginFormErrors({
          ...loginFormErrors,
          [name]: fieldValidationResult
        });
      });
  };

  return (
    <>
      <Card className={classes.card}>
        <CardHeader title="Login" />
        <CardContent>
          <LoginForm
            onLogin={onLogin}
            onUpdateField={onUpdateLoginField}
            loginInfo={loginInfo}
            loginFormErrors={loginFormErrors}
          />
        </CardContent>
      </Card>
      <NotificationComponent
        message="Invalid login or password, please type again"
        show={showLoginFailedMsg}
        onClose={() => setShowLoginFailedMsg(false)}
      />
    </>
  );
};

export const LoginPage = withStyles(styles)(withRouter<Props>(LoginPageInner));

interface PropsForm {
  onLogin: () => void;
  onUpdateField: (string, any) => void;
  loginInfo: LoginEntity;
  loginFormErrors: LoginFormErrors;
}

const LoginForm = (props: PropsForm) => {
  const { onLogin, onUpdateField, loginInfo, loginFormErrors } = props;

  // TODO: Enhacement move this outside the stateless component discuss why is a good idea
  const onTexFieldChange = fieldId => e => {
    onUpdateField(fieldId, e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <TextFieldForm
        label="Name"
        name="login"
        value={loginInfo.login}
        onChange={onUpdateField}
        error={loginFormErrors.login.errorMessage}
      />
      <TextFieldForm
        label="Password"
        type="password"
        name="password"
        value={loginInfo.password}
        onChange={onUpdateField}
        error={loginFormErrors.password.errorMessage}
      />
      <Button variant="contained" color="primary" onClick={onLogin}>
        Login
      </Button>
    </div>
  );
};
