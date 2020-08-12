import * as React from "react";
import { useHistory } from "react-router-dom";
import { LoginEntity } from "../model/login";
import { isValidLogin } from "../api/login";
import { LoginComponent } from "./login.component";
import { NotificationComponent } from "../common";

interface Props {}

export const LoginContainer: React.FC<Props> = (props) => {
  const history = useHistory();
  const [isShowAlert, setShowAlert] = React.useState(false);

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
      <LoginComponent onLogin={handleLogin} />
      <NotificationComponent
        show={isShowAlert}
        message="Invalid Form"
        onClose={() => setShowAlert(false)}
      />
    </>
  );
};
