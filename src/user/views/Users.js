import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ty T",
      image: "http://placekitten.com/g/150/150",
      places: 3,
    },
  ];
  return <UserList users={USERS} />;
};

export default Users;
