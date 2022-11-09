import React, { useContext } from "react";
import { Title } from "../../../App";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const { displayName } = user;
  return (
    <div className="container mx-auto py-14">
      <Title title="User Profile" />

      <h1>Welcome {displayName}</h1>
    </div>
  );
};

export default UserProfile;
