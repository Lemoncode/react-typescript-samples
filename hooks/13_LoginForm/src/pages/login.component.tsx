import { Button, TextField } from "@mui/material";
import * as React from "react";
import { FormProps } from "react-router-dom";

export const LoginComponent: React.FC<FormProps> = (props) => {
    return (<div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }}
    >
        <TextField label="Name" margin="normal" />
        <TextField label="Password" type="password" margin="normal" />
        <Button variant="contained" color="primary">Login</Button>
    </div>)
}
