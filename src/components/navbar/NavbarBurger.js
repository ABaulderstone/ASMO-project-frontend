import React from "react";


const NavbarBurger = props => (
    <button
      onClick={props.toggleMenu}
      className={`button navbar-burger ${props.active ? 'is-active' : ''}`}
    >
      <span />
      <span />
      <span />
    </button>
  );

  export default NavbarBurger;