import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="/books/All">Browse Books</Link>
      <Link to="/add">Add Book</Link>
    </nav>
  );
}

export default NavBar;
