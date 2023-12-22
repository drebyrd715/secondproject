import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <h4>Home Page</h4>
      </Link>

      <Link to="/PokemonPics">
        <h4>Pokemon</h4>
      </Link>

      <Link to="/About">
        <h4>Community Page</h4>
      </Link>
    </div>
  );
}

export default Nav;
