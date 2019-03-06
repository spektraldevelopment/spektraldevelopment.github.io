import React from 'react';
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
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                
                {/*About*/}
                <NavItem>
                    <NavLink href="#">About</NavLink>
                </NavItem>

                {/*Projects*/}
                <NavItem>
                    <NavLink href="#">Projects</NavLink>
                </NavItem>

                {/*CV*/}
                <NavItem>
                    <NavLink href="#">CV</NavLink>
                </NavItem>
                
            </Nav>
            </Collapse>
        </Navbar>
    );
  }
}