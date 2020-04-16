import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/places/PlaceList";

const PLACES = [
  {
    name: "Narragansett Beach",
    region: "Rhode Island",
    country: "USA",
    image: "http://placekitten.com/g/300/200",
    placeId: 123,
    userId: "u1",
    location: {
      lat: 41.436495,
      lon: -71.455678,
    },
    description: "Home",
  },
  {
    name: "White Mountains",
    region: "New Hampshire",
    country: "USA",
    image: "http://placekitten.com/g/300/200",
    placeId: 124,
    userId: "u2",
    location: {
      lat: 44.074068,
      lon: -71.23602,
    },
    description: "Northup's cabin in Bartlett with family",
  },
];

const UserPlaces = () => {
  const filterId = useParams().userId;
  const userPlaces = PLACES.filter((place) => place.userId === filterId);
  return <PlaceList items={userPlaces} />;
};
export default UserPlaces;
