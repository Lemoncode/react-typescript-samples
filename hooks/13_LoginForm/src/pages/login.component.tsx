import { Button, TextField } from "@mui/material";
import * as React from "react";
import { FormProps } from "react-router-dom";

interface PropsForm {
    onLogin: () => void;
}

export const LoginComponent = (props: PropsForm) => {
    const { onLogin } = props;

    return (<div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }}
    >
        <TextField label="Name" margin="normal" />
        <TextField label="Password" type="password" margin="normal" />
        <Button variant="contained" color="primary" onClick={onLogin}>Login</Button>
    </div>)
}
