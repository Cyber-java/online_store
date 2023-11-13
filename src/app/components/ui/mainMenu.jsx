import React from "react";
import { Link } from "react-router-dom";
const MainMenu = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-darLink">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Main
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/catalog">
              Catalog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/singIn">
              SingIn
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainMenu;
