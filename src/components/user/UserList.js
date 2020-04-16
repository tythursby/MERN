import React from "react";

import { StyledDiv, StyledUl, UserInfo } from "./style";
import UserCard from "./UserCard";

const UserList = (props) => {
  const { users } = props;
  if (users.length === 0) {
    return (
      <StyledDiv card>
        <UserInfo color="white">No Users Found</UserInfo>
      </StyledDiv>
    );
  }

  return (
    <StyledDiv>
      <StyledUl data-testid="userList">
        {users.map((user) => {
          return (
            <UserCard
              key={user.userId}
              userId={user.userId}
              image={user.image}
              name={user.name}
              placeCount={user.places}
            />
          );
        })}
      </StyledUl>
    </StyledDiv>
  );
};

export default UserList;
