import * as React from "react";
import { useHistory } from "react-router-dom";
import { LoginEntity } from "../model/login";
import { isValidLogin } from "../api/login";
import { LoginComponent } from "./login.component";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import createStyles from "@material-ui/styles/createStyles";
import makeStyles from "@material-ui/styles/makeStyles";
import { NotificationComponent } from "../common";

// https://material-ui.com/styles/api/#makestyles-styles-options-hook
const useFormStyles = makeStyles((theme) =>
  createStyles({
    card: {
      maxWidth: 400,
      margin: "0 auto",
    },
  })
);

interface Props {}

export const LoginContainer: React.FC<Props> = (props) => {
  const history = useHistory();
  const [isShowAlert, setShowAlert] = React.useState(false);
  const classes = useFormStyles();

  const loginSucceeded = (isValid: boolean) => {
    if (isValid) {
      history.push("/pageB");
    } else {
      setShowAlert(true);
    }
  };

  const handleLogin = (login: LoginEntity) => {
    isValidLogin(login).then(loginSucceeded);
  };

  return (
    <>
      <Card className={classes.card}>
        <CardHeader title="Login" />
        <CardContent>
          <LoginComponent onLogin={handleLogin} />
          <NotificationComponent
            show={isShowAlert}
            message="Invalid login or password, please type again"
            onClose={() => setShowAlert(false)}
          />
        </CardContent>
      </Card>
    </>
  );
};
