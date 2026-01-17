import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        padding: '10px',
        backgroundColor: '#333',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}
    >
      <Link style={{ color: 'white' }} to="/">Home</Link>
      <Link style={{ color: 'white' }} to="/about">About</Link>
      <Link style={{ color: 'white' }} to="/services">Services</Link>
      <Link style={{ color: 'white' }} to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;