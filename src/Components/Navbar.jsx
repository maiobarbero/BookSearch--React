import React, { useContext, useState } from "react";
import styled from "styled-components";
import { SearchContext } from "../Context/SearchContext";
import { QueryContext } from "../Context/QueryContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #044d79;
  width: 100%;
  height: 60px;
`;
const Title = styled.h1`
  color: #fff;
  font-size: 30px;
  margin: 0 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Input = styled.input`
  width: 80%;
  color: #fff;
  outline: none;
  border: none;
  height: 100%;
  font-size: 20px;
  background: #71bce8;
  border-radius: 30px 0 0 30px;
  padding: 0 15px;
  @media (max-width: 768px) {
    border-radius: 0;
  }
`;

const Form = styled.form`
  width: 60%;
  height: 30px;
  display: flex;
  align-items: center;
  margin. 0 30px;
`;

const Button = styled.button`
  height: 100%;
  background: #71bce8;
  outline: none;
  border: none;
  color: #fff;
  font-size: 20px;
`;

const Nav = () => {
  const [search, setSearch] = useContext(SearchContext);
  const [query, setQuery] = useContext(QueryContext);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const resetSearch = () => {
    setSearch("");
    setQuery("");
    console.log(query);
  };

  return (
    <NavBar>
      <Link to={`/`} onClick={resetSearch}>
        <Title>BookSearch</Title>
      </Link>
      <Form onSubmit={getSearch}>
        <Input
          type="text"
          placeholder="Search"
          value={search}
          onChange={updateSearch}
        />
        <Button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </Form>
    </NavBar>
  );
};

export default Nav;
