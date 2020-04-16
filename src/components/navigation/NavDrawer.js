import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import NavLinks from "./NavLinks";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});
export default function NavDrawer(props) {
  const classes = useStyles();
  const { toggleDrawer, open } = props;

  const DrawerList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <NavLinks />
    </div>
  );

  return (
    <div>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{ style: { position: "absolute" } }}
        BackdropProps={{ style: { position: "absolute" } }}
        ModalProps={{
          container: document.getElementById("drawer-container"),
          style: { position: "absolute" },
        }}
        variant="temporary"
      >
        <DrawerList />
      </Drawer>
    </div>
  );
}
