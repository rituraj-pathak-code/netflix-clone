import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  //For navabr scroll effect
  const [show, handleShow] = useState(false);
  useEffect(() => {
    function scrollEffect() {
      if (window.scrollY > 60) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    }
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix-logo"
      ></img>

      {/* Convert the links to Router links Links to like that */}
      <ul className="nav__links">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <a href="#">TV Shows</a>
        </li>
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <Link to="../myList">My List</Link>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <Link to={"../loginpage"}>
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar-img"
        ></img>
      </Link>
    </div>
  );
};

export default Nav;
