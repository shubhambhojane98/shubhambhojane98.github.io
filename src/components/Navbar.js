import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Container,
  Content,
  Dropdown,
  Footer,
  Header,
  Icon,
  Nav,
  Navbar,
} from "rsuite";

const Navbars = () => {
  return (
    <div>
      <Container>
        <Header>
          <Navbar appearance="inverse">
            {/* <Navbar.Header>
              <a className="navbar-brand logo">BRAND</a>
            </Navbar.Header> */}
            <Navbar.Body>
              <Nav>
                <Nav.Item
                  componentClass={Link}
                  to={"/"}
                  icon={<Icon icon="home" />}
                >
                  Home
                </Nav.Item>
                <Nav.Item componentClass={NavLink} to={"/about"}>
                  About Me
                </Nav.Item>
                <Nav.Item componentClass={NavLink} to={"/service"}>
                  Portfolio
                </Nav.Item>
                <Nav.Item componentClass={NavLink} to={"/contact"}>
                  Contact Me
                </Nav.Item>
              </Nav>
              {/* <Nav pullRight>
              <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
            </Nav> */}
            </Navbar.Body>
          </Navbar>
        </Header>
      </Container>
    </div>
  );
};

export default Navbars;
