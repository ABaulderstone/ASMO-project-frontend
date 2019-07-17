import React from "react";

const NavbarItem = props => (
    <div className="navbar-dropdown">
        <a className="navbar-item " href={`#${props.page}`}>
        {props.page}
        </a>
    </div>
  );

  export default NavbarItem;