import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bottom-0 w-full bg-green-300 py-4 mt-auto">
      <Link to={'/about'}>About Us</Link>
      <div className="text-center">
        <p>&copy; 2024 Trisolaris Coffee. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;