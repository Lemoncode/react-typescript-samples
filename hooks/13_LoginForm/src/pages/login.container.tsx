import { Button, Card, CardContent, CardHeader, createStyles, makeStyles, TextField } from "@mui/material";
import * as React from "react";
import { RouterProps, useNavigate } from "react-router-dom";
import { LoginComponent } from "./login.component";

// const useStyles = makeStyles(theme =>
//     createStyles({
//         card: {
//             maxWidth: 400,
//             margin: "0 auto"
//         }
//     })
// )

interface Props { }

export const LoginContainer: React.FC<Props> = (props) => {
    // const navigate = useNavigate();

    // const onLogin = () => {
    //     console.log("on login")
    //     navigate('/pageB')
    // }

    console.log("login container")

    return (
        <Card>
            <CardHeader title='login' />
            <CardContent>
                <LoginComponent onLogin={function (): void {
                    throw new Error("Function not implemented.");
                }} />
            </CardContent>
        </Card>
    );
};

