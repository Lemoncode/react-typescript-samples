import * as React from "react";
import { useHistory } from "react-router-dom";
import makeStyles from "@material-ui/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { LoginEntity, createEmptyLogin } from "../model/login";
import { isValidLogin } from "../api/login";
import { loginFormValidation } from "./loginPage.validation";
import { Formik } from "formik";
import { LoginForm } from "./loginFormComponent";

// https://material-ui.com/styles/api/#makestyles-styles-options-hook
const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      maxWidth: 400,
      margin: "0 auto",
    },
  })
);

interface Props {}

export const LoginPage: React.FC<Props> = (props) => {
  const [loginInfo, setLoginInfo] = React.useState<LoginEntity>(
    createEmptyLogin()
  );
  const classes = useStyles();
  const history = useHistory();

  const onLogin = () => {
    if (isValidLogin(loginInfo)) {
      history.push("/pageB");
    }
  };

  const onUpdateLoginField = (name, value) => {
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  return (
    <>
      <Card className={classes.card}>
        <CardHeader title="Login" />
        <CardContent>
          <Formik
            onSubmit={onLogin}
            initialValues={createEmptyLogin()}
            validate={loginFormValidation.validateForm}
          >
            {() => (
              <LoginForm
                onLogin={onLogin}
                onUpdateField={onUpdateLoginField}
                loginInfo={loginInfo}
              />
            )}
          </Formik>
        </CardContent>
      </Card>
    </>
  );
};
