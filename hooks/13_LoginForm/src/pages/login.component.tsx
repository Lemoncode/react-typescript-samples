import { Button, TextField } from "@mui/material";
import * as React from "react";
import { FormProps } from "react-router-dom";
import { createEmptyLogin, LoginEntity } from "../model/login";

interface PropsForm {
    onLogin: (login: LoginEntity) => void;
}

export const LoginComponent = (props: PropsForm) => {
    const { onLogin } = props;

    const [loginInfo, setLoginInfo] = React.useState<LoginEntity>(
        createEmptyLogin()
    );

    return (<div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }}
    >
        <TextField label="Name" margin="normal" />
        <TextField label="Password" type="password" margin="normal" />
        <Button variant="contained" color="primary" onClick={() => onLogin(loginInfo)}>Login</Button>
    </div>)
}
