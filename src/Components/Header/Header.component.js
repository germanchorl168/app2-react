import React from "react";
import {Link} from "react-router-dom";
export default class Header extends React.Component {
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Inicio
                </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Acerca de
              </Link>
            </li>
          </ul>
          <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"/>
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
        </div>
      </nav>
    );
  }
}
