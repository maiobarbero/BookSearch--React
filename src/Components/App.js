import React from "react";
import BookList from "./BookList";
import Nav from "./Navbar";
import BookDetail from "./BookDetail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { BookProvider } from "../Context/BookContext";
import { SearchProvider } from "../Context/SearchContext";
import { QueryProvider } from "../Context/QueryContext";

function App() {
  return (
    <QueryProvider>
      <SearchProvider>
        <BookProvider>
          <Router>
            <div className="App">
              <Nav />

              <Switch>
                <Route path="/" exact component={BookList} />
                <Route path="/book/:id" component={BookDetail} />
              </Switch>
            </div>
          </Router>
        </BookProvider>
      </SearchProvider>
    </QueryProvider>
  );
}

export default App;
