import { Button, Card, CardContent, CardHeader, createStyles, TextField } from "@mui/material";
import { makeStyles } from "@mui/material/styles";
import * as React from "react";
import { LoginComponent } from "./loginPage";

const useStyles = makeStyles(theme =>
    createStyles({
        card: {
            maxWidth: 400,
            margin: "0 auto"
        }
    })
)

interface Props { }

export const LoginContainer: React.FC<Props> = (props) => {
    // const { classes } = props;

    return (
        <Card>
            <CardHeader title='login' />
            <CardContent>
                <LoginComponent />
            </CardContent>
        </Card>
    );
};

