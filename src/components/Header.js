import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => (
    <header>
        <h1>Expensify Portfolio</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
        <NavLink to="/about" activeClassName="is-active">About</NavLink>
        <NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink>
    </header>
);

export default Header;