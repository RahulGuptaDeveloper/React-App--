import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/booksSlice";

function AddBookPage() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    rating: "",
    category: "Fiction"
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author || !formData.description || !formData.rating) {
      alert("Please fill in all fields.");
      return;
    }
    dispatch(addBook({ ...formData, id: Date.now() }));
    navigate(`/books/${formData.category}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Add a New Book</h2>
      <input name="title" placeholder="Title" onChange={handleChange} required /> <br />
      <input name="author" placeholder="Author" onChange={handleChange} required /> <br />
      <textarea name="description" placeholder="Description" onChange={handleChange} required /> <br />
      <input name="rating" placeholder="Rating" onChange={handleChange} required /> <br />
      <select name="category" onChange={handleChange} value={formData.category}>
        <option>Fiction</option>
        <option>Non-Fiction</option>
        <option>Sci-Fi</option>
        <option>Biography</option>
      </select> <br />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookPage;