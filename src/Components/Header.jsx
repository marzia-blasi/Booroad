import { NavLink } from "react-router-dom"; // Assicurati di usare react-router-dom, non solo react-router

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/tripslist", label: "Lista viaggi" },
  { path: "/aboutus", label: "Chi siamo" },
];

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-dark">
      <div className="container">

        <NavLink to="/">
          <img className="nav-logo" src="../logo-transparent.png" alt="Logo" />
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
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : "text-light"}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

{/*           <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="search"
              placeholder="Cerca Viaggi"
            />
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="submit"
            >
              Cerca
            </button>
          </form> */}

        </div>
      </div>
    </nav>
  );
}