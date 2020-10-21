import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Card = styled.div`
  width: 25vw;
  text-align: center;
  background: #044d79;
  margin: 20px;
  color: #fff;
  padding: 10px;
  border-radius: 6px;

  @media (max-width: 768px) {
    width: 80vw;
    margin: 20px auto;
    padding: 5px;
  }
`;

const Img = styled.img`
width:100%
height:auto;
content-fit:contain;
`;

const Title = styled.h3`
  color: #fff;
`;
const Book = ({ id, title, author, cover }) => {
  return (
    <Card>
      <Link to={`book/${id}`}>
        <Title>{title}</Title>
      </Link>
      <Img src={cover} alt={title} />
      <h5>
        <span>{author}</span>
      </h5>
    </Card>
  );
};

export default Book;
