import React from "react";
import PlaceCard from "./PlaceCard";
import ActionButton from "../formElements/ActionButton";
import LiCard from "../uiElements/LiCard";
import { StyledDiv, StyledUl } from "./style";

const PlaceList = (props) => {
  const { items, userId } = props;
  if (items.length === 0) {
    return (
      <LiCard noPlace>
        <h2>No Places Found. Create one?</h2>
        <ActionButton to={`/${userId}/newPlace`}>Create New Place</ActionButton>
      </LiCard>
    );
  }

  return (
    <StyledDiv>
      <StyledUl>
        {items.map((place) => (
          <PlaceCard
            key={place.placeId}
            placeId={place.placeId}
            name={place.name}
            region={place.region}
            country={place.country}
            image={place.image}
            coordinates={place.location}
            userId={place.userId}
            description={place.description}
          />
        ))}
      </StyledUl>
    </StyledDiv>
  );
};
export default PlaceList;
