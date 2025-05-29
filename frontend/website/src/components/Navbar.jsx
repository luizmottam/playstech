import { Link, Outlet } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">My Website</Link>
        </div>
        <ul className="navbar-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
      <Outlet />
    </div>
  );
}

export default Navbar;
