import React from "react";
import UserList from "../components/user/UserList";

const Users = () => {
  const USERS = [
    {
      userId: "u1",
      name: "Ty T",
      image: "http://placekitten.com/g/150/150",
      places: 3,
    },
    {
      userId: "u2",
      name: "Ty S",
      image: "http://placekitten.com/g/150/150",
      places: 3,
    },
  ];
  return <UserList users={USERS} />;
};

export default Users;
