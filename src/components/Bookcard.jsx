import { Link } from 'react-router-dom';

function BookCard({ book }) {
  return (
    <div style={styles.card}>
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  }
};

export default BookCard;
