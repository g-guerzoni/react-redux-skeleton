import React from "react";
// import PropTypes from "prop-types";

// COMPONENTS
import MUITextField from "@material-ui/core/TextField";

const TextField = ({ ...rest }) => (
  <MUITextField variant="outlined" size="small" {...rest} />
);

TextField.propTypes = {};

TextField.defaultProps = {};

export default TextField;
