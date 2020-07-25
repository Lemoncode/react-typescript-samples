import * as React from "react";
import { useHistory } from "react-router-dom";
import makeStyles from "@material-ui/styles/makestyles";
import createStyles from "@material-ui/styles/createStyles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { LoginEntity, createEmptyLogin } from "../model/login";
import { isValidLogin } from "../api/login";
import { NotificationComponent } from "../common";
import {
  LoginFormErrors,
  createDefaultLoginFormErrors,
} from "./loginPage.viewmodel";
import { loginFormValidation } from "./loginPage.validation";
import { TextFieldForm, SessionContext } from "../common";

// https://material-ui.com/styles/api/#makestyles-styles-options-hook
const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      maxWidth: 400,
      margin: "0 auto",
    },
  })
);

const LoginPage: React.FC = (props) => {
  const loginContext = React.useContext(SessionContext);
  const history = useHistory();

  const [loginInfo, setLoginInfo] = React.useState<LoginEntity>(
    createEmptyLogin()
  );
  const [loginFormErrors, setLoginFormErrors] = React.useState<LoginFormErrors>(
    createDefaultLoginFormErrors()
  );
  const [showLoginFailedMsg, setShowLoginFailedMsg] = React.useState(false);
  const classes = useStyles();

  const onLogin = () => {
    loginFormValidation.validateForm(loginInfo).then((formValidationResult) => {
      if (formValidationResult.succeeded) {
        if (isValidLogin(loginInfo)) {
          history.push("/pageB");
          loginContext.updateLogin(loginInfo.login);
        } else {
          setShowLoginFailedMsg(true);
        }
      } else {
        alert("error, review the fields");
        const updatedLoginFormErrors = {
          ...loginFormErrors,
          ...formValidationResult.fieldErrors,
        };
        setLoginFormErrors(updatedLoginFormErrors);
      }
    });
  };

  const onUpdateLoginField = (name, value) => {
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });

    loginFormValidation
      .validateField(loginInfo, name, value)
      .then((fieldValidationResult) => {
        setLoginFormErrors({
          ...loginFormErrors,
          [name]: fieldValidationResult,
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

interface PropsForm {
  onLogin: () => void;
  onUpdateField: (string, any) => void;
  loginInfo: LoginEntity;
  loginFormErrors: LoginFormErrors;
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

const LoginForm: React.FC<PropsForm> = (props) => {
  const classes = useFormStyles();
  const { onLogin, onUpdateField, loginInfo, loginFormErrors } = props;

  // TODO: Enhacement move this outside the stateless component discuss why is a good idea
  const onTexFieldChange = (fieldId) => (e) => {
    onUpdateField(fieldId, e.target.value);
  };

  return (
    <div className={classes.formContainer}>
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
