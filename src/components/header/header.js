import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Dave Boyle</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                
                {/*Home*/}
                <NavItem>
                    <NavLink href="#">
                      <Link to={"/"}>Home</Link>
                    </NavLink>
                </NavItem>
                
                {/*About*/}
                <NavItem>
                    <NavLink href="#">
                      <Link to={"/about"}>About</Link>
                    </NavLink>
                </NavItem>

                {/*Projects*/}
                <NavItem>
                    <NavLink href="#">
                      <Link to={"/projects"}>Projects</Link>
                    </NavLink>
                </NavItem>

                {/*CV*/}
                <NavItem>
                    <NavLink href="#">
                      <Link to={"/cv"}>CV</Link>
                    </NavLink>
                </NavItem>
                
            </Nav>
            </Collapse>
        </Navbar>
    );
  }
}