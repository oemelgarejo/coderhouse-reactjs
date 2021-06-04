import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <>
            <NavBar collapseOnSelect fixed='top' expand='sm' bg='dark' varian='dark'>
                <Container>
                    <NavBar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/'>Inicio</Nav.Link>
                            <Nav.Link href='/membership'>Membership</Nav.Link>
                            <Nav.Link href='/products'>Productos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </NavBar>
        </>
    )
}
