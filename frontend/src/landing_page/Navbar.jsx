import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../utils/authService";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    authService.getCurrentUser().then((data) => {
      setLoggedIn(data.loggedIn);
    });
  }, []);

  const handleLogout = async () => {
    await authService.logout();
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white py-3">
      <div className="container">

        <Link className="navbar-brand" to="/">
          <img src="/media/logo.svg" alt="Logo" style={{ width: "140px" }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">

            <li className="nav-item mx-2">
              <Link className="nav-link text-muted" to="/about">About</Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link text-muted" to="/product">Products</Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link text-muted" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link text-muted" to="/support">Support</Link>
            </li>

            {loggedIn ? (
              <>
                <li className="nav-item mx-2">
                  <Link
                    className="nav-link fw-semibold"
                    to="/dashboard"
                    style={{ color: "#387ed1" }}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-danger btn-sm"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item mx-2">
                  <Link className="nav-link text-muted" to="/login">Login</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link
                    className="btn btn-primary btn-sm px-3"
                    to="/signup"
                    style={{ backgroundColor: "#387ed1", border: "none" }}
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
