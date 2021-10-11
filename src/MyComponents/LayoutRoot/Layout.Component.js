import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { ROUTERS } from "Constants";

const LayoutRoot = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Link to={ROUTERS.Home}>
            <Button color={"inherit"} variant="text">
              Home
            </Button>
          </Link>
          <Link to={ROUTERS.Product}>
            <Button color={"inherit"} variant="text">
              Product
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};
export default LayoutRoot;
