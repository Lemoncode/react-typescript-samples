import * as React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core";

interface Props {
  classes?: any;
  message: string;
  show: boolean;
  onClose: () => void;
}

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  }
});

const NotificationComponentInner = (props: Props) => {
  const { classes, message, show, onClose } = props;

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
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
};

export const NotificationComponent = withStyles(styles)(
  NotificationComponentInner
);
