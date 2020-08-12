import * as React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

interface Props {
  message: string;
  show: boolean;
  onClose: () => void;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    close: {
      padding: theme.spacing(0.5),
    },
  })
);

export const NotificationComponent: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { message, show, onClose } = props;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={show}
      autoHideDuration={3000}
      onClose={onClose}
      ContentProps={{
        "aria-describedby": "message-id",
      }}
      message={<span id="message-id">{message}</span>}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  );
};
