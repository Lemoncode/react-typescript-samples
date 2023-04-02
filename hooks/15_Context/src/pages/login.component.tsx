import { Button, Divider, TextField } from "@mui/material";
// import { styled } from "@mui/system";
import * as React from "react";
// import { FormProps } from "react-router-dom";
import { createEmptyLogin, LoginEntity } from "../model/login";
import { loginFormValidation } from "./login.validation";
import { TextFieldComponent } from "../common";
import { Form, Formik } from "formik";

interface PropsForm {
    onLogin: (login: LoginEntity) => void;
}

// const useFormStyles = makeStyles(theme =>
//     createStyles({
//         formContainer: {
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center"
//         }
//     })
// );

export const LoginComponent = (props: PropsForm) => {
    const { onLogin } = props;

    const [loginInfo, setLoginInfo] = React.useState<LoginEntity>(
        createEmptyLogin()
    );

    const onTextFieldChange = (fieldId) => (e) => {
        console.log(e);
        setLoginInfo({
            ...loginInfo,
            [fieldId]: e.target.value
        })
    }

    return (
        <Formik
            onSubmit={onLogin}
            initialValues={createEmptyLogin()}
            validate={loginFormValidation.validateForm}
        >
            {() => (
                <Form>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}>
                        <TextFieldComponent
                            label="Name"
                            name="login"
                        />
                        <TextFieldComponent
                            label="Password"
                            name="password"
                        />
                        <Button variant="contained" color="primary" onClick={() => onLogin(loginInfo)}>Login</Button>
                    </div>
                </Form>
            )}
        </Formik>




        // <div style={{
        //     display: "flex",
        //     flexDirection: "column",
        //     justifyContent: "center"
        // }}>
        //     <TextField label="Name" margin="normal" value={loginInfo.login} onChange={onTextFieldChange("login")} />
        //     <TextField label="Password" type="password" margin="normal" value={loginInfo.password} onChange={onTextFieldChange("password")} />
        //     <Button variant="contained" color="primary" onClick={() => onLogin(loginInfo)}>Login</Button>
        // </div >
    )
}
