import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { auth } from './auth';
import ReactDOM from 'react-dom'


export class NavMenu_LoggedIn extends Component {
  static displayName = NavMenu_LoggedIn.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      isLoggedIn: false
    };
    
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
     
  }
  
 

  render () {

      return (
        <header>
          <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
            <Container>
              <NavbarBrand tag={Link} to="/">Buyble</NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                <ul className="navbar-nav flex-grow">
                   <NavItem>
                     <NavLink tag={Link} className="header" to="/Logout">Logout</NavLink>
                   </NavItem>
                </ul>
              </Collapse>
            </Container>
          </Navbar>
        </header>
      );
    }

}
