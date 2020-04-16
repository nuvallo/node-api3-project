import React, { Fragment } from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Fragment>
      <Nav>
        <a className="brand" href="#!">
          Node API 3
        </a>
        <ul>
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">About</a>
          </li>
        </ul>
      </Nav>
    </Fragment>
  );
};

const Nav = styled.nav`
  display: flex;
  background: #333;
  justify-content: space-around;

  ul {
    padding: 1%;
    display: flex;
    list-style: none;

    li {
      margin: 5%;

      a {
        font-size: 17px;
        color: #fff;
        text-decoration: none;
      }
    }
  }

  .brand {
    padding: 15px;
    color: #fff;
    text-decoration: none;
    font-size: 25px;
  }
`;

export default Navbar;
