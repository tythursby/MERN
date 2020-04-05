import React from "react";
import styled from "styled-components";
import UserItem from "./UserItem";

const StyledDiv = styled.div`
  align-self: center;
  vertical-align: middle;
`;
const StyledUl = styled.ul`
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const UserList = (props) => {
  const { users } = props;
  if (users.length === 0) {
    return (
      <StyledDiv>
        <h2>No Users Found</h2>
      </StyledDiv>
    );
  }

  return (
    <StyledUl>
      {users.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </StyledUl>
  );
};

export default UserList;
