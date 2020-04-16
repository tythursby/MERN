import React from "react";
import { StyledLi, StyledCard } from "./style";

const LiCard = (props) => {
  const { children, user } = props;
  return (
    <StyledLi>
      <StyledCard user={user}>{children}</StyledCard>
    </StyledLi>
  );
};

export default LiCard;
