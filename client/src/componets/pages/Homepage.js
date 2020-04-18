import React from "react";
import Searchbar from "../layout/Searchbar";
import UserCard from "../layout/UserCard";

const Homepage = ({ users }) => {
  return (
    <div>
      <Searchbar />
      <div className="card-container">
        {users.map((user) => {
          return <UserCard user={user} key={user.id} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
