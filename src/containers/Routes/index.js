import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import palette from "constants/palette";

// COMPONENTS
import Grid from "@material-ui/core/Grid";
import Loading from "components/Loading";
import SnackBar from "components/SnackBar";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

const ComponentLoading = () => (
  <Grid container direction="row" justify="center" alignItems="center">
    <Loading full colored height="80px" width="80px" />
  </Grid>
);

const Home = React.lazy(() => import("containers/Home"));
const Error404 = React.lazy(() => import("containers/Errors/error404"));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: palette["primary"],
    },
    secondary: {
      main: palette["secondary"],
    },
  },
  typography: {
    fontFamily: "Texta",
    useNextVariants: true,
    h1: {
      fontSize: 28,
    },
  },
});

const Routes = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <React.Suspense fallback={<ComponentLoading />}>
        <SnackBar />
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
