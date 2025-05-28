import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function BrowseBooks() {
  const { category } = useParams();
  const allBooks = useSelector(state => state.books.books);
  const [search, setSearch] = useState("");

  const filteredBooks = allBooks.filter(book =>
    book.category === category &&
    (book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <h2>Browsing {category} Books</h2>
      <input
        type="text"
        placeholder="Search title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredBooks.map(book => (
          <li key={book.id}>
            {book.title} by {book.author} - <Link to={`/book/${book.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrowseBooks;
