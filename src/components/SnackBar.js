import React from "react";
import PropTypes from "prop-types";
import palette from "../constants/palette";

// COMPONENTS
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const styles = makeStyles({
  closeButton: {
    color: "#ffffff",
  },
});

const types = { success: "success", warning: "warning", error: "error" };

const SnackBar = ({ open, type, message, closeSnackBar }) => (
  <Snackbar
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    open={open}
    variant="error"
    autoHideDuration={6000}
    onClose={closeSnackBar}
  >
    <SnackbarContent
      style={{ backgroundColor: palette[types[type]] }}
      message={<span>{message}</span>}
      action={
        <Button className={styles().closeButton} onClick={closeSnackBar}>
          Fechar
        </Button>
      }
    />
  </Snackbar>
);

SnackBar.propTypes = {
  open: PropTypes.bool.isRequired,
  type: PropTypes.string,
  message: PropTypes.string,
  closeSnackBar: PropTypes.func.isRequired,
};

SnackBar.defaultProps = {
  type: "success",
  message: "No message defined",
};

export default SnackBar;
