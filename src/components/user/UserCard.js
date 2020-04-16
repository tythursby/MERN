import React from "react";
import { Link } from "react-router-dom";

import LiCard from "../uiElements/LiCard";
import { ImgContainer, Img, UserInfo, UserName, TextContainer } from "./style";

const UserCard = (props) => {
  const { image, name, placeCount, userId } = props;
  return (
    <Link to={`/${userId}/places`} style={{ textDecoration: "none" }}>
      <LiCard user>
        <ImgContainer>
          <Img src={image} alt={name} />
        </ImgContainer>
        <TextContainer>
          <UserName color="white">{name}</UserName>
          <UserInfo color="#cff043">
            {placeCount}
            &nbsp;
            {placeCount === 1 ? "Place" : "Places"}
          </UserInfo>
        </TextContainer>
      </LiCard>
    </Link>
  );
};

export default UserCard;
