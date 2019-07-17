import React, {Component} from "react";
import PropTypes from "prop-types";
import NavbarItem from "./NavbarItem";
import NavbarBurger from "./NavbarBurger";




export default class Navbar extends Component {
  state = {
    activeMenu: false,
    pages: ["DashBoard", "Customer", "sitemap"],
    color: "green"
  };
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    });
  };
  render() {
    let { pages = [], color } = this.state;
    let navbarItems = this.state.pages.map(page => <NavbarItem page={page} key={page} />);
    return (
      <nav className="navbar" role="navigation" aria-label="dropdown navigation">
        <div className="navbar-brand">
          <NavbarItem page="Satisfeed" />
          <NavbarBurger
            active={this.state.activeMenu}
            toggleMenu={this.toggleMenu}
          />
        </div>
        <div
          className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}
        >
          <div className="navbar-start">{navbarItems}</div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  pages: PropTypes.array.isRequired,
  color: PropTypes.string,
};

