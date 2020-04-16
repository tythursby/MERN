import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { StyledAppBar, GlobalStyle, Img } from "./style";
import logo from "../../images/Dubi_Brand.png";
import NavDrawer from "./NavDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  brand: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [state, setState] = useState({
    open: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, open });
  };

  return (
    <div className={classes.root}>
      <GlobalStyle />
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <NavDrawer open={state.open} toggleDrawer={toggleDrawer} />
          <Link to="/" className={classes.brand}>
            <Img src={logo} data-testid="logoImg" />
          </Link>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}
