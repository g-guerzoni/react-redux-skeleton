import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import palette from "../../constants/palette";

// REDUX
import { connect } from "react-redux";
import { clearErrorMessage } from "../../redux/actions/errorAction";

// COMPONENTS
import Grid from "@material-ui/core/Grid";
import Loading from "../../components/Loading";
import SnackBar from "../../components/SnackBar";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const ComponentLoading = () => (
  <Grid container direction="row" justify="center" alignItems="center">
    <Loading full colored height="80px" width="80px" />
  </Grid>
);

const Home = React.lazy(() => import("../Home"));
const Error404 = React.lazy(() => import("../Errors/error404"));

const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
  palette: {
    primary: {
      main: palette["primary"],
    },
    secondary: {
      main: palette["secondary"],
    },
  },
  breakpoints,
  typography: {
    fontFamily: "Texta",
    useNextVariants: true,
  },
});

const mapSateToProps = (store) => {
  const { type, active, message } = store?.error?.snackBar;
  return { type, active, message };
};

const SnakBarComponent = connect(mapSateToProps, {
  clearErrorMessage,
})(({ active, message, type, clearErrorMessage }) => (
  <SnackBar
    open={active}
    type={type}
    message={message}
    closeSnackBar={clearErrorMessage}
  />
));

const Routes = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <React.Suspense fallback={<ComponentLoading />}>
        <SnakBarComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/404" component={Error404} />
          <Route component={Error404} />
        </Switch>
      </React.Suspense>
    </Router>
  </MuiThemeProvider>
);

export default Routes;
