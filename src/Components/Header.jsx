import { NavLink } from "react-router";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-dark">
        <div className="container">
          <NavLink to="/">
            <img className="nav-logo" src="../logo-transparent.png" alt="" />
          </NavLink>
          <button
            className="navbar-toggler bg-light d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-light"
                  to="/tripslist"
                  aria-current="page"
                >
                  Lista Viaggi
                </NavLink>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Cerca Viaggi"
              />
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="submit"
              >
                Cerca
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
