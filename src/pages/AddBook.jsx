import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const [form, setForm] = useState({ title: '', author: '', category: '', description: '', rating: '' });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.category || !form.description || !form.rating) {
      setError("Please fill all fields");
      return;
    }
    dispatch(addBook({ ...form, id: Date.now().toString() }));
    navigate(`/books/${form.category}`);
  };

  return (
    <div>
      <h2>Add a Book</h2>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} /><br/>
        <input name="author" placeholder="Author" onChange={handleChange} /><br/>
        <input name="category" placeholder="Category" onChange={handleChange} /><br/>
        <textarea name="description" placeholder="Description" onChange={handleChange}></textarea><br/>
        <input name="rating" placeholder="Rating" type="number" step="0.1" onChange={handleChange} /><br/>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
