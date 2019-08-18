import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from 'Data/icons/web.png';

const MyNavbar = props => (
    <Navbar collapseOnSelect>
        <Nav className="mr-auto">
            <Nav className="justify-content-center">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                    />
                    <span>GO TO </span>
                    <span className="headerSpan">TOP</span>
                </Navbar.Brand>
            </Nav>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
                <Nav.Link active>Главная</Nav.Link>
                <Nav.Link>Новости</Nav.Link>
                <Nav.Link>О компании</Nav.Link>
                <Nav.Link>Контакты</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default MyNavbar