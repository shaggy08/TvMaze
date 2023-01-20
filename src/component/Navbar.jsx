import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar({ query, setquery }) {
  const navigate = useNavigate();
  function handleChange(event) {
    setquery(event.target.value);
  }

  return (
    <header className="header-container">
      <nav className="nav-items">
        <div
          className="nav-logo-name"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            className="logo"
            src="data:image/png;base64,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"
            alt="tv-maze-logo"
          ></img>
          <p className="nav-name">TV MAZE</p>
        </div>

        <div style={{ width: "4px" }}></div>
        <div className="nav-search">
          <AiOutlineSearch />
          <input
            className="nav-search-input"
            type="search"
            placeholder="Search for free shows"
            value={query}
            onChange={handleChange}
          ></input>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
