import React from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h5 style={{ boxShadow: "5px 5px 0px 0px #000", margin: "0" }}>DummyRecipes</h5>
          </Link>
          <button className="nav-btn">
            <FiAlignJustify />
          </button>
        </div>
        <div className="nav-links show-links">
          <Link to="/" className="nav-link" activeClassName="active-link">
            home
          </Link>
          <Link to="/recipes" className="nav-link" activeClassName="active-link">
            recipes
          </Link>
          <Link to="/tags" className="nav-link" activeClassName="active-link">
            tags
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active-link">
            about
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
