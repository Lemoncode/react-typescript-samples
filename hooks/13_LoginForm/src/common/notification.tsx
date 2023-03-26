import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import * as React from "react";

interface Props {
    message: string;
    show: boolean;
    onClose: () => void;
}



export const NotificationComponent = (props: Props) => {
    const { message, show, onClose } = props;

    return (
        <Snackbar
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
            }}
            open={show}
            autoHideDuration={3000}
            onClose={onClose}
            ContentProps={{
                "aria-describedby": "message-id"
            }}
            message={<span id="message-id">{message}</span>}
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ]}
        />
    );
};