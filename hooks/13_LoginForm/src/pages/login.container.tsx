import { Card, CardContent, CardHeader, createStyles, makeStyles } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { LoginComponent } from "./login.component";
import { LoginEntity, createEmptyLogin } from "../model/login";
import { isValidLogin } from "../api/login";
import { NotificationComponent } from "../common";

interface Props { }

export const LoginContainer: React.FC<Props> = (props) => {
    const [loginInfo, setLoginInfo] = React.useState<LoginEntity>(
        createEmptyLogin()
    )
    const [isShowAlert, setShowAlert] = React.useState(false);

    const navigate = useNavigate();

    const loginSucceeded = (isValid: boolean) => {
        console.log(isValid)
        if (isValid) {
            navigate('/pageB')
        } else {
            setShowAlert(true)
        }
    }

    const handleLogin = (login: LoginEntity) => {
        isValidLogin(login).then(loginSucceeded);
    };


    return (
        <>
            <Card>
                <CardHeader title='login' />
                <CardContent>
                    <LoginComponent onLogin={handleLogin} />
                </CardContent>
            </Card>
            <NotificationComponent
                message="Invalid login or password, please type again"
                show={isShowAlert}
                onClose={() => setShowAlert(false)} />
        </>
    );
};

