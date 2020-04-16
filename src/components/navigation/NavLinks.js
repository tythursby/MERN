import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GroupIcon from "@material-ui/icons/Group";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SettingsIcon from "@material-ui/icons/Settings";
import MessageIcon from "@material-ui/icons/Message";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import TelegramIcon from "@material-ui/icons/Telegram";
import DescriptionIcon from "@material-ui/icons/Description";
import MailIcon from "@material-ui/icons/Mail";
import { StyledNavLink, StyledListItemIcon } from "./style";

const NavLinks = (props) => {
  const { userId } = props;
  return (
    <>
      <List>
        {[
          { link: "Places", icon: <DashboardIcon /> },
          { link: "Inventory", icon: <ListAltIcon /> },
          { link: "Orders", icon: <ShoppingCartIcon /> },
          { link: "Users", icon: <GroupIcon /> },
          { link: "Messages", icon: <MessageIcon /> },
          { link: "Notificaions", icon: <TelegramIcon /> },
        ].map((item) => (
          <StyledNavLink to={`/${userId}/${item.link.toLowerCase()}`} key={item.link}>
            <ListItem button key={item.link}>
              <StyledListItemIcon>{item.icon}</StyledListItemIcon>
              <ListItemText primary={item.link} />
            </ListItem>
          </StyledNavLink>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { link: "Settings", icon: <SettingsIcon /> },
          { link: "Contact", icon: <MailIcon /> },
          { link: "Privacy/Terms", icon: <DescriptionIcon /> },
        ].map((item) => (
          <StyledNavLink to={`/${userId}/${item.link}`} key={item.link}>
            <ListItem button key={item.link}>
              <StyledListItemIcon>{item.icon}</StyledListItemIcon>
              <ListItemText primary={item.link} />
            </ListItem>
          </StyledNavLink>
        ))}
      </List>
    </>
  );
};

export default NavLinks;
