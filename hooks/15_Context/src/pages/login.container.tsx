import { Card, CardContent, CardHeader, createStyles, makeStyles, styled } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { LoginComponent } from "./login.component";
import { LoginEntity, createEmptyLogin } from "../model/login";
import { isValidLogin } from "../api/login";
import { NotificationComponent } from "../common";

interface Props { }

// const useStyles = makeStyles(theme =>
//     createStyles({
//       card: {
//         maxWidth: 400,
//         margin: "0 auto"
//       }
//     })
//   );

const SampleCardStyled = styled(Card)(({ theme }) => ({
    maxWidth: 400,
    margin: "0 auto"
}))

export const LoginContainer: React.FC<Props> = (props) => {
    const [loginInfo, setLoginInfo] = React.useState<LoginEntity>(
        createEmptyLogin()
    )
    const [isShowAlert, setShowAlert] = React.useState(false);

    const navigate = useNavigate();

    const loginSucceeded = (isValid: boolean) => {
        if (isValid) {
            navigate('/pageB')
        } else {
            setShowAlert(true)
        }
    }

    const handleLogin = (login: LoginEntity) => {
        console.log(login);
        isValidLogin(login).then(loginSucceeded);
    };

    return (
        <>
            <SampleCardStyled>
                <CardHeader title='login' />
                <CardContent>
                    <LoginComponent onLogin={handleLogin} />
                </CardContent>
            </SampleCardStyled>
            <NotificationComponent
                message="Invalid login or password, please type again"
                show={isShowAlert}
                onClose={() => setShowAlert(false)} />
        </>
    );
};

