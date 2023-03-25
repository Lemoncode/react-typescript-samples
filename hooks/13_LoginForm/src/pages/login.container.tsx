import { Card, CardContent, CardHeader } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { LoginComponent } from "./login.component";
import { LoginEntity, createEmptyLogin } from "../model/login";
import { isValidLogin } from "../api/login";


interface Props { }

export const LoginContainer: React.FC<Props> = (props) => {
    const [loginInfo, setLoginInfo] = React.useState<LoginEntity>(
        createEmptyLogin()
    )

    const navigate = useNavigate();

    const loginSucceeded = (isValid: boolean) => {
        console.log(isValid)
        if (isValid) {
            navigate('/pageB')
        }
    }

    const handleLogin = (login: LoginEntity) => {
        isValidLogin(login).then(loginSucceeded);
    };


    return (
        <Card>
            <CardHeader title='login' />
            <CardContent>
                <LoginComponent onLogin={handleLogin} />
            </CardContent>
        </Card>
    );
};

