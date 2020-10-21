import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { QueryContext } from "../Context/QueryContext";
export const BookContext = createContext();

export const BookProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useContext(QueryContext);

  useEffect(() => {
    getBooks();
  }, [query]);

  //Google API
  const URL = "https://www.googleapis.com/books/v1/volumes?q=";

  function getBooks() {
    axios
      .get(`${URL}${query}&printType=books&orderBy=relevance&filter=full`)
      .then((response) => {
        response = response.data;
        setBooks(response.items);

        console.log(response);
      });
    // .catch((_err) => {
    //   window.location.reload(false);
    // });
  }

  return (
    <BookContext.Provider value={[books, setBooks]}>
      {props.children}
    </BookContext.Provider>
  );
};
