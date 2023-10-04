import React from "react";
import { BsPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link
      to="/"
      className="navbar"
    >
      <BsPersonPlusFill color="white" fontSize={30} />
      <div className="navbar__content">
        <span className="navbar__content__name">HR</span>net
      </div>
    </Link>
  );
};

export default Navbar;
