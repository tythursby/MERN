import React from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "./style";

const ActionButton = (props) => {
  const { href, to, type, onClick, danger, disabled, children } = props;
  if (href) {
    return (
      <a target="blank" href={href}>
        <StyledButton>{children}</StyledButton>
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to}>
        <StyledButton>{children}</StyledButton>
      </Link>
    );
  }
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled} danger={danger}>
      {children}
    </StyledButton>
  );
};

export default ActionButton;
