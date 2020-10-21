import React, { useContext } from "react";
import Book from "./Book";
import { BookContext } from "../Context/BookContext";
import { QueryContext } from "../Context/QueryContext";
import styled from "styled-components";

const BookContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  padding: 0 50px;
  margin: 0 auto;
  @media (max-width: 768px) {
    display: block;
    padding: 0;
  }
`;
const SearchTitle = styled.h1`
  color: #fff;
  text-align: center;
  paddign: 0;
  margin: 0;
  margin-top: 10px;
`;

const BookList = () => {
  const [books, setBook] = useContext(BookContext);
  const [query, setQuery] = useContext(QueryContext);

  if (books == undefined) {
    return <SearchTitle>Sorry, we didn't find your book</SearchTitle>;
  } else if (query == "") {
    return <SearchTitle>Try to search a book</SearchTitle>;
  } else {
    return (
      <div>
        <SearchTitle>Here the rusults for {query}</SearchTitle>

        <BookContainer>
          {books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              publisher={book.volumeInfo.publisher}
              cover={book.volumeInfo.imageLinks.thumbnail}
            />
          ))}
        </BookContainer>
      </div>
    );
  }
};

export default BookList;
