import React, { Component } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { toggleNavbar } from '../actions/appActions';
import { logout } from '../actions/authActions';

class HNavbar extends Component {
  selected = path => {
    if (path !== window.location.pathname) {
      return '';
    } else {
      return ' active';
    }
  };
  toggle = () => {
    this.props.toggleNavbar();
  };
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    const { auth } = this.props;
    console.log(auth);

    return (
      <Navbar bg="light" expand="md" variant="light" fixed="top">
        <Navbar.Brand as={RRNavLink} to="/">
          PQI TOOLS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={RRNavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={RRNavLink} exact to="/dashboard">
              Dashboard
            </Nav.Link>
            <NavDropdown title="House Audits" id="basic-nav-dropdown">
              <NavDropdown.Item as={RRNavLink} exact to="/houseaudits">
                All House Audits
              </NavDropdown.Item>
              <NavDropdown.Item as={RRNavLink} exact to="/houseaudits/new">
                New House Audit
              </NavDropdown.Item>
              <NavDropdown.Item as={RRNavLink} exact to="/houseaudits/generalreport">
                House Audits General Report
              </NavDropdown.Item>
              <NavDropdown.Item as={RRNavLink} exact to="/houseaudits/findingsreport">
                Findings Report
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {!auth.isSignedIn ? (
              <Nav.Link as={RRNavLink} exact to="/login">
                <Button variant="outline-primary">Login</Button>
              </Nav.Link>
            ) : (
              <NavDropdown
                className="accountIcon"
                alignRight
                title={<i className="fas fa-user-circle fa-2x" />}
                id="account-dropdown"
              >
                {!auth.user ? (
                  ''
                ) : (
                  <div>
                    <NavDropdown.Item>{`${auth.user.firstName} ${auth.user.lastName}`}</NavDropdown.Item>
                    <NavDropdown.Divider />
                  </div>
                )}
                <NavDropdown.Item as={RRNavLink} exact to="/users/account">
                  Account
                </NavDropdown.Item>
                <NavDropdown.Item onClick={e => this.logout(e)}>Sign Out</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {
    toggleNavbar,
    logout
  }
)(HNavbar);
