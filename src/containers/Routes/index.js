import React from "react";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clearErrorMessage } from "../../redux/actions/errorAction";

// COMPONENTS
import Grid from "@material-ui/core/Grid";
import Loading from "../../components/Loading";
import SnackBar from "../../components/SnackBar";
import { primary, secondary } from "../../components/color";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

function loading({ error }) {
  if (error) {
    console.error(error);
    return "Error!";
  } else {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Loading full colored height="80px" width="80px" />
      </Grid>
    );
  }
}

const Home = Loadable({
  loader: () => import("../Home"),
  loading: loading
});

const Error404 = Loadable({
  loader: () => import("../Errors/error404"),
  loading: loading
});

const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    }
  },
  breakpoints,
  typography: {
    fontFamily: "Texta",
    useNextVariants: true
  },
  overrides: {
    MuiTableCell: {
      root: {
        paddingTop: 4,
        paddingBottom: 4,
        "&:last-child": {
          paddingRight: 5
        }
      }
    },
    typography: {},
    MuiTypography: {}
  }
});

const Routes = ({ clearErrorMessage, active, message, type }) => (
  <MuiThemeProvider theme={theme}>
    <Router>
      {
        <SnackBar
          open={active}
          type={type}
          message={message}
          closeSnackBar={clearErrorMessage}
        />
      }
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/word-list" component={Home} />
        <Route component={Error404} />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

Routes.propTypes = {
  error: PropTypes.object
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      clearErrorMessage
    },
    dispatch
  );

const mapSateToProps = store => ({
  type: store.error.snackBar.type,
  active: store.error.snackBar.active,
  message: store.error.snackBar.message
});

export default connect(mapSateToProps, mapDispatchToProps)(Routes);
