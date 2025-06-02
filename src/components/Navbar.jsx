import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/books/Fiction" style={styles.link}>Browse Books</Link>
      <Link to="/add-book" style={styles.link}>Add Book</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    padding: '1rem',
    backgroundColor: '#333',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
  }
};

export default Navbar;
