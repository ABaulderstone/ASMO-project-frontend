import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = props => (
    

        <div className="navbar-dropdown">
        <Link to={props.URL}>
        <a className="navbar-item ">
        {props.page}
        </a>
        </Link>
    </div>


  );

  export default NavbarItem;