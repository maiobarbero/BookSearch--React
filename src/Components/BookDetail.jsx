import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BookContext } from "../Context/BookContext";

const Card = styled.div`
  width: 80vw;
  text-align: center;
  background: #044d79;
  margin: 20px auto;
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
const BookDetail = ({ match }) => {
  useEffect(() => {
    fecthItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fecthItem = async () => {
    const fecthItem = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${match.params.id}`
    );

    const item = await fecthItem.json();
    setItem(item.items[0].volumeInfo);
    console.log(item.items[0].volumeInfo.imageLinks.thumbnail);
  };

  return (
    <Card>
      <Title>
        <h1>
          You searched
          <br />
          {item.title}
          <br />
          of {item.authors}
        </h1>
      </Title>

      <h2>
        Here you can see the preview of the book
        <br />
        <br />
        <a href={item.previewLink}>Preview Link</a>
      </h2>
    </Card>
  );
};

export default BookDetail;
