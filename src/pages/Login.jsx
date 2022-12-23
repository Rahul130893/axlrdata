import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useEffect } from "react";
import LogIn from "../redux/auth/action";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const dispatch = useDispatch();

  const AuthStatus = useSelector((store) => store.authReducer.auth);
  console.log(AuthStatus);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(LogIn({ user_email: userEmail, user_password: userPass }));
  };

  const handleChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handleChangePass = (e) => {
    setUserPass(e.target.value);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: "white",
        borderRadius: "61px",
        marginTop: "8%",
        marginBottom: "10%",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          marginTop: "30px",
          marginBottom: "30px",

          padding: "40px",
        }}
      >
        <Typography component="h1" variant="h5" style={{ marginLeft: "0" }}>
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            variant="standard"
            name="email"
            autoComplete="email"
            onChange={handleChangeEmail}
            // autoFocus
            value={userEmail}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            variant="standard"
            id="password"
            autoComplete="current-password"
            onChange={handleChangePass}
            value={userPass}
          />
          <Typography component="h1" variant="h5">
            <Link href="#" variant="body2">
              Forgot your password?
            </Link>
          </Typography>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "#059588" }}
            sx={{ mt: 3, mb: 2, width: "40%", marginLeft: "60%" }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
