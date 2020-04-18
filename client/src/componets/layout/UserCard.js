import React, { Fragment } from "react";
import styled from "styled-components";

const UserCard = ({ user }) => {
  return (
    <Fragment>
      <Card>
        <h4>
          <strong>Name:</strong> {user.name}
        </h4>
        <button>Edit</button>
        <button>Delete</button>
      </Card>
    </Fragment>
  );
};

const Card = styled.div`
  width: 300px;
  height: 300px;
  padding: 1%;
  text-align: center;
  background: #ccc;
`;

export default UserCard;
