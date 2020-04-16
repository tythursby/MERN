import React from "react";
import { PlaceImg, TextContainer, PlaceTitle, ImgContainer, ActionContainer } from "./style";
import LiCard from "../uiElements/LiCard";
import ActionButton from "../formElements/ActionButton";

const PlaceCard = (props) => {
  const { name, region, country, image, coordinates, description, userId } = props;
  return (
    <LiCard>
      <ImgContainer>
        <PlaceImg src={image} alt={name} />
      </ImgContainer>
      <TextContainer>
        <PlaceTitle>{name}</PlaceTitle>
        <h3>
          {region}
          , &nbsp;
          {country}
        </h3>
        <p>
          Memory:&nbsp;
          {description}
        </p>
      </TextContainer>
      <ActionContainer>
        <ActionButton href={`https://google.com/maps/place/${coordinates.lat},${coordinates.lon}`}>
          View On Map
        </ActionButton>
        <ActionButton to={`/${userId}/editPlace`}>Edit</ActionButton>
        <ActionButton danger>Delete</ActionButton>
      </ActionContainer>
    </LiCard>
  );
};

export default PlaceCard;
