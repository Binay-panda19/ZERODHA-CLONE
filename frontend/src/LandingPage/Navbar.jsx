import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom ml-5 "
      style={{
        backgroundColor: "#FFF",
        height: "80px",
        width: "100%",
        position: "fixed",
      }}
    >
      <div className="container p-2">
        <a className="navbar-brand" href="#">
          <img src="/images/logo.svg" style={{ width: "25%" }} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className=" text-muted">
                <a
                  className="active"
                  aria-current="page"
                  href="#"
                  style={{
                    textDecoration: "none",
                    paddingLeft: "36px",
                    fontSize: ".9rem",
                    color: "#666",
                  }}
                >
                  Signup
                </a>
              </li>
              <li className="text-muted">
                <a
                  className="active"
                  href="#"
                  style={{
                    textDecoration: "none",
                    paddingLeft: "36px",
                    fontSize: ".9rem",
                    color: "#666",
                  }}
                >
                  About
                </a>
              </li>
              <li className="text-muted">
                <a
                  className=" active"
                  style={{
                    textDecoration: "none",
                    paddingLeft: "36px",
                    fontSize: ".9rem",
                    color: "#666",
                  }}
                  href="#"
                >
                  Product
                </a>
              </li>
              <li className=" text-muted  ">
                <a
                  className=" active"
                  style={{
                    textDecoration: "none",
                    paddingLeft: "36px",
                    fontSize: ".9rem",
                    color: "#666",
                  }}
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="active"
                  style={{
                    textDecoration: "none",
                    paddingLeft: "36px",
                    fontSize: ".9rem",
                    color: "#666",
                  }}
                  href="#"
                >
                  Support
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
