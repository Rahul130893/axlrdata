import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "100px",
              gap: "10%",
              color: "white",
              width: "100%",
            }}
          >
            <MenuItem style={{ display: "flex", gap: "200px" }}>
              <Link
                to={""}
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                <Typography textAlign="center">AxlrData</Typography>
              </Link>
              <Link
                to={"category"}
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                {" "}
                <Typography textAlign="center">Category</Typography>
              </Link>
              <Link
                to={"distance"}
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                <Typography textAlign="center">Distance</Typography>
              </Link>

              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
