import React, { Fragment } from "react";
import styled from "styled-components";

const UserCard = () => {
  return (
    <Fragment>
      <Card>
        <h4>
          <strong>Name:</strong> Tyler
        </h4>
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
