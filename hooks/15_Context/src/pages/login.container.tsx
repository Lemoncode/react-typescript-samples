import * as React from "react";
import { useHistory } from "react-router-dom";
import { LoginEntity } from "../model/login";
import { isValidLogin } from "../api/login";
import { LoginComponent } from "./login.component";
import { NotificationComponent, SessionContext } from "../common";
import { light } from "@material-ui/core/styles/createPalette";

interface Props {}

export const LoginContainer: React.FC<Props> = (props) => {
  const loginContext = React.useContext(SessionContext);
  const history = useHistory();
  const [isShowAlert, setShowAlert] = React.useState(false);

  const loginSucceeded = (isValid: boolean, login: LoginEntity) => {
    if (isValid) {
      history.push("/pageB");
      loginContext.updateLogin(login.login);
    } else {
      setShowAlert(true);
    }
  };

  const handleLogin = (login: LoginEntity) => {
    isValidLogin(login).then((isValid) => loginSucceeded(isValid, login));
  };

  return (
    <>
      <LoginComponent onLogin={handleLogin} />
      <NotificationComponent
        show={isShowAlert}
        message="Invalid Form"
        onClose={() => setShowAlert(false)}
      />
    </>
  );
};
