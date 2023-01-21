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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1t8XVlTlC4qje7T4x8SkWP7nyUvyuw4PWn16o7NA0YIJSW7nvBe2A4EUIzGI3yxDBh7E&usqp=CAU"
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
