import React from "react";
import { isEmail } from "validator";

// REDUX
import { connect } from "react-redux";
import { notificationSetMessage } from "../../redux/actions/notificationAction";

// COMPONENTS
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "../../components/inputs/Button";
import TextField from "../../components/inputs/TextField";

const styles = makeStyles({
  content: {
    padding: 10,
  },
  button: {
    margin: "0 5px",
  },
});

const Home = ({ notificationSetMessage }) => {
  const classes = styles();
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(false);
  const [registredEmails, setRegistredEmails] = React.useState([]);

  const subscribe = () => {
    if (registredEmails.includes(email)) {
      setError(true);
      return notificationSetMessage("Email already registered", "warning");
    } else if (isEmail(email)) {
      setError(false);
      setRegistredEmails([...registredEmails, email]);
      return notificationSetMessage("Email registered successfully", "success");
    }

    setError(true);
    return notificationSetMessage("Invalid email", "error");
  };

  return (
    <Grid className={classes.content}>
      <h2>Newslatter:</h2>
      <p>Insert your email</p>
      <Grid container>
        <TextField
          label="Email"
          error={error}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></TextField>
        <Button className={classes.button} onClick={subscribe}>
          Subscribe
        </Button>
      </Grid>
    </Grid>
  );
};

export default connect(null, { notificationSetMessage })(Home);
