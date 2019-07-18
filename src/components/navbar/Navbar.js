import React, {Component} from "react";
import PropTypes from "prop-types";
import NavbarItem from "./NavbarItem";
import NavbarBurger from "./NavbarBurger";





export default class Navbar extends Component {
  state = {
    activeMenu: false,
    pages: [{
              name: "dashboard", URL: "/dashboard"
            },
            {
              name: "customers", URL: "/customers/show"
            },
            {
              name: "comments", URL: "/comments"
            },
            {
              name: "staff", URL: "/staff"
            },
            {
              name: "roster", URL: "/roster"
            },
            {
              name: "app", URL: "/app_choice"
            },]
    
    
  };


  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    });
  };
  render() {
    let { pages = [], color } = this.state;
    // let navbarItems = pages.map(page => <NavbarItem page={page.name} key={page.name} URL={page.URL} />);
    return (

      
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavbarItem page="Satisfeed" />
          <NavbarBurger
            active={this.state.activeMenu}
            toggleMenu={this.toggleMenu}
          />
        </div>
        <div
              // className="navbar-menu"
           className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}
        >
          <div className="navbar-start">{pages.map(page => <NavbarItem page={page.name} key={page.name} URL={page.URL} />)}</div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  pages: PropTypes.array.isRequired,
  color: PropTypes.string,
};



