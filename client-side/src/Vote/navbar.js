import React,{useState} from 'react'
import {Row,Col,Navbar,Collapse,NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

function NavBar(){
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
          <Navbar color="dark" dark>
            <NavbarBrand to="/" tag={RRNavLink} className="mr-auto">Home</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink to="/createVote" tag={RRNavLink}>Make a vote</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/info" tag={RRNavLink} >Info</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
  );
}
// }

export default NavBar;
