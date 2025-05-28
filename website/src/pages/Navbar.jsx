import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <label htmlFor="">
            <img className="logo" src="/logo.svg" alt="logo" />
            <p>PLAYS TECH</p>
          </label>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Produtos</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Sobre</Link>
            </li>
          </ul>
          <div className="buttons">
            <input
              className="create_account"
              type="button"
              value="Abra sua conta"
            />
            <input className="account" type="button" value="Entrar" />
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
