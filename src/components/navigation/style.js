import styled, { createGlobalStyle } from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { NavLink } from "react-router-dom";

export const StyledAppBar = styled(AppBar)`
  background: ${(props) => props.theme.primary};
  margintop: 0;
  color: ${(props) => props.theme.navText};
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #818181;
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  color: ${(props) => props.theme.icons};
`;

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }
`;

export const Img = styled.img`
  max-height: 25px;
`;
