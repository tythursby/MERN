import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  text-align: center;
  list-style-type: none;
`;
const ItemContent = styled.div`
  border: 1px solid #d4d4d4;
  margin: 1rem;
  border-radius: 5px;
`;
const ImgContainer = styled.div`
  margin: 1rem;
`;
const Img = styled.img`
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  border-radius: 100%;
`;
const UserInfo = styled.div``;

const UserItem = (props) => {
  const { image, name, placeCount } = props;
  return (
    <StyledLi>
      <ItemContent>
        <ImgContainer>
          <Img src={image} alt={name} />
        </ImgContainer>
        <UserInfo>
          <h2>{name}</h2>
          <h3>
            {placeCount}
            {placeCount === 1 ? "Place" : "Places"}
          </h3>
        </UserInfo>
      </ItemContent>
    </StyledLi>
  );
};

export default UserItem;
