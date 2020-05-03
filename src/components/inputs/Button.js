import React from "react";
import PropTypes from "prop-types";

// COMPOENTS
import Loading from "components/Loading";
import MuiButton from "@material-ui/core/Button";

const Button = ({ loading, disabled, children, color, onClick, ...rest }) => {
  return (
    <MuiButton
      variant="contained"
      color={color}
      onClick={disabled ? () => {} : onClick}
      {...rest}
    >
      {loading ? <Loading /> : children}
    </MuiButton>
  );
};

Button.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  loading: false,
  disabled: false,
  color: "primary",
};

export default Button;
