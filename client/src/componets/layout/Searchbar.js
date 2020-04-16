import React, { Fragment } from "react";
import styled from "styled-components";

const Searchbar = () => {
  return (
    <Fragment>
      <SearchForm>
        <label alt="search for user" hidden>
          Search
        </label>
        <input
          name="search"
          id="search"
          placeholder="Search for user"
          type="text"
        ></input>
        <button>Search</button>
      </SearchForm>
    </Fragment>
  );
};

const SearchForm = styled.form`
  text-align: center;
  padding: 2%;

  button {
    margin-left: 1%;
  }
`;

export default Searchbar;
