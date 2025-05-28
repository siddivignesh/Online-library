import { Link } from 'react-router-dom';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi'];

function Home() {
  return (
    <div>
      <h1>Welcome to the Online Library</h1>
      <h2>Categories</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat}><Link to={`/books/${cat}`}>{cat}</Link></li>
        ))}
      </ul>
      <h2>Popular Books</h2>
      <Link to="/books/Fiction">View Popular Books</Link>
    </div>
  );
}
export default Home;
