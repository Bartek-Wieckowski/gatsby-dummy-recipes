import React, { useState } from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h5 style={{ boxShadow: "5px 5px 0px 0px #000", margin: "0" }}>DummyRecipes</h5>
          </Link>
          <button className="nav-btn" onClick={() => setShow((prev) => !prev)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link to="/" className="nav-link" activeClassName="active-link" onClick={() => setShow(false)}>
            home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            recipes
          </Link>
          <Link to="/tags" className="nav-link" activeClassName="active-link" onClick={() => setShow(false)}>
            tags
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active-link" onClick={() => setShow(false)}>
            about
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={() => setShow(false)}>
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
