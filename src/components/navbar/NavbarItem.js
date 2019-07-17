import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = props => (
        

        <Link className="navbar-item " to={props.URL}>
            {props.page} 
         </Link> 


  );

  export default NavbarItem;