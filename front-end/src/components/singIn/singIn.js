import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import "./singIn.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: 15
  },
  buttonMargin: {
    marginTop: "20px"
  },
  overrides: {
    // ...
    MuiOutlinedInput: {
      focused: {
        border: "1px solid #4A90E2"
      },
      "& $notchedOutline": {
        border: "1px solid #4A90E2"
      }
    }
  }
}));

const theme = createMuiTheme({
  overrides: {
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "#000",
          fontWeight: "bold"
        }
      },

      focused: {}
    }
  }
});

export default function SignIn({ logUserIn }) {
  const classes = useStyles();
  const [inputs, setInputs] = useState({});
  let history = useHistory();

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
    console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    logUserIn(inputs, history);
    console.log("TCL: SignIn -> inputs", inputs)
    
    setInputs("");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Grid className={classes.paper}>
        <Avatar
          style={{ backgroundColor: "#282829" }}
          className={classes.avatar}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <MuiThemeProvider theme={theme}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={handleInputChange}
              value={inputs.username || ""}
            />
          </MuiThemeProvider>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleInputChange}
            value={inputs.password || ""}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            style={{
              borderRadius: "5px",
              fontWeight: "600",
              height: "50px",
              /*background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',*/
              background: "#282829",
              boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
            }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid
            className={classes.buttonMargin}
            container
            justify="center"
            spacing={5}
          >
            <Grid item xs={17} spacing={5}>
              <img
                src="https://image.flaticon.com/icons/svg/179/179319.svg"
                width="50"
                height="50"
                alt="Facebook icon"
                title="Facebook icon"
              ></img>
            </Grid>
            <Grid item>
              <a href="http://localhost:3002/auth/google">
                <img
                  src="https://image.flaticon.com/icons/svg/281/281764.svg"
                  width="50"
                  height="50"
                  alt="Search icon"
                  title="Search icon"
                ></img>
              </a>
            </Grid>
          </Grid>
          <Grid className={classes.buttonMargin} container justify="center">
            <Grid item m={3}>
              <Link
                to="/register"
                style={{
                  color: "#000",
                  fontWeight: "600",
                  typography: {
                    fontFamily: "'Montserrat', sans-serif",
                    textTransform: "none"
                  }
                }}
                href="#"
                variant="body2"
              >
                {"Don't have an account? Register"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}
