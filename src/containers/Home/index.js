import React from "react";

import Grid from "@material-ui/core/Grid";

import Button from "../../components/inputs/Button";
import TextField from "../../components/inputs/TextField";

const Home = () => (
  <Grid
    container
    justify="space-around"
    alignContent="flex-end"
    style={{ padding: 10 }}
  >
    <TextField>Digite aqui</TextField>
    <Button>Hey</Button>
  </Grid>
);

export default Home;
