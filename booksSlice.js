import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, title: "1984", author: "George Orwell", description: "Dystopian novel.", rating: "4.5", category: "Fiction" },
    { id: 2, title: "Sapiens", author: "Yuval Noah Harari", description: "History of humankind.", rating: "4.7", category: "Non-Fiction" }
  ]
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.items.push(action.payload);
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
