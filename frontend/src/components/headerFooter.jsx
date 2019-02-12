import React from 'react';
import { Link } from 'react-router-dom';

export { Header, Footer };

function Header() {
  return (
    <header className="row">
      <nav className="col navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <span className="navbar-brand pl-md-3">
          <Link to="/" style={{ textDecoration: 'none' }}>Shop</Link>
        </span>
        <button className="navbar-toggler mr-md-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto pr-md-3">
          </ul>

          {/*<form method="post" action="/user/logout" className="form-inline my-2 my-lg-0">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
          </form>*/}
          <Link to="/cart" style={{ textDecoration: 'none' }}>View Cart</Link>
        </div>
      </nav>
    </header>
  );
}

function Footer(props) {
  return (
    <footer className="row bg-light">
      <nav className="col flex-column flex-sm-row nav py-2">
        <span className="nav-link">&copy; Shop</span>
      </nav>
    </footer>
  );
}
