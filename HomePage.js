import React from "react";
import { Link } from "react-router-dom";

const categories = ["Fiction", "Non-fiction", "Science", "History"];
const popularBooks = [
  { id: 1, title: "The Great Gatsby" },
  { id: 2, title: "Sapiens" },
  { id: 3, title: "A Brief History of Time" },
];

function HomePage() {
  return (
    <div className="container" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ color: "#2c3e50" }}>Welcome to BookVault</h1>
      
      <h2>Categories</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {categories.map((cat) => (
          <li key={cat} style={{ margin: "10px 0" }}>
            <Link to={`/books/${cat}`} style={{ color: "#3498db", textDecoration: "none" }}>
              {cat}
            </Link>
          </li>
        ))}
      </ul>

      <h2>Popular Books</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {popularBooks.map((book) => (
          <li key={book.id} style={{ margin: "10px 0" }}>
            <Link to={`/books/details/${book.id}`} style={{ color: "#3498db", textDecoration: "none" }}>
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
