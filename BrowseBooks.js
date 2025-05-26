import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BrowseBooksPage() {
  const { category } = useParams();
  const books = useSelector((state) => state.books.items);

  const filtered = books.filter(
    (book) => category === "All" || book.category === category
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Browse Books - {category}</h2>
      <ul>
        {filtered.map((book) => (
          <li key={book.id}>
            <Link to={`/books/details/${book.id}`}>{book.title}</Link> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrowseBooksPage;