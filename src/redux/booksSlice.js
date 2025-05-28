import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: '1', title: '1984', author: 'George Orwell', category: 'Fiction', description: 'Dystopian novel', rating: 4.5 },
    { id: '2', title: 'A Brief History of Time', author: 'Stephen Hawking', category: 'Non-Fiction', description: 'Science and cosmology', rating: 4.7 }
  ]
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
